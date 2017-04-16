var Playlist = require('../models/playlist');

module.exports = function(router){

    // /insertsong
    router.route('/insertsong').post(function(req,res){
        var songs = req.body.songs || [];
        var user_id = req.body.user_id;
        var edited = req.body.edited?( new Date(req.body.edited) ):(Date.now() );

        // parse to object
        songs = JSON.parse(songs);

        // get playlist
        Playlist.findOne({'user_id':user_id},function(err,playlist){
            if(err){
                res.send(err);
            }else if(!playlist){
                var _playlist = new Playlist();
                _playlist.user_id = user_id;
                _playlist.edited = edited;
                _playlist.songs = songs;
                _playlist.save(function(err){
                    if(err)
                        res.send(err);
                    else
                        res.json(_playlist);
                });
            }else{
                playlist.songs = songs;//playlist.songs.concat(songs);
                playlist.edited = new Date();
                playlist.save(function(err,updatePlaylist){
                    if(err)
                        res.send(err);
                    else
                        res.json(updatePlaylist);
                });
            }
            
        });

    });

    // /playlist
    router.route('/getplaylist').post(function(req,res){
        var user_id = req.body.user_id;
        Playlist.findOne({'user_id':user_id},function(err,playlist){
            if(err)
                res.send(err);
            else
                res.json(playlist);
        });
    });

}