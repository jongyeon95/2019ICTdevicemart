var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Py = require('python-shell');
/* GET users listing. */
router.use(bodyParser.urlencoded({extended:false}));
router.post('/', function(req, res, next) {
var a=req.body.A;
var b=req.body.B;
var c=req.body.C;

res.send('a='+a+'\n b='+b+'\n c='+c);
var options = {

  mode: 'text',

  pythonPath: '',

  pythonOptions: ['-u'],

  scriptPath: '',

  args: [a,b,c]

};
Py.PythonShell.run('test.py', options, function (err, results) {

   if (err) throw err;
var r=results;
console.log(r);
});
});

module.exports = router;
