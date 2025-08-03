import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch(error) {
        console.log('MonogoDB connection failed: ', error.message);
        process.exist(1);
    }
};


export default connectDB;