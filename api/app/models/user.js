
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema = new Schema({
    type: {type:String,required:true}, // local,facebook,twitter,google
    sid: {type:String, unique:true}, // social id
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    photo: String
});

module.exports = mongoose.model('User',UserSchema);
