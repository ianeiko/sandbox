var data = require('./public.json');
var colors = require('colors');

for(var i = 0; i < data.length; i++){
  var last = data[i-1] || data[0];
  var priceChange = data[i].weightedAverage - last.weightedAverage;
  var color = (priceChange > 0) ? 'green' : ((priceChange < 0) ? 'red' : 'white');

  if(priceChange !== 0){
    console.log(colors[color](priceChange),
                'went from ',
                last.weightedAverage,
                ' to ',
                data[i].weightedAverage);
  }
}
