const dbase = require('../db');
const ObjectID = require('mongodb').ObjectID;

const errMessage = " Todo id not found ";

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
      if (todo != null) {
        callback(err, todo);
      } else
      return callback(err, ObjectID(id) + errMessage);

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
        console.log(res.matchedCount);
        if (res.matchedCount != 0) {
          callback(err, newTodo);
        } else
        return callback(err, ObjectID(id) + errMessage);
      })
}


exports.delete = function (id, callback) {

  dbase.get().deleteOne(
      { _id: ObjectID(id)},
      function (err, res) {
        if (res.deletedCount != 0) {
          callback(err, res);
        } else
       return callback(err, ObjectID(id) + errMessage);
      })
}
