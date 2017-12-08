const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if (err){
        return console.log('unable to connect');
    }
    else{
        console.log('connected to mongo db');}

        db.collection('user').findOneAndUpdate({
            _id : new ObjectID('5a2a7faabb23fe109603f1d9')
            },{
                $set :{
                    name:'indrajit'
                },
                $inc:{
                    age:1
                }
            },{
                returnOriginal: false
            }
            
    ).then((result)=>{
        console.log(result);
    });

    });