const Todos = require('../models/todos');

exports.all = function (req, res) {
  Todos.all(function (err, todos) {
    if(err){
      comsole.err(err);
      return res.sendStatus(500);
    }
    res.send(todos);
  })
}
