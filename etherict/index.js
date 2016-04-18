var request = require('request');
var colors = require('colors');

var HOURS_24 = 24 * 60 * 60;
var interval = 1;
var currency_pair = 'XETHXXBT'; // or ETHUSD; full list: https://api.kraken.com/0/public/AssetPairs
var start_date = Math.round(new Date() / 1000) - (720 * 60); // 12 hours ago

var api_base_url = `https://api.kraken.com/0/public/OHLC?pair=${currency_pair}&interval=${interval}`;

function fetch_data(start_date) {
  var api_url = api_base_url + `&since=${start_date}`;
  request(api_url, (err, response, body) => {
    if(err) return err;

    body = JSON.parse(body).result[currency_pair];

    console.log(api_url);
    console.log(body.length);
    console.log(body[0]);
    console.log(body[body.length-2]);
  });
}

for (var i = 0; i < 2; i++) {
  fetch_data(start_date);
  start_date = start_date - ((i+1) * 720 * 60);
}
