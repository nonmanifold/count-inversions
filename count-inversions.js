function countSplitInversions(left, right) {

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
