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
        song.view = 0;

        song.save(function(err){
          if(err)
            res.send(err)
          else
            res.json(song)
        });
    });

    // search song
    router.route('/getsong').post(function(req,res){
      var keyword = req.body.keyword || '';

      Song.find({
        "name":{"$regex":keyword, "$options":"i"}
      },null,{'sort':{'view':-1}},function(err,songs){
        if(err){
          res.send(err);
        }else {
          res.json(songs);
        }
      });
    });

    router.route('/addview').post(function(req,res){
      var song_id = req.body.song_id;

      var conditions = {'_id':song_id},
          update = { $inc: { view:1 }},
          options = {multi: false};

      Song.update(conditions,update,options,function(err,song){
          if(err)
              res.send(err);
          else{
            Song.findOne(conditions,
                function(err,_song){
                    if(err)
                        res.send(err);
                    else
                        res.json(_song);
                });
          }
      });
    });
};
