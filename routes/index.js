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
module.exports = router;
