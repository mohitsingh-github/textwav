var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var express = require('express');
var path = require('path');
const app = express();
var mysql = require('mysql');
app.use('/static',express.static('public'))

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userinfo"
});


//serve html css js and backgroud image
app.get('/', function(req, res) {

	res.sendFile(path.join(__dirname,'/index.html'));


	//login input
	app.post('/login',function(req,res){


       		if (req.method === "POST"){
    		var data = "";


				req.on("data", function(chunk){
				data += chunk;
		    	});


				req.on("end", function(chunk){
				var q = querystring.parse(data);
				var ul= q.usernamelogin;
				var pl= q.passwordlogin;
						

				//validation conditions
 				console.log(ul);
				console.log(pl);  

				});
		
			}

	});

	//register input
	app.post('/register',function(req,res){


       		if (req.method === "POST"){
    		var data = "";


				req.on("data", function(chunk){
				data += chunk;
		    	});


				req.on("end", function(chunk){
				var q = querystring.parse(data);
				var n= q.name;
				var u= q.usernameregister;
				var p= q.passwordregister;
				var pc= q.passwordconfirm;
				if(p === pc){
					var sql = "INSERT INTO userdetails (name, username, password, passwordc) VALUES ('"+n+ "', '"+u+"','"+p+"','"+pc+"')";
					con.query(sql, function (err, result) {
    					if (err) {
        				throw err;
    					}
					});
				}
		

				//validation conditions 
				console.log(n);
				console.log(u);
				console.log(p);
				console.log(pc);
				});
		
			}

	});

});

app.listen(3000);

