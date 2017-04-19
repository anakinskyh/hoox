var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var SongSchema = new Schema({
  sid:String,
  name:{type:String,required:true, unique: true  },
  photo:String,
  album:String,
  artist:String,
  url: {type:String,required:true, unique: true  }
});

SongSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Song',SongSchema);
