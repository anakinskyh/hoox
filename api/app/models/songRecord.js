
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SongRecordSchema = new Schema({
    sid: String,
    name: String,
    date: Date,
    times: Number
});

module.exports = mongoose.model('SongRecord',SongRecordSchema);