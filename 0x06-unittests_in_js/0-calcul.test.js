const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('function to calculate addition of whole numbers', function() {
  it('should give correct addition', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});

describe('Function to calculate addition of a float number', function() {
  it('should give correct addition', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
});

describe('Function to calculate addition of two float numbers', function() {
  it('should give correct addition', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
});
describe('Function to get correct addition of float numbers', function() {
  it('should give correct addition', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
