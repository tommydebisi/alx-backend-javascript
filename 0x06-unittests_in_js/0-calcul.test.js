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

  it('calculates number when both are positive whole number', function() {
		assert.equal(calculateNumber(1, 2), 3);
	})
	it('calculates number when a is positve rounded up', function() {
		assert.equal(calculateNumber(1.7, 4), 6);
	});
	it('calculates number when a is positive rounded down', function() {
		assert.equal(calculateNumber(1.4, 4), 5);
	});
	it('calculates number when b is positive rounded up', function() {
		assert.equal(calculateNumber(1, 3.7), 5);
	});
	it('calculates number when b is positive rounded down', function() {
		assert.equal(calculateNumber(1, 3.1), 4);
	});
	it('calculates number when a and b is postive rounded up', function() {
		assert.equal(calculateNumber(2.5, 2.5), 6);
	});
	it('calculates number when a and b is positive rounded down', function() {
		assert.equal(calculateNumber(2.3, 2.3), 4);
	});
	it('calculates number when both are negative whole number', function() {
		assert.equal(calculateNumber(-1, -2), -3);
	})
	it('calculates number when a is negative rounded up', function() {
		assert.equal(calculateNumber(-1.7, 4), 2);
	});
	it('calculates number when a is negative rounded down', function() {
		assert.equal(calculateNumber(-1.4, 4), 3);
	});
	it('calculates number when b is negative rounded up', function() {
		assert.equal(calculateNumber(1, -3.7), -3);
	});
	it('calculates number when b is negative rounded down', function() {
		assert.equal(calculateNumber(1, -3.1), -2);
	});
	it('calculates number when a and b is negative rounded up', function() {
		assert.equal(calculateNumber(-2.5, -2.5), -4);
	});
	it('calculates number when a and b is negative rounded down', function() {
		assert.equal(calculateNumber(-2.3, -2.3), -4);
	});
});
