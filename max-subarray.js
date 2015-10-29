(function(root) {
  'use strict';

  function maxSubarray(array) {
    if (!(Array.isArray(array) && array.every(maxSubarray._isNumber))) {
      return [];
    }

    var sum = array[0];
    var max = array[0];
    var stack = [0];

    for (var i = 1; i < array.length; i++) {
      sum = Math.max(sum + array[i], array[i]);
      max = Math.max(max, sum);

      if (sum === max) {
        stack.push(i);
      } else if (sum !== max && i === 1) {
        stack.pop();
      }
    }

    return array.slice(stack[0], stack[stack.length - 1] + 1);
  }

  maxSubarray._isNumber = function(v) {
    return typeof v === 'number';
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = maxSubarray;
    }
    exports.maxSubarray = maxSubarray;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return maxSubarray;
    });
  } else {
    root.maxSubarray = maxSubarray;
  }

})(this);
