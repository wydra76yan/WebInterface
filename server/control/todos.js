const Todos = require('../models/todos');
const assert = require('assert');

const charNum = 24;

exports.all = function (req, res) {
  Todos.all(function (err, todos) {
    assert.equal(err, null)
    res.send(todos);
  })
}

exports.read = function(req, res){
  if (req.params.id.length != charNum)
    res.send("Wrong length");
  else
   {
    Todos.read(req.params.id, function (err, todo) {
    assert.equal(err, null)
      res.send(todo);
    })
  }
}

exports.create = function (req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    isLiked: false,
    completed: false,
    comments:[]
  }
  if (req.body.description != null && req.body.title != null) {
    Todos.create(todo, function (err, res) {
      assert.equal(err, null)
    })
  res.send(todo);
  } else
  res.send("Wrong input");
}

exports.update = function(req, res){
  if (req.params.id.length != charNum)
    res.send("Wrong length");
  else{
    if (req.body.description != null && req.body.title != null) {
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
      } else
      res.send("Wrong input");
    }
}

exports.like = function(req, res){
  if (req.params.id.length != charNum)
    res.send("Wrong length");
  else{
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

exports.comment = function(req, res){
  // Todos.forComment(req.params.id, function (err, todo) {
  // assert.equal(err, null)
  // console.log(todo);
  //   res.send(todo);
  // })
  Todos.update(req.params.id,
    {
      $push:{
        comments: req.body.comments,
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
