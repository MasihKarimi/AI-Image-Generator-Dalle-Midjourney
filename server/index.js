import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/db.js';
dotenv.config();

const app = express();
 
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/', async(req, res) => {
    res.send("Hello DALL-2!");
});


// start server

const startServer = async () => {
    try {
       connectDB()
       app.listen(8080, ()=> console.log(`Server is running on port: http://localhost:8080`))
       console.log(process.env.MONGO_URL?"node" : "no node ");

    } catch (error) {
        console.log(error)
    }

}

startServer();