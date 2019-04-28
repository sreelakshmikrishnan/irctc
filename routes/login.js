var express = require('express');
var router = express.Router();
const Querystring = require('querystring');
const Request = require('request');

const account_kit_api_version = 'v1.1';
const app_id = '430768774160194';
const app_secret = '57cfeae13192fc4745a4fc381ba740ec';
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.1/me';
const token_exchange_base_url = 'https://graph.accountkit.com/v1.1/access_token';

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/callback', function (request, res, next) {
    var app_access_token = ['AA', app_id, app_secret].join('|');
    var params = {
        grant_type: 'authorization_code',
        code: request.body.code,
        access_token: app_access_token
    };

    // exchange tokens
    var token_exchange_url = token_exchange_base_url + '?' + Querystring.stringify(params);
    Request.get({ url: token_exchange_url, json: true }, function (err, resp, respBody) {
        console.log(respBody);
        var view = {
            user_access_token: respBody.access_token,
            expires_at: respBody.expires_at,
            user_id: respBody.id,
        };

        // get account details at /me endpoint
        var me_endpoint_url = me_endpoint_base_url + '?access_token=' + respBody.access_token;
        Request.get({ url: me_endpoint_url, json: true }, function (err, resp, respBody) {
        res.send(respBody);
        });
    });
});


module.exports = router;
