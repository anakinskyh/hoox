var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

var PlaylistSchema = new Schema({
    edited: Date,
    user_id: Schema.Types.ObjectId,
    songs:[{
        sid:String,
        name:String,
        photo:String,
        album:String,
        artist:String,
        url:String
    }]
});
PlaylistSchema.plugin(findOrCreate);

module.exports = mongoose.model('Playlist',PlaylistSchema);