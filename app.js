const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri').uri;

console.log(uri);

const client =  new MongoClient(uri)    
const dbname = 'blog'

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to ${dbname} database`);
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

const main = async () => {
    try {
        await connectToDatabase();
    } catch (error) {
        console.error('Error in main function', error);
    } finally {
        await client.close();
    }
}

main();