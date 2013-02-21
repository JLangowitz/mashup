var models = require('../models')
	,User = models.User
	,Vid = models.Vid;

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.create = function(req, res){
	User.findOne({name:req.body.name, pw:req.body.password}).exec(function(err, user){
		if (!user){
			var user = new User ({name:req.body.name, pw:req.body.password});
			user.save(function(err){
				if (err){
					return console.log("error", err)
				}
			});
		}
		req.session.user = user;
		res.redirect('/home');
	});
};

exports.login = function(req, res){
	if (req.session.user)
		res.redirect('/home');
	else
		res.render('login', {title:'Welcome to DropTube'});
};

exports.logout =   function (req, res){
	req.user = null;
	req.session.destroy();
	res.redirect('/login');
};

exports.homepage = function(req, res){
	if (!req.session.user)
		res.redirect('/login');
	else
		res.render('homepage', {title: 'DropTube',user: req.session.user});
};