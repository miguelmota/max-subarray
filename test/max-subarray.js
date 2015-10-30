const test = require('tape');
const maxSubarray = require('../max-subarray');

test('maxSubarray', function (t) {
  'use strict';

  t.plan(17);

  t.deepEqual(maxSubarray(), []);
  t.deepEqual(maxSubarray([]), []);
  t.deepEqual(maxSubarray({}), []);
  t.deepEqual(maxSubarray(''), []);
  t.deepEqual(maxSubarray(['a','3','6']), []);
  t.deepEqual(maxSubarray([1,-4,1,3,6,-2,-9]), [1,3,6]);
  t.deepEqual(maxSubarray([1,-3,5,-2,9,-8,-6,4]), [5,-2,9]);
  t.deepEqual(maxSubarray([5,6,2,-3,5,-3,2]), [5,6,2,-3,5]);
  t.deepEqual(maxSubarray([-2,-3,4,-1,-2,1,5,-3]), [4,-1,-2,1,5]);
  t.deepEqual(maxSubarray([2,3,-2,-1,10]), [2,3,-2,-1,10]);
  t.deepEqual(maxSubarray([-1,1,2,-3,3,-1,2,-2]), [3,-1,2]);
  t.deepEqual(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]), [4,-1,2,1]);
  t.deepEqual(maxSubarray([-4,-2,-8,-1]), [-1]);
  t.deepEqual(maxSubarray([-4,-2,-8,-45]), [-2]);
  t.deepEqual(maxSubarray([-7,4,8,23,-54,9,-34,2]), [4,8,23]);
  t.deepEqual(maxSubarray([-7,4,8,23,-54,9,-34,2,190]), [2, 190]);
  t.deepEqual(maxSubarray([-7,4,8,23,-54,9,-34,2,190,-200,-5,201,6,-400]), [201,6]);
});
