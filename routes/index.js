var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs){
        res.json({"userlist" : docs});
    });
});

/* POST 
Param: username,password
*/
router.post('/add_user', function(req, res) {

  var db = req.db;
  var collection = db.get('users');
  
  var userName = req.body.username;
  var password = req.body.password;

  collection.insert({"name":userName,"password":password
}, function(err, docs) {
    if (err) {
      res.json({"error":err});
    }
    else {
      res.json(docs);
    }
  });

});

module.exports = router;
