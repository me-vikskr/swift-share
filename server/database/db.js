import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URL = `mongodb://127.0.0.1:27017/file-sharing`;
    try{
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }) ;
        console.log('Database connected successfully');
    }catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;