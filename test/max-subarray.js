const test = require('tape');
const maxSubarray = require('../max-subarray');

test('maxSubarray', function (t) {
  'use strict';

  t.plan(8);

  t.deepEqual(maxSubarray(), []);
  t.deepEqual(maxSubarray([]), []);
  t.deepEqual(maxSubarray({}), []);
  t.deepEqual(maxSubarray(''), []);
  t.deepEqual(maxSubarray(['a','3','6']), []);
  t.deepEqual(maxSubarray([1,-4,1,3,6,-2,-9]), [1,3,6]);
  t.deepEqual(maxSubarray([1,-3,5,-2,9,-8,-6,4]), [5,-2,9]);
  t.deepEqual(maxSubarray([5,6,2,-3,5,-3,2]), [5,6,2,-3,5]);
});
