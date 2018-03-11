const MongoClient = require('mongodb').MongoClient;

//const {MongoClient,ObjectID}= require('mongodb');
//var obj= new ObjectID();
//console.log(obj);


// Connection URL
const url = 'mongodb://localhost:27017/TodosApp';

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) =>{
 if(err){
  return console.log("unable to connect to mongodb server");
 }

console.log("Connected successfully to mongodb server");

//to use _id in find , use like {_id: new ObjectID('5aa4aec350a5721ef4573615')}
db.collection('Users').find({name:'lakshmi'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to fetch documents',err);
});

//  db.close();
});
