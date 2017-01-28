'use strict';

function *indexGenerator() {
  let i = 0;
  while (true) {
    yield i++ % 10;
  }
}

function isSolved(histogram) {
  return histogram.reduce((isSolved, value, index) => {
    return isSolved && (countOccurences(index, histogram) === value);
  }, true);
}

// 1 + the number of array elements equal to value
function countOccurences(value, histogram) {
  return 1 + histogram.filter((e) => { return e === value; }).length;
}

function solve() {
  const histogram = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

  for (const i of indexGenerator()) {
    histogram[i] = countOccurences(i, histogram);
    if (isSolved(histogram)) {
      return histogram;
    }
  }

}

module.exports = solve;
