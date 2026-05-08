const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest =
  'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

beforeAll(async () => {
  console.log(fileUnderTest);
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get(fileUnderTest);
});

afterAll(async () => {
  await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
  let stack = await driver.findElement(By.id('top_of_stack')).getText();
  expect(stack).toEqual('n/a');
});

describe('Clicking "Poppa stacken"', () => {
  it('should alert the user that the stack is empty', async () => {
    let pop = await driver.findElement(By.id('pop'));
    await pop.click();
    let alert = await driver.switchTo().alert();
    let text = await alert.getText();

    expect(text).toBe('Stacken är tom, finns inget att tömma!');
    await alert.dismiss();
  });

  describe('Clicking "Pusha till stacken"', () => {
    it('should open a prompt box', async () => {
      let push = await driver.findElement(By.id('push'));
      await push.click();
      let alert = await driver.switchTo().alert();
      await alert.sendKeys('Bananer');
      await alert.accept();
    });
  });
});
