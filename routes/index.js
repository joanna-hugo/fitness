var express = require('express');
var fs      = require('fs');
var router  = express.Router();
var fetch   = require('fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/score_calc',function(req,res,next) {
    console.log("In score_calc route, request is: " + req.query.q );
    let points = req.query.q ;
    const max_score = 20;
    let grade = points/max_score;
    if(grade < .6){
      grade = "D";
    }else if (grade < .7){
      grade = "C";
    }else if (grade < .8){
      grade = "B";
    }else if (grade <.9 ){
      grade = "A";
    }else{
      grade == "A++";
    }
    console.log("grade: " + grade);
    res.status(grade).json(grade);
});

module.exports = router;
