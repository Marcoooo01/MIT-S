var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {
        title: 'Insert a city:', 
    });
});

module.exports = router;