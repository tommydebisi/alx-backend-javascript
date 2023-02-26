const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  it('should have SUM as first argument', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, 18);

    expect(spy.firstCall.args[0]).to.equal('SUM');
    sinon.restore();
  });

  it('should have correct second argument', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, 18);

    expect(spy.firstCall.args[1]).to.equal(10);
    sinon.restore();
  });

  it('should have correct third argument', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(20, -18);

    expect(spy.firstCall.args[2]).to.equal(-18);
    sinon.restore();
  });

  it('should have correct answer', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, 18);

    expect(spy.returnValues[0]).to.equal(28);
    sinon.restore();
  });

  it('correct answer when negative rounded numbers are passed', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(-10.3, -18.3);

    expect(spy.returnValues[0]).to.equal(-28);
    sinon.restore();
  });

  it('should have correct answer when one negative passed', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, -18);

    expect(spy.returnValues[0]).to.equal(-8);
    sinon.restore();
  });

  it ('check for argument passed in function', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);

    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
