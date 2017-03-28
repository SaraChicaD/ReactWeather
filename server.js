var express = require('express');

//Create app
var app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'http'){
		next();
	}
	else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));

app.listen(3000, function() {
	console.log("Express server up on port " + PORT);
});