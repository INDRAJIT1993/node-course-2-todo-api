// const MongoClient = require('mongodb').MongoClient; (anothermethod)
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


//example
//Es6 to make new variable from object property

// var user ={
//     name:'indrajit',
//     age: 25
// }
// var {name}=user;
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if (err){
        return console.log('unable to connect');
    }
    else{
        console.log('connected to mongo db');
       
        // db.collection('Todos').insertOne ({
        //     text:'something to do',
        //     completed: false
        // },(err, res) =>{
        //     if (err){
        //         console.log('unable to insert');
        //     }else
        //     {
        //         console.log(JSON.stringify(res.ops,undefined,2));
        //     }

        // });

        db.collection('user').insertOne({
            _id:123,
            name:'indrajit',
            age:25,
            location:'india'
        }, (err,res) =>{
            if (err){
                        console.log('unable to insert');
                    }else
                    {
                        console.log(JSON.stringify(res.ops,undefined,2));
                    }
        });

    };
    db.close();
});