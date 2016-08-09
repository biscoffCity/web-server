//Use module exports to expose middleware 

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


module.exports = middleware;