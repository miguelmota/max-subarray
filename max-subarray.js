(function(root) {
  'use strict';

  function maxSubarray(array) {
    if (!(Array.isArray(array) && array.every(maxSubarray._isNumber))) {
      return [];
    }

    var sum = array[0];
    var max = array[0];
    var stack = [];

    for (var i = 1; i < array.length; i++) {
      sum = Math.max(sum + array[i], array[i]);
      max = Math.max(max, sum);
      if (sum === max) {
        if (i === 1) {
          stack.push(0);
        }

        stack.push(i);
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
