var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';
const app = express();

const todos = [];

let dbase;

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
    dbase.insertOne(todo, function(err, res){
    assert.equal(err, null);
    console.log("Inserted 1 doc into the collection");
    })
  res.send(todo);
})

app.get('/todos', function(req, res){
  dbase.find().toArray(function(err, todos){
    if (err) {
      console.err(err);
      return res.sendStatus(500);
    }
    res.send(todos);
  })
})

app.get('/todos/:id', function(req, res){
  dbase.findOne({ _id: ObjectID(req.params.id) }, function(err, todo){
    if (err) {
      console.err(err);
      return res.sendStatus(500);
    }
    res.send(todo);
  })
})

app.put('/todos/:id', function (req, res){
  dbase.updateOne(
      { _id: ObjectID(req.params.id)},
      { $set: { title: req.body.title}},
      function (err, result) {
        assert.equal(err, null)
      }
    )
    console.log("Update 1 doc into the collection")
  res.sendStatus(200);
})

app.delete('/todos/:id', function (req, res){
  dbase.deleteOne(
      { _id: ObjectID(req.params.id)},
      function (err, result) {
        assert.equal(err, null)
      }
    )
  res.sendStatus(200);
})

MongoClient.connect(url, function(err, client){
  if (err){
    return console.log(err);
  }
  dbase = client.db(dbName).collection('todos');
})
