var express = require('express');
var router = express.Router();
var request = require("request");
const fs = require('fs');

router.post('/', function(req, res){
    let city = req.body.City;
    var url = "https://api.unsplash.com/search/photos?query=" + city + "&client_id=d4dcf0dfc3caf8747f06bb8a9251d39d5ecba6c0b0edcb5b8382f3f49a33463a"
    faQualcosa(res, url, city);
})

function faQualcosa(res, url, city) {

    request({
    url: url,
    json: true

 
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        renderPug(res, body, city);
    }
    let pe = JSON.stringify(body);
    fs.writeFileSync('mit.json', pe);
})
}

function renderPug(res, data, city) {
    res.render('index', {
        title: 'All photos of '+city,
        mit: data.results,
    })
}

module.exports = router;