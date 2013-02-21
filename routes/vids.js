var models = require('../models')
	,User = models.User
	,Vid = models.Vid;

exports.new = function(req, res){
	console.log(req.body);
	var user = req.body.user;
	var URL = req.body.URL;
	var description = req.body.description;
	var vid = new Vid ({userName:user, URL:URL, description:description});
	vid.save(function(err){
		if (err){
			res.send(err);
			return console.log("error", err);
		}
		console.log(err);
		res.send(err);
		console.log('wtf');
	});
};