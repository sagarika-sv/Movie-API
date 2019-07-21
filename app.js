var request = require("request");
var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req,res){
	
	res.render("search");
});

app.get("/results", function(req,res){
	
	request("http://www.omdbapi.com/?s=search", function(error,response,body){
		console.log(req.query.search);
		if(!error && response.statusCode == 200)
			{
				console.log("Connected to OMDb!");
				var data = JSON.parse(body);
				res.render("movie", {data : data});
			}	
			else
				console.log("Error!!");
			
		});
	});

var port = 3000 || process.env.PORT;
app.listen(port, function () {
  console.log("Server started!");
});
