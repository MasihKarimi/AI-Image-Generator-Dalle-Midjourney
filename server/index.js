import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/db.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
 
app.use(cors());
app.use(express.json({limit:'50mb'}));

// api endpoints



app.get('/', async(req, res) => {
    res.send("Hello DALL-2!");
});
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

// start server

const startServer = async () => {
 const port = process.env.PORT || 8080; // Use the assigned port from Vercel or fallback to 8080

    try {
       connectDB()
       app.listen(port, ()=> console.log(`Server is running on port: http://localhost:8080`))

    } catch (error) {
        console.log(error)
    }

}

startServer();
