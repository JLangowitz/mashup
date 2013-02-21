
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , mongoose = require('mongoose')
  , vids = require('./routes/vids')
  , path = require('path');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/DropTube');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/login', user.login);
app.get('/home', user.homepage);
app.get('/', routes.index);
app.post('/login', user.create);
app.post('/upload', vids.new);
app.post('/logout', user.logout);
app.get('/update', routes.update);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
