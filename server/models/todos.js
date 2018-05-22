const dbase = require('../db');

exports.all = function (callback) {
  dbase.get().find().toArray(function (err, todos) {
    callback(err, todos);
  })
}
