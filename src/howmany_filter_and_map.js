'use strict';

function isSolved(histogram) {
  return histogram.reduce((solved, value, index) => {
    return solved && (countOccurences(index, histogram) === value);
  }, true);
}

// 1 + the number of array elements equal to value
function countOccurences(value, histogram) {
  return 1 + histogram.filter((e) => { return e === value; }).length;
}

function solve() {
  const histogram = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

  for (let i = 0; !isSolved(histogram); i = (i+1) % histogram.length) {
    histogram[i] = countOccurences(i, histogram);
  }

  return histogram;

}

module.exports = solve;
