var express = require('express');
var config = require('../mercadopago-config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var MP = require("mercadopago");

  console.log(config);
  var mp = new MP(config.client_id, config.client_secret);
  var preference = {
    "items": [{
      "title": "Test",
      "quantity": 1,
      "currency_id": "USD",
      "unit_price": 10.5
    }]
  };

  mp.createPreference(preference);

  //GET PAYMENT
  var filters = {
    "id": null,
    "site_id": null,
    "external_reference": null
  };

  mp.searchPayment(filters)
    .then(
      function success(data) {
        console.log(JSON.stringify(data, null, 4));
      },
      function error(err) {
        console.log(err);
      });

  //CREATE CUSTOMER
  mp.post({
    "uri": "/v1/customers",
    "data": {
      "email": "email@test.com"
    }
  }).then(
    function success(data) {
      console.log(data);
    },
    function error(err) {
      console.log(err);
    });

  mp.getAccessToken(function(err, accessToken) {
    console.log(accessToken);
  });

  res.sendfile('views/index.html');
});

module.exports = router;
