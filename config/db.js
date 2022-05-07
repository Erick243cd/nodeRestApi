const { MongoClient, Db} = require('mongodb');

var client = null;

function connection(url, callback) {
    if (client == null) {
        client = new MongoClient(url);
        client.connect((error) => {
            if (error) {
                callback(error)
            } else {
                callback()
            }
        })
    } else {
        callback()
    }
}

function bd() {
    return new Db(client,'restapinodejsDb');
}

function closeConnection() {
    if (client) {
        client.close();
        client = null;
    }
}

module.exports = { connection, bd, client, closeConnection };
