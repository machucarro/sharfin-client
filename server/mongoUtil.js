"use strict";

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
  connect() {
    client.connect('mongodb://machucarro@localhost:27017/sharfin', (err, db) => {
      if(err) {
        console.log("Error connecting to Mongo - check mongod connection");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to Mongo");
    });
  },
  sports(){
    return _db.collection('sports');
  },
  movements(){
    return _db.collection("movements");
  }

}
