const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//db setup
const mongoskin = require('mongoskin');
const db = mongoskin.db('mongodb://@localhost:27017/simple_server', {safe:true})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

router.route('/data')
  .get(function(req, res){
    console.log('getting data...');
    db.collection('data')
      .find({} ,{limit:10, sort: [['_id',-1]]})
      .toArray(function(e, results){
        if (e) return next(e)
        res.send(results)
      });
  })
  .post(function(req, res){
    console.log(req.body);
    db.collection('data').insert(req.body, function(err, results){
    if (err) {
        res.send('An error has occurred');
      } else {
        res.send(results.ops[0]);
      }
    });
  });


module.exports = router;
