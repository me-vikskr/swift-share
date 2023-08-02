import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URL = `mongodb+srv://resume-builder:dPc6iZekRjL00sAQ@swift-share.wc4zue8.mongodb.net/?retryWrites=true&w=majority`;
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