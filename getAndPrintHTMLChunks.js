const https = require('https');

//define the path object
const streamInfo = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
}

function log(input) {
  console.log('\nChunk Length: ' + input.length + '\n');
  console.log(input);
}

//write stream function
https.get(streamInfo, function(responce){

  // set encoding of received data to UTF-8
  responce.setEncoding('utf8');

  responce.on('data', data => log(data));

  responce.on('end', data => log('end of stream :) \n') );


});
  //log info on the stream
  //log the chunk of stream
  //log when finished

