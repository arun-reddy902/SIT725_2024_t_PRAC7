const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arunreddy_902:arunajay@arun.1ynxcue.mongodb.net/?retryWrites=true&w=majority&appName=arun";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connect() {
    await client.connect();
}

module.exports = client;
