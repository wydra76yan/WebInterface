var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';
const app = express();

const todos = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/todos', function(db, callback) {
  console.log("post");
  console.log(db);
  const todo = {
    title: db.body.title
  }
  console.log(todo);
  const collection = db.collection('todos');
  collection.insertOne(todo, function(err, res){
    assert.equal(err, null);
    console.log("Inserted 1 doc into the collection");
    callback(res);
  })
})

app.put('/todos/:id', function (req, res){
  const todo = todos.find(function (todo) {
    return todo.id === Number(req.params.id);
  })
  todo.title = req.body.title;
  res.send(todo);
})

app.delete('/todos/:id', function (req, res){
  const todo = todos.filter(function (todo) {
    return todo.id != Number(req.params.id);
  })
  res.sendStatus(200);
})

const insertDocuments = function(db, callback) {
  console.log("typeof(collection)");
  console.log(db);
  const collection = db.collection('todos');

  // Insert some documents
  collection.insertOne(
    //{title : "love"},
   function(err, result) {
    assert.equal(err, null);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//   console.log(typeof(db));
//
//   insertDocuments(db, function() {
//     client.close();
//   });
// });

MongoClient.connect(url, function(err, client){
  if (err){
    return console.log(err);
  }
  const db = client.db(dbName);
  console.log('client');
  console.log(db);
  app.listen(3000, function(){
    console.log('FUCK START');
  })
})
