require('dotenv').config()
// connection with mongodb
const Mongoclient = require('mongodb').MongoClient
// adding it with mongodb
const uri = 'mongodb+srv://harshpatel24197:Password@cluster0.vz0jmvy.mongodb.net/?retryWrites=true&w=majority'
const client = new Mongoclient(uri, { useNewUrlParser: true })
client.connect((err, db) => {
    if (!err) {
        console.log("Mongodb Connected")
    }
    else {
        console.log("DB error", err);
        process.exit(1);
    }
})
module.exports = client;
