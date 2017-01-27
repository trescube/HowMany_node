const test = require('tape');

test('solve it', (t) => {
  const solve = require('../src/howmany_filter_and_map');

  t.deepEquals(solve(), [1, 7, 3, 2, 1, 1, 1, 2, 1, 1]);
  t.end();

});
