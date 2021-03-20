var http = require('http');
var url = require('url');
var util = require('util');
var string_decoder = require('string_decoder');
var fs = require('fs');
var express = require('express');
const path = require('path');
var alert =  require('alert');
var mysql = require('mysql');
var router = express.Router();
var formidable = require('formidable');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userinfo"
});
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//express framework implementation
const app = express();

//sending index.html as response to client for accessing port:5000
app.use('/static',express.static('public'))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname,'/index.html'));

});

//login request and response event  
app.post('/login', urlencodedParser, function (req, res) {
response = {	
usernamelogin:req.body.usernameregister,
passwordlogin:req.body.passwordregister
};
var ul= response.usernamelogin;
var pl= response.passwordlogin;

res.end();
})


//Registeration request and response event
app.post('/register', urlencodedParser, async (req, res) => {
response = {	
name:req.body.name,
usernameregister:req.body.usernameregister,
passwordregister:req.body.passwordregister,
passwordconfirm:req.body.passwordconfirm
};
var n= response.name;
var u= response.usernameregister;
var p= response.passwordregister;
var pc= response.passwordconfirm;
if(p === pc){
var hp= await bcrypt.hash(p,10)
var hpc= await bcrypt.hash(p,10)
var sql = "INSERT INTO userdetails (name, username, password, passwordc) VALUES ('"+n+ "', '"+u+"','"+hp+"','"+hpc+"')";
con.query(sql, function (err, result) {
    if (err) {
        throw err;
    }

});
}

res.end();
})

//connection message in console
con.connect(function(err) {
  if (err) throw err;

 console.log("Database Is Connected !");
});
module.exports = con;

app.listen(5000);

