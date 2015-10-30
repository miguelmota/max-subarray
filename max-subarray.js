(function(root) {
  'use strict';

  function maxSubarray(array) {
    if (!(Array.isArray(array) && array.every(maxSubarray._isNumber))) {
      return [];
    }

    var maxEndingHere = array[0];
    var maxSoFar = array[0];
    var maxStarts = [];
    var maxStart = 0;
    var maxEnd = 0;

    for (var i = 1, l = array.length; i < l; i++) {
      maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);

      if (maxEndingHere === array[i]) {
        maxStarts.push(i);
        maxStart = i;
      }

      maxSoFar = Math.max(maxSoFar, maxEndingHere);

      if (maxSoFar === maxEndingHere) {
        maxEnd = i;
      }
    }

    if (maxStart > maxEnd) {
      maxStart = maxStarts[0];
    }

    return array.slice(maxStart, maxEnd+1);
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
