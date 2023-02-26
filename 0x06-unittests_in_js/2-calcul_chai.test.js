const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculate numbers according to type passed in', () => {
  describe('Addition test', function() {
    it('should give correct answer for two rounded-up addition', () => {
      const result = calculateNumber('SUM', 1.5, 4.5);
      expect(result).to.equal(7)
    });

    it('one negative number addition', () => {
      const result = calculateNumber('SUM', -2, 4.5);
      expect(result).to.equal(3)
    });

    it('two negative whole number addition', () => {
      const result = calculateNumber('SUM', -2, -6);
      expect(result).to.equal(-8)
    });

    it('two negative rounded off number addition', () => {
      const result = calculateNumber('SUM', -2.3, -6.4);
      expect(result).to.equal(-8)
    });
    it('two negative rounded off number addition', () => {
      const result = calculateNumber('SUM', -2.3, -6.4);
      expect(result).to.equal(-8)
    });

    it('two negative rounded off and up number addition', () => {
      const result = calculateNumber('SUM', -2.3, -6.6);
      expect(result).to.equal(-9)
    });
  });

  describe('Subtraction test', function() {
    it('should give correct answer for two rounded subtraction', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('subtraction of two whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
    });

    it('give correct answer for a negative rounded entry', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });

    it('give correct answer for negative rounded entries', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.3)).to.equal(3);
    });

    it('give correct answer for negative rounded-up entries', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.6)).to.equal(4);
    });

    it('give correct answer for one negative rounded-up entry', () => {
      expect(calculateNumber('SUBTRACT', 1, -4.6)).to.equal(6);
    });
  });

  describe('Division test', function() {
    it('gives correct output for two rounded number division', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('gives correct output for two whole number division', () => {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('gives correct output for one rounded down number division', () => {
      expect(calculateNumber('DIVIDE', 6.3, 2)).to.equal(3);
    });

    it('One negative rounded down number division', () => {
      expect(calculateNumber('DIVIDE', -6.3, 2)).to.equal(-3);
    });

    it('Negative rounded down number division', () => {
      expect(calculateNumber('DIVIDE', -6.3, -3.3)).to.equal(2);
    });

    it('display correct error message when divisor is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('One negative rounded-down number and divisor is 0', () => {
      expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    });
  });
});