const dbase = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = function (callback) {
  dbase.get().find().toArray(
    function (err, todos) {
    callback(err, todos);
  })
}

exports.read = function(id, callback){
  dbase.get().findOne(
    { _id: ObjectID(id) },
    function(err, todo){
    callback(err,todo);
  })
}

exports.create = function (todo, callback) {
  dbase.get().insert(todo,
    function(err, res){
    callback(err, res);
  })
}

exports.update = function (id, newTodo, callback) {
  dbase.get().updateOne(
      { _id: ObjectID(id)},
      newTodo,
      function (err, res) {
        callback(err, res);
      })
}


exports.delete = function (id, callback) {
  dbase.get().deleteOne(
      { _id: ObjectID(id)},
      function (err, res) {
        callback(err, res);
      })
}
