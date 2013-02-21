var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: String,
	pw: String
});

var User = mongoose.model('User', UserSchema);
exports.User = User;

var VidSchema = mongoose.Schema({
	userName: String,
	URL: String,
	description: String
});
var Vid = mongoose.model('Vid', VidSchema);
exports.Vid = Vid;