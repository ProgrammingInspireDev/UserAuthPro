import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';




dotenv.config();


const app = express();
app.use(cors());

const PORT = 5000;

connectDB();

app.use(json());

app.get('/', (req, res) => {
    res.send('API is running......');
})

app.use('/api', userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})