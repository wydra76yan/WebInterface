var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/';
const dbName = 'TodoApp';
const app = express();
const todoReq = '/todos';
const todoReqId = '/todos/:id';
const todosContr = require('./control/todos');


var dbase = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post(todoReq, function(req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    isLiked: false,
    completed: false,
    comments:[]
  }
  console.log(todo);
    dbase.get().insertOne(todo, function(err, res){
    assert.equal(err, null);
    console.log("Inserted 1 doc into the collection");
    })
  res.send(todo);
})

app.get(todoReq, todosContr.all);

app.get(todoReqId, function(req, res){
  dbase.findOne({ _id: ObjectID(req.params.id) }, function(err, todo){
    if (err) {
      console.err(err);
      return res.sendStatus(500);
    }
    res.send(todo);
  })
})



app.put(todoReqId, function (req, res){
  dbase.updateOne(
      { _id: ObjectID(req.params.id)},
      { $set: { title: req.body.title}},
      { $set: { description: req.body.description}},
      function (err, result) {
        assert.equal(err, null)
      }
    )
    console.log("Update 1 doc into the collection")
  res.sendStatus(200);
})

app.put(todoReqId + "/isLiked", function (req, res){
  dbase.updateOne(
      { _id: ObjectID(req.params.id)},
      { $set: {isLiked: req.body.isLiked}},
      function (err, result) {
        assert.equal(err, null)
      }
    )
    console.log("Liked 1 doc into the collection")
  res.sendStatus(200);
})

app.delete(todoReqId, function (req, res){
  dbase.deleteOne(
      { _id: ObjectID(req.params.id)},
      function (err, result) {
        assert.equal(err, null)
      }
    )
  res.sendStatus(200);
})

dbase.connect(url, function(err){
  if (err){
    return console.log(err);
  }
  app.listen(3000, function(){
    console.log('Server started');
  })
})
