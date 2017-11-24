var mongo = require("mongodb").MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err){throw err;}
    
    var parrots = db.collection('parrots');
    
    parrots.count({
        age: {
            $gt: parseInt(process.argv[2])
        }
    }, function(err, count){
        if(err){throw err;}
        
        console.log(count);
        db.close();
    })
})