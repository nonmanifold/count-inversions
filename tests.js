const countInversions = require('./count-inversions');

const assert = require('assert');

assert.equal(0, countInversions([]));
assert.equal(0, countInversions([1, 2]));
assert.equal(0, countInversions([1, 2, 3, 4]));
assert.equal(3, countInversions([1, 3, 5, 2, 4, 6]));
assert.equal(1, countInversions([1, 3, 2, 4]));
assert.equal(2, countInversions([3, 1, 2]));
assert.equal(3, countInversions([3, 2, 1]));
assert.equal(6, countInversions([4, 2, 3, 5, 1]));
assert.equal(6, countInversions([4, 3, 2, 1]));
assert.equal(5 * (5 - 1) / 2, countInversions([5, 4, 3, 2, 1]));
console.log('Pass');