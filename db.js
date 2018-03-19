const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/BankDB';
const dbName = process.env.MONGODB_DBNAME || 'BankDB';

function getAccount(accountNumber, callback) {

  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const col = client.db(dbName).collection('Accounts');

    col.findOne({accountNumber: accountNumber}, function(err, res) {
      assert.equal(null, err);
      callback(res);
    });

    client.close();
  });
}


module.exports.getAccount = getAccount;
