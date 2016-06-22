const countInversions = require('./count-inversions');

const assert = require('assert');

assert.equal(0, countInversions([]));
assert.equal(0, countInversions([0,1]));
assert.equal(0, countInversions([0,1,2,3]));
assert.equal(1, countInversions([0,1,3,2]));
assert.equal(1, countInversions([3,1,2,0]));
assert.equal(4, countInversions([3,2,1,0]));