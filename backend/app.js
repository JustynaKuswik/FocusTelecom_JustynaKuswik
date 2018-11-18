const express = require('express');
const Dialer = require('dialer').Dialer;
const bodyParser = require('body-parser');
var app = express();
var url = 'https://uni-call.fcc-online.pl';
var _bridge = null;

Dialer.configure({
    login: 'focus17',
    password: '2hduycg2amv',
    url: 'https://uni-call.fcc-online.pl'
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});
app.use(bodyParser.text())
app.use(bodyParser.json())
app.listen(3000, function () {
    console.log('Sitecall app listening on port 3000!')
})

app.post('/call', async function (req, res) {
    let data = req.body;
    _bridge = await Dialer.call(data.first_number, data.second_number);
    res.json({
        id: '123',
        status: _bridge.STATUSES.NEW
    });
})

app.get('/status', async function (req, res) {
    let status = await _bridge.getStatus();
    res.json({
        id: '123',
        "status": status
    });
})