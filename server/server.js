var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';
const app = express();

const todos = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
  console.log('FUCK START');
})

app.post('/todos', function(req, res) {
  const todo = {
    title: req.body.title
  }
  console.log(todo);
  MongoClient.connect(url, function(err, client){
    if (err){
      return console.log(err);
    }
    const db = client.db(dbName);
    const collection = db.collection('todos');
    collection.insertOne(todo, function(err, res){
    assert.equal(err, null);
    console.log("Inserted 1 doc into the collection");
    })
  })
  res.send(todo);
})

app.put('/todos/:id', function (req, res){
  MongoClient.connect(url, function(err, client){
    if (err){
      return console.log(err);
    }
    const db = client.db(dbName);
    const collection = db.collection('todos');
    collection.updateOne(
      { _id: ObjectID(req.params.id)},
      { $set: { title: req.body.title}},
        assert.equal(err, null)
      )
      console.log("Update 1 doc into the collection")
    })
  res.sendStatus(200);
})

app.delete('/todos/:id', function (req, res){
  MongoClient.connect(url, function(err, client){
    if (err){
      return console.log(err);
    }
    const db = client.db(dbName);
    const collection = db.collection('todos');
    collection.deleteOne(
      { _id: ObjectID(req.params.id)},
      function (err, result) {
        assert.equal(err, null)
      }
    )
  })
  res.sendStatus(200);
})
