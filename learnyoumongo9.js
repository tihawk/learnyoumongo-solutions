var mongo = require("mongodb").MongoClient;
var size = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err){throw err;}
    
    var prices = db.collection('prices');
    
    prices.aggregate([
        {
            $match: {
                size: size
            }
        },
        {
            $group: {
                _id: 'average',
                average: {
                    $avg: '$price'
                }
            }
        }
    ]).toArray(function(err, result){
        if(err){throw err;}
        console.log(result[0].average.toFixed(2));
        db.close();
    });
    
});