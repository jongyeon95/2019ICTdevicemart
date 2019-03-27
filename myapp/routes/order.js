var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* GET home page. */
var bodyParser=require('body-parser');
var fs = require('fs');

//get 요청이 들어오면 시작
router.get('/', function(req, res, next) {

//SQL설정
var mySqlClient = mysql.createConnection({
user:'ict',
password:'1234',
database:'mysql'
});

mySqlClient.connect();
mySqlClient.query('SELECT * FROM products', function (error, results, fields){    if (error) {
        console.log(error);
    }

n1=results[0].name.toString();
n2=results[1].name.toString();
n3=results[2].name.toString();
ta1=results[0].tamount.toString();
aa1=results[0].aamount.toString();
ta2=results[1].tamount.toString();
aa2=results[1].aamount.toString();
ta3=results[2].tamount.toString();
aa3=results[2].aamount.toString();

res.render('order',{n1:n1 ,n2:n2 ,n3:n3, aa1:aa1, aa2:aa2, aa3:aa3, ta1:ta1, ta2:ta2, ta3:ta3 });

});



mySqlClient.end();



});

module.exports = router;
