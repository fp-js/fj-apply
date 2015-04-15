import {curry2} from 'fj-curry';

// Don't use arrow function here.
var _apply = function (fn, args) {
  return fn.apply(this, args);
}

module.exports = curry2(_apply);
