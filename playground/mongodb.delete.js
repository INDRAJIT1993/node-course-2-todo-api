const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if (err){
        return console.log('unable to connect');
    }
    else{
        console.log('connected to mongo db');}

        //delete many

        db.collection('Todos').deleteMany({text:'something to do'}).then((result)=>{
             console.log(result);
        });

    });