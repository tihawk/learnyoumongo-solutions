var mongo = require("mongodb").MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    var parrots = db.collection('parrots');
    var pOA = parrots.find({
        age: {'$gt':parseInt(process.argv[2])}
        
    }).toArray(function(err, docs){
        console.log(docs);
        db.close();
    });
});