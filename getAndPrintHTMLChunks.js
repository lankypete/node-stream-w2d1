const https = require('https');
const stream = require('./gitandPrintHTML');

//define the path object
const streamInfo = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
}

//write stream function
https.get(streamInfo, function(responce){
  stream.streamAndPrint(responce);
});


