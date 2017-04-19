var Song = require('../models/song');

module.exports = function(router){

    // /song
    router.route('/song').post(function(req,res){
        var song = new Song();
        song.name = req.body.name || '';
        song.photo = req.body.photo || '';
        song.album = req.body.album || '';
        song.artist = req.body.artist || '';
        song.url = req.body.url || '';

        song.save(function(err){
          if(err)
            res.send(err)
          else
            res.json(song)
        });
    });

    // search song
    router.route('/getsong').post(function(req,res){
      var keyword = req.body.keyword;

      Song.find({
        "name":{"$regex":keyword, "$options":"i"}
      },function(err,songs){
        if(err){
          res.send(err);
        }else {
          res.json(songs);
        }
      });
    });
};
