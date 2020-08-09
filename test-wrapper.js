var Testrail = require('testrail-api');
var env = process.env.NODE_ENV || 'development';
var config = require('../config')[env];

var testrail = new Testrail({
  host: config.tr_url,
  user: config.email,
  password: config.pswd
});



  testrail.getRuns(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, response, runs) {
    console.log(runs);
  });