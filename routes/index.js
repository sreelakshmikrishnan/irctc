var express = require('express');
var router = express.Router();
const rp = require('request-promise');

var Irctc = require('../models/irctc_model');

/* GET home page.*/
router.get('/', function (req, res) {
  res.render('index');
});

router.post('/submit', function (req, res) {
  res.send(req.body);
  let irctcArray = {};
  irctcArray.pnr = req.body.pnrNumber;
  irctcArray.phone = req.body.phoneNumber;

  Irctc.collection.insertOne(irctcArray, function (err, result) {
    if (err) {
      console.error(err);
    } else {
      console.log("Details successfully inserted to Collection");
    }
  });
});

console.log

var options = {
  method: 'GET',
  uri: 'https://indianrailapi.com/api/v2/PNRCheck/apikey/817f5044d25d34b353aae41a4e0f6613/PNRNumber/req.body.pnrNumber/Route/1/',
  json: true
};


rp(options)
  .then(function (response) {
    response.result.forEach((item) => {
      bitcoinArray.push({
        timestamp: item.TimeStamp,
        marketname: item.MarketName,
        high: item.High,
        low: item.Low,
        volume: item.BaseVolume
      })
    })
    
    bitcoinArray.forEach((item) => console.log(item));
    Bitcoin.collection.insertMany(bitcoinArray, function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });

  })
  .catch((err) => {
    console.log(err);
  });

module.exports = router;
