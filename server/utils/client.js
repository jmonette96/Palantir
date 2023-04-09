const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const client = new MongoClient(MONGO_URI, options);


module.exports = client;