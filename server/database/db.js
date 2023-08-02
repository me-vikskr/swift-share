import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }) ;
        console.log('Database connected successfully');
    }catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;