const get  = require('request')
var env = process.env.NODE_ENV || 'development';
var config = require('../config')[env];
var auth = Buffer.from(config.email + ":" + config.pswd).toString('base64')   

const options = {
    method: "GET",
    url: config.tr_url+"/index.php?/api/v2/get_runs/1",
    headers: {
        "Authorization": "Basic " + auth,
        "Content-Type": "application/json"
    }
}

get(options, (error, response, body) => {
    if((JSON.parse(response["body"])["error"])){
        console.log((JSON.parse(response["body"])["error"] +'-> Could not connect to Testrail '))
    }
    else{
        console.log("Successfully connected to Testrail!")
        var site = JSON.parse(body);
        console.log(site);
   }})


