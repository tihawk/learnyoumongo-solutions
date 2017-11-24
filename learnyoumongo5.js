var mongo = require("mongodb").MongoClient;

var insertThis= {
    firstName: process.argv[2],
    lastName: process.argv[3]
};

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err) {throw err;}
    
    var docs = db.collection('docs');
    
    docs.insert(insertThis, function(err, inserted){
        if(err) {throw err;}
        console.log(JSON.stringify(insertThis));
        db.close();
    });
    
    /*//if you want to look for it in the database:
    docs.find(insertThis).toArray(function(err, item){
        console.log(JSON.stringify(item[0]));
        db.close();
    })*/
    
});