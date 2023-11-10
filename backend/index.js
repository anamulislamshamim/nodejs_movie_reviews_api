import 'dotenv/config';
import app from '../../backend/server.js';
import mongodb from 'mongodb';
import ReviewsDAO from './dao/reviewsDAO.js';


const port = 8000;

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env['MONGO_USERNAME'];
const mongo_password = process.env['MONGO_PASSWORD'];
    
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@atlascluster.oop9rkk.mongodb.net/?retryWrites=true&w=majority`;


MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }
).catch(err => {
    console.error(err.stack);
}).then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})

