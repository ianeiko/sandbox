var request = require('request');
var colors = require('colors');

var MINUTES_5 = 5 * 60;
var HOURS_24 = 24 * 60 * 60;
var currency_pair = 'BTC_ETH'; // or USDT_ETH; full list: https://poloniex.com/public?command=returnCurrencies

var start_date = Math.round(new Date() / 1000) - HOURS_24; // 24 hours ago
var period = MINUTES_5;
var api_base_url = `https://poloniex.com/public?command=returnChartData&currencyPair=${currency_pair}&end=9999999999&period=${period}`;

function fetch_data() {
  var api_url = api_base_url + `&start=${start_date}`;
  request(api_url, (err, response, body) => {
    if(err) return err;

    body = JSON.parse(body);
    console.log(api_url);

    console.log(body.length);
    console.log(body[0]);
    console.log(body[body.length - 1]);
  });
}


start_date = start_date - (HOURS_24 * 90);
fetch_data(start_date);
