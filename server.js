var express = require('express');

var app = express();

var PORT =3000;

var middleware = {
	requireAuthentication: function (req, res, next) { //route level middleware 
		console.log('private route hit');
		next();
	},  
	logger: function (req, res, next) {
		console.log (req.method + ' ' + req.originalUrl + ' ' + new Date().toString()); //req.method will output 'GET' request on terminal 
		next();
	}
};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function (req, res) {
	res.send('About us!!');
});

app.use(express.static(__dirname+'/public')); //express.static is used for static files like CSS, images ,JavaSscript



app.listen(PORT, function(){
	console.log('Express server starts on port ' + PORT);
})





