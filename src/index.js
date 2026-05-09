import * as stack from './stack.js';

window.onload = function () {
  console.log('done');

  var pop = document.getElementById('pop');
  var push = document.getElementById('push');
  var peek = document.getElementById('peek');
  var display = document.getElementById('top_of_stack');

  pop.addEventListener('click', function () {
    var popValue = stack.pop();
    if (popValue === 'Stacken är tom, finns inget att tömma!') {
      alert(popValue);
      return;
    }
    var text = 'Tog bort ' + popValue;
    alert(text);
  });

  push.addEventListener('click', function () {
    var x = prompt('Vad ska vi lägga på stacken?');
    stack.push(x);
    display.innerHTML = x;
  });

  reverse.addEventListener('click', function () {
    stack.reverse();
    display.innerHTML = stack.peek();
  });

  peek.addEventListener('click', function () {
    display.innerHTML = stack.peek();
  });
};
