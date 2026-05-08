const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
  expect(stack.peek()).toBeUndefined();
});
test('Reverse on a stack with two or more elements should retrn the stack in reverse order', () => {
  stack.push('Mocha');
  stack.push('Cat Stevens');
  stack.push('Steve French');
  stack.reverse();
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe('Mocha');
});

test('peek on stack with one element returns that element', () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});
test('peek on stack with two or more elements returns the top element', () => {
  stack.push(1);
  stack.push('wow');
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});
