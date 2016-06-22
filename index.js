const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_bcb5c6658381416d19b01bfc1d3993b5_IntegerArray.txt';
const pathName = path.join('./', fileName);
const countInversions = require('./count-inversions');
const arr = [];

const counter = function (arr) {
    console.log('Counting Number of inversions in ' + arr.length);
    const numInversions = countInversions(arr);
    console.log('Number of inversions: ' + numInversions);
};

const rl = readline.createInterface({
    input: fs.createReadStream(pathName)
});

rl.on('line', function (line) {
    arr.push(parseInt(line));
});
rl.on('close', function () {
    counter(arr);
});