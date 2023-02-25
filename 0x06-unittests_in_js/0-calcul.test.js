const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('function to calculate addition of whole numbers', function() {
  it('should give correct answer for whole numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round second argument', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round first argument', function() {
    assert.strictEqual(calculateNumber(4.5, 1), 6);
  });

  it('should round both arguments', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should give correct output for rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
