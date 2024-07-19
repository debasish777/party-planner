import mongoose from "mongoose";

export default async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected.");
    } catch (error) {
        console.log("Database Connection Error", error.message);
    }
};