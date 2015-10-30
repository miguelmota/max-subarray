# max-subarray

> Find the continuous subarray within an array of numbers which has the largest sum. Also known as the [Maximum Subarray Problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem). Implementation composed of Kadane's algorithm.

# Install

```bash
npm install max-subarray
```

```bash
bower install max-subarray
```

# Usage

```javascript
const maxSubarray = require('max-subarray');

console.log(maxSubarray([1, -4, 1, 3, 6, -2, -9])); // [1, 3, 6]
console.log(maxSubarray([1, -3, 5, -2, 9, -8, -6, 4])); // [5, -2, 9]
console.log(maxSubarray([5, 6, 2, -3, 5, -3, 2])); // [5, 6, 2, -3, 5]
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [4, -1, 2, 1]
console.log(maxSubarray([-4, -2, -8, -45])); // [-2]
```

# Test

```bash
npm test
```

# License

MIT
