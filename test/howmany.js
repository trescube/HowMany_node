const test = require('tape');

test('solve it with filter/reduce', (t) => {
  const solve = require('../src/howmany_filter_and_reduce');

  t.deepEquals(solve(), [1, 7, 3, 2, 1, 1, 1, 2, 1, 1]);
  t.end();

});
