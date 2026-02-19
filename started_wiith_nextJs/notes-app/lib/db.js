import mongoose from "mongoose";
import "dotenv/config";

let isConnected = false;
export async function connectDB() {
    if(isConnected){
        console.log("Mongodb is already connected ");
        return  32;
    }
    try {
       const db =  await mongoose.connect(process.env.MONGODB_URI);
       isConnected = db.connections[0]._readyState === 1;
        console.log("Connected to MongoDB",db);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
} 