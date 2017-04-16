var SongRecord = require('../models/songRecord');

module.exports = function(router){

    // /songRecord
    router.route('/songRecord').post(function(req,res){
        
        var sid = req.body.sid;
        var name = req.body.name;
        var date = new Date(); //iso standard
        if(req.body.date)
            date = new Date(req.body.date);
        date.setHours(0,0,0,0);
        console.log('sid : '+sid+'; date : '+date+';');
        // check exist
        SongRecord.findOne({'sid':sid,'date':date},
            function(err,songRecord){
                console.log(songRecord);
                if(err){
                    res.send(err);
                }else if(!songRecord){

                    // insert new
                    var songRecord = new SongRecord();
                    songRecord.sid = sid;
                    songRecord.name = name;
                    songRecord.date = date; //iso standard
                    songRecord.times = 1;
                    // console.log('create '+songRecord);

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
                            SongRecord.findOne({'sid':sid,'date':date},
                                function(err,_songRecord){
                                    if(err)
                                        res.send(err);
                                    else
                                        res.json(_songRecord);
                                });
                    });
                }
            });

        
    });

    // /songRecord/:song_id
    router.route('/songRecord/:song_id').post(function(req,res){
        var song_id = req.params.song_id;
        
        var from = new Date(req.body.from || 0);
        var to = new Date();
        if(req.body.to)
            var to = new Date(req.body.to);

        console.log(' '+from + ' to '+to);
           

        SongRecord.find({'date':{ $gte:from,$lte:to},'sid':song_id},
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
        var to = new Date();
        if(req.body.to)
            var to = new Date(req.body.to);

        console.log(' '+from + ' to '+to);

        var limit = req.body.limit || 20;

        // SongRecord.find({'date':{ $gte:from,$lte:to} },null,{'sort': {'times': -1},'limit':limit }, 
        //     function(err,songDates){
        //         if (err)
        //             res.send(err);
        //         else{
        //             res.json(songDates);
        //         }
        //     });

        SongRecord.aggregate([
            {"$match":{
                "date":{"$gte":from,"$lte":to}
            }},
            {"$group":{
                // "_id":{"$songid":"$sid"},
                "_id":"$sid",
                "times":{"$sum":"$times"}
            }},
            {"$sort":{"times":-1} },
            {"$limit":limit}
        ],function(err,results){
            if(err)
                res.send(err);
            else
                res.json(results);
        });
        
    });
};