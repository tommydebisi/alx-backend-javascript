const expect = require('chai').expect;
const request = require('request');

describe('API test from `api.js`', function() {
  it('Give correct output and status code', function() {
    request({
      url: 'http://localhost:7865',
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        console.log(err);
      }

      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
