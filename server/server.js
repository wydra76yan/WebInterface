const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const todoReq = '/todos';
const todoReqId = '/todos/:id';

const todosContr = require('./control/todos');
const dbase = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Create new todo
app.post(todoReq, todosContr.create);
//Read <id>todo
app.get(todoReq, todosContr.all);
//Get all todos
app.get(todoReqId, todosContr.read);
//Update <id>todo
app.put(todoReqId, todosContr.update);
//Like <id>todo
app.put(todoReqId + "/isLiked", todosContr.like);
//Complete <id>todo
app.put(todoReqId + "/complete", todosContr.complete);
//Comment <id>todo
app.put(todoReqId + "/comment", todosContr.comment);
//Delete <id>todo
app.delete(todoReqId, todosContr.delete)

dbase.connect(url, function(err){
  assert.equal(err, null)
  app.listen(3000, function(){
    console.log('Server started');
  })
})
