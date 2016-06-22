function countSplitInversions(left, right) {
    var i = 0;
    var j = 0;
    var count = 0;
    while (i < left.length || j < right.length) {
        if (i == left.length) {
            j++;
        } else if (j == right.length) {
            i++;
        } else if (left[i] <= right[j]) {
            i++;
        } else {
            count += left.length - i;
            j++;
        }
    }
    return count;
}

module.exports = function countInversions(arr) {
    if (arr.length < 2) {
        return 0;
    }
    const midIdx = Math.floor((arr.length + 1) / 2);
    const left = arr.slice(0, midIdx);
    const right = arr.slice(midIdx);
    return countInversions(left) + countInversions(right) + countSplitInversions(left, right);
};
