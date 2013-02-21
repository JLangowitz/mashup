var models = require('../models')
	,User = models.User
	,Vid = models.Vid;

exports.index = function(req, res){
	if (!req.session.user)
		res.redirect('/login');
	else{
		Vid.find().sort({'_id' : 'descending'}).exec(function(err,data){
		if (err)
			return console.log ('error', err);
		res.render('index', { title: 'DropTube', vids: data, user: req.session.user});
		});
	}
};

exports.update = function(req, res){
	Vid.find().sort({'_id' : 'descending'}).exec(function(err,data){
	if (err)
		return console.log ('error', err);
	res.render('_vids', { vids: data});
	});
};