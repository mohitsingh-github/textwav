/*
	app.post('/register',function(req,res){
    		if (req.method === "POST"){
			var data = "";
			req.on("data", function(chunk){
			data += chunk;
			}
	req.on("end", function(chunk){
	var q = querystring.parse(data);
	var n= q.name;
	var u= q.usernameregister;
	var p= q.passwordregister;
	var pc= q.passwordconfirm;

	//validation conditions
	console.log(n);
	console.log(u);
	console.log(p);
	console.log(pc);
	});    
*/