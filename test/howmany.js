const test = require('tape');

const solution = [1, 7, 3, 2, 1, 1, 1, 2, 1, 1];

test('solve it with filter/reduce', (t) => {
  const solve = require('../src/howmany_filter_and_reduce');

  t.deepEquals(solve(), solution);
  t.end();

});

test('solve it with generator iteration', (t) => {
  const solve = require('../src/howmany_with_generators');

  t.deepEquals(solve(), solution);
  t.end();

});
