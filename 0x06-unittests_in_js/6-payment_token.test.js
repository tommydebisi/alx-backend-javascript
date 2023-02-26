const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI function', function() {
  it('Gives correct output when success is True', function() {
    const result = getPaymentTokenFromAPI(true);

    return result.then((val) => {
      expect(val.data).to.equal('Successful response from the API');
    });
  });
});
