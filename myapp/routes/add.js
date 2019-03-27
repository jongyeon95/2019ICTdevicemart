var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* GET home page. */
var bodyParser=require('body-parser');
var fs = require('fs');

var fiaa1;
var fita1;
var fiaa2;
var fita2;
var fiaa3;
var fita3;

// /add로 포스트 요청을 받았을때 동작
router.post('/', function(req, res, next) {

//sql 아이디 비밀번호 설정
var mySqlClient = mysql.createConnection({
user:'ict',
password:'1234',
database:'mysql'
});

var ta1=req.body.ta1;
var ta2=req.body.ta2;
var ta3=req.body.ta3;
var aa1=req.body.aa1;
var aa2=req.body.aa2;
var aa3=req.body.aa3;
var iaa1=parseInt(aa1);
var ita1=parseInt(ta1);
var iaa2=parseInt(aa2);
var ita2=parseInt(ta2);
var iaa3=parseInt(aa3);
var ita3=parseInt(ta3);



mySqlClient.connect();

mySqlClient.query('SELECT * FROM products', function (error, results, fields){    if (error) {
        console.log(error);
res.render('fail');//실패시 fail.pug 띄우기
    }

else{
//SQL 갱신
ita1=ita1+parseInt(results[0].tamount);
iaa1=iaa1+parseInt(results[0].aamount);


ita2=ita2+parseInt(results[1].tamount);
iaa2=iaa2+parseInt(results[1].aamount);

ita3=ita3+parseInt(results[2].tamount);
iaa3=iaa3+parseInt(results[2].aamount);

mySqlClient.query('UPDATE products SET tamount='+ita1+', aamount='+iaa1+' WHERE id=1', function (error, results, fields){    if (error) {
        console.log(error);
   } });
mySqlClient.query('UPDATE products SET tamount='+ita2+', aamount='+iaa2+' WHERE id=2', function (error, results, fields){    if (error) {
        console.log(error);
   } });
mySqlClient.query('UPDATE products SET tamount='+ita3+', aamount='+iaa3+' WHERE id=3', function (error, results, fields){    if (error) {
        console.log(error);
   } });

}

});
console.log(fita1);
res.render('success');//성공화면 띄우기






//mySqlClient.end();



});

module.exports = router;


