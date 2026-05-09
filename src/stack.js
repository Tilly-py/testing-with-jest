const _ = require('underscore');

let stack = [];

exports.push = function (x) {
  stack.push(x);
};

exports.pop = function () {
  if (stack.length === 0) {
    return 'Stacken är tom, finns inget att tömma!';
  }
  return stack.pop();
};

exports.peek = function () {
  return _.last(stack);
};

exports.reverse = function () {
  return stack.reverse();
};
