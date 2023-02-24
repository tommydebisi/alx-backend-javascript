const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculate numbers according to type passed in', () => {
  it('tests for correct output in function', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -3);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.3);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
