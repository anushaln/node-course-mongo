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

/*db.collection('Todos').insertOne({
  text:'something to do',
  completed:false
},(err,result)=>{
  if(err){
    return console.log('unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});*/

db.collection('Users').insertOne({
  name:'lakshmi',
  age:32,
  location: 'benton'
},(err,result)=>{
  if(err){
    return console.log('unable to insert users collection',err);
  }
  //console.log(result.ops);
  console.log(result.ops[0]._id.getTimestamp());
});

  db.close();
});
