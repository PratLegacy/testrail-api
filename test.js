const get  = require('request')
var auth = Buffer.from('alcatrazwatchesnetflix@gmail.com' + ":" + "Nottttflix.525").toString('base64')   

const options = {
    method: "GET",
    url: "https://pratlegacy.testrail.io/index.php?/api/v2/get_runs/1",
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


