const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if (err){
        return console.log('unable to connect');
    }
    else{
        console.log('connected to mongo db');}

        // db.collection('Todos').find({
        //     _id: new ObjectID('5a2a7bf584eba40f65489b0f')
        // }).toArray().then((docs) =>{
        //     console.log('Todos:')
        //     console.log(JSON.stringify(docs,undefined,2));
        // },function(err) {
        //     console.log('not able to fetch')        });

        db.collection('Todos').find().count().then((count) =>{
             console.log(`Todos: ${count} `)
        },(err) =>{
           console.log('unable to print count' ,err);
        })

    });