#!/usr/bin/env node

var program = require('commander');
var open = require('open');

program
  .version('0.1.0')
  .option('start', 'Start the zuera')
  .option('quote', 'A cool quote about the zuera')
  .option('end', 'Stop the zuera')
  .option('huehue', 'Show a random video about specialists in computers from brazil huehuehue')
  .parse(process.argv);


if(program.start){
  console.log('The Zuera has been planted');
}

if(program.ends){
  console.log('You can stop the Zuera, because the Zuera never ends');
}

if(program.quote){
    var quotes = require('./res/quotes.json');

    var random = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[random];

    console.log(randomQuote);
}

if(program.huehue){
  var hues = require('./res/hues.json');
  var random = Math.floor(Math.random() * hues.length);
  var randomHue = hues[random];

  open(randomHue)

  console.log("huehuehue brbr")
}
