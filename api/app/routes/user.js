var User = require('../models/user');

module.exports = function(router){

    // /users
    router.route('/users').post(function(req,res){
        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.type = req.body.type;

        user.save(function(err){
            if (err)
                res.send(err);
            else
                res.json(user);
        });
    });

    // /users/:sid
    router.route('/users/:sid').get(function(req,res){
        User.findOne({'sid':req.params.sid},function(err,user){
            if (err)
                res.send(err);
            else
                res.json(user);
        });
    });

}