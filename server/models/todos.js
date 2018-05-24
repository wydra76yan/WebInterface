const dbase = require('../db');
const ObjectID = require('mongodb').ObjectID;


exports.all = function (callback) {
  dbase.get().find().toArray(
    function (err, todos) {
    callback(err, todos);
  })
}

// exports.forComment = function (id, callback) {
//   dbase.get().findOne(
//     { _id: ObjectID(id) },
//     {fields: {'comments': 1, '_id':1}},
//     function (err, todo) {
//     callback(err, todo);
//   })
// }

exports.read = function(id, callback){
  const errMessage = "Todo with id: "+ObjectID(id)+" not found";
  dbase.get().findOne(
    { _id: ObjectID(id) },
    function(err, todo){
      if (todo != null) {
        callback(err, todo);
      } else
      return callback(err, errMessage);

  })
}

exports.create = function (todo, callback) {
  dbase.get().insert(todo,
    function(err, res){
    callback(err, res);
  })
}

exports.update = function (id, newTodo, callback) {
  const errMessage = "Todo with id: "+ObjectID(id)+" not found";
  dbase.get().updateOne(
      { _id: ObjectID(id)},
      newTodo,
      function (err, res) {
        if (newTodo != null) {
          callback(err, newTodo);
        } else
        return callback(err, errMessage);
      })
}


exports.delete = function (id, callback) {
  const errMessage = "Todo with id: "+ObjectID(id)+" not found";
  dbase.get().deleteOne(
      { _id: ObjectID(id)},
      function (err, res) {
        if (todo != null) {
          callback(err, todo);
        } else
        return callback(err, errMessage);
      })
}
