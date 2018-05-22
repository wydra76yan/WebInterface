const Todos = require('../models/todos');
const assert = require('assert');

exports.all = function (req, res) {
  Todos.all(function (err, todos) {
    assert.equal(err, null)
    res.send(todos);
  })
}



exports.read = function(req, res){
  Todos.read(req.params.id, function (err, todo) {
  assert.equal(err, null)
    res.send(todo);
  })
}

exports.create = function (req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    isLiked: false,
    completed: false,
    comments:[]
  }
  Todos.create(todo, function (err, res) {
    assert.equal(err, null)
  })
  res.send(todo);
}

exports.update = function(req, res){
  Todos.update(req.params.id,
    {
      $set:{
        title: req.body.title,
        description: req.body.description
      }
    },
    function (err, res) {
      assert.equal(err, null)
    })
    res.sendStatus(200);
}

exports.like = function(req, res){
  Todos.update(req.params.id,
    {
      $set:{
        isLiked: req.body.isLiked,
      }
    },
    function (err, res) {
      assert.equal(err, null)
    })
    res.sendStatus(200);
}

exports.complete = function(req, res){
  Todos.update(req.params.id,
    {
      $set:{
        completed: req.body.completed,
      }
    },
    function (err, res) {
      assert.equal(err, null)
    })
    res.sendStatus(200);
}

exports.delete = function(req, res){
  Todos.delete(req.params.id, function (err, todo) {
    assert.equal(err, null)
    res.send(todo);
  })
}
