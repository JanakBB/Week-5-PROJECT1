import mongoose from "mongoose";

const connectDB = async () => {
    try{
        let conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to DB at ${conn.connection.host}`);
    }
    catch(err) {
        console.log(`Error while connect to DB: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;