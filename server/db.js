const MongoClient = require('mongodb').MongoClient;
const dbName = 'TodoApp';

const state = {
  dbase: null
};

exports.connect = function(url, done){
  if (state.dbase) {
    return done();
  }

  MongoClient.connect(url, function (err, client) {
    if (err) {
      return done(err);
    }
    state.dbase = client.db(dbName).collection('todos');
    done();
  })
}

exports.get = function (){
  return state.dbase;
}
