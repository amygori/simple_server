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

router.post('/', function(req, res){

});

module.exports = router;
