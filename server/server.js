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


app.post(todoReq, todosContr.create);

app.get(todoReq, todosContr.all);

app.get(todoReqId, todosContr.read);

app.put(todoReqId, todosContr.update);

app.put(todoReqId + "/isLiked", todosContr.like);

app.put(todoReqId + "/complete", todosContr.complete);

app.delete(todoReqId, todosContr.delete)

dbase.connect(url, function(err){
  assert.equal(err, null)
  app.listen(3000, function(){
    console.log('Server started');
  })
})
