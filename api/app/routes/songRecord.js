var SongRecord = require('../models/songRecord');

module.exports = function(router){

    // /songRecord
    router.route('/songRecord').post(function(req,res){
        
        var sid = req.body.sid;
        var name = req.body.name;
        var date = req.body.date ? new Date(req.body.date): new Date(); //iso standard

        // check exist
        SongRecord.findOne({'sid':sid,'name':name,'date':date},
            function(err,songRecord){
                if( err || songRecord === null ){

                    // insert new
                    var songRecord = new SongRecord();
                    songRecord.sid = sid;
                    songRecord.name = name;
                    songRecord.date = date; //iso standard
                    songRecord.times = 0;

                    songRecord.save(function(err){
                        if(err)
                            res.send(err);
                        else
                            res.json(songRecord);
                    });
                }else{
                    
                    // update
                    var conditions = {'sid':sid,'date':date},
                        update = { $inc: { times:1 }},
                        options = {multi: false};
                    
                    SongRecord.update(conditions,update,options,function(err,songRecord){
                        if(err)
                            res.send(err);
                        else
                            res.json(songRecord);
                    });
                }
            });

        
    });

    // /songRecord/:song_id
    router.route('/songRecord/:song_id').post(function(req,res){
        var song_id = req.params.song_id;
        
        var from = new Date(req.body.from || 0);
        if(req.body.to)
            var to = new Date(req.body.to);
        else
            var to = Date.now();

        SongRecord.findOne({'date':{ $gte:from,$lte:to},'id':song_id},
            function(err,songDate){
                if (err)
                    res.send(err);
                else
                    res.json(songDate);
            });
        
    });

    // /searchSongRecord
    router.route('/searchSongRecord').post(function(req,res){
        
        var from = new Date(req.body.from || 0);
        if(req.body.to)
            var to = new Date(req.body.to);
        else
            var to = Date.now();

        var limit = req.body.limit || 20;

        SongRecord.find({'date':{ $gte:from,$lte:to} },null,{'sort': {'times': -1},'limit':limit }, 
            function(err,songDates){
                if (err)
                    res.send(err);
                else{

                    res.json(songDates);
                }
            });
        
    });
};