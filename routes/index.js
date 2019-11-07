var express = require('express');
var fs      = require('fs');
var router  = express.Router();
var fetch   = require('fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/dict', function(req, res, next) {
  var myRe = new RegExp(req.query.q);
  let URL = "https://owlbot.info/api/v3/dictionary" + myRe;
  console.log("\tIN BACKEND FUNCTION, url is : " + URL);
  let json = '';
      fetch(URL, {
        method: 'GET',
        headers: { 
          'Content-Type':'application/json',
          'Authorization':'Token 49070b13348ce05557b302d26785ffd5a8570bef'
        }
      })
      .then(function(response){ //make another path in index.js (like we did above)
        console.log("received this data from api: " + response);
        return response.json();
      });
});

router.get('/getcity',function(req,res,next) {
    // console.log("In getcity route, request is: " + req.query);
    // console.dir(req.query.q);
    fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
      if(err) throw err;
      var cities = data.toString().split("\n");
      var myRe = new RegExp("^" + req.query.q);
        // console.log(myRe);
      
        var jsonresult = [];
        for(var i = 0; i < cities.length; i++) {
          var result = cities[i].search(myRe); 
          if(result != -1) {
            // console.log(cities[i]);
            jsonresult.push({city:cities[i]});
          } 
        }   
        // console.log("RETURN RESULTS:" + jsonresult);
        res.status(200).json(jsonresult);
      
    });
});

module.exports = router;
