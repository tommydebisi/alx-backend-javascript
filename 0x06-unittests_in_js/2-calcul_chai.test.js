const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculate numbers according to type passed in', () => {
  it('should give correct answer for two rounded additio', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6)
  });
  it('should give correct answer for two rounded subtraction', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('give correct answer for a negative rounded entry', () => {
    expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
  });

  it('give correct answer for negative rounded entries', () => {
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
  });

  it('gives correct output for two rounded number division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('display correct error message when divisor is 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
