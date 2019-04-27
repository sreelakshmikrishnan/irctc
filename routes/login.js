var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/callback', function (req, res, next) {
    res.send(req.body);
});


module.exports = router;
