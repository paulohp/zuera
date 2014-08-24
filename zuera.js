#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.3')
  .option('start', 'Start the zuera')
  .option('quote', 'A cool quote about the zuera')
  .option('end', 'Stop the zuera')
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
