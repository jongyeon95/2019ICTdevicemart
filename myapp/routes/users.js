var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Py = require('python-shell');
var mysql = require('mysql');
/* GET users listing. */
router.use(bodyParser.urlencoded({extended:false}));
router.post('/', function(req, res, next){
	
	var mySqlClient = mysql.createConnection({
	user:'ict',
	password:'1234',
	database:'mysql'
	});
	mySqlClient.connect();
	mySqlClient.query('SELECT * FROM products', function (error, results, fields){if (error) {console.log(error);}


	var a=req.body.A;
	var b=req.body.B;
	var c=req.body.C;
	ia=parseInt(a);
	ib=parseInt(b);
	ic=parseInt(c);

	if(results[0].aamount < ia || results[1].aamount < ib || results[2].aamount < ic)
	{res.render('fail');}
	else{
	res.render('success');
	var options = {
  	mode: 'text',
  	pythonPath: '',
  	pythonOptions: ['-u'],
  	scriptPath: '',
  	args: [a,b,c]
	};
	/*
	Py.PythonShell.run('test.py', options, function (err, results) {
   	if (err) throw err;
	var r=results;
	console.log(r);});
	*/
	ca=results[0].aamount-ia;
	tca=results[0].tamount-ia;
	cb=results[1].aamount-ib;
	tcb=results[1].tamount-ib;
	tcc=results[1].tamount-ib;
	cc=results[2].aamount-ic;
	mySqlClient.query('UPDATE products SET aamount='+ca+', tamount='+tca+' WHERE name="redled" ', function (error, results, fields){if (error) {console.log(error);}});
	mySqlClient.query('UPDATE products SET aamount='+cb+', tamount='+tcb+' WHERE name="yellowled" ', function (error, results, fields){if (error) {console.log(error);}});
	mySqlClient.query('UPDATE products SET aamount='+cc+', tamount='+tcc+' WHERE name="greenled" ', function (error, results, fields){if (error) {console.log(error);}});

	}
	

	});
	
	});

module.exports = router;

