import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        if (!ENV.MONGO_URL) {
            console.error("Database URL missing");
            process.exit(1);
        }
        await mongoose.connect(ENV.MONGO_URL);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database");
        process.exit(1);
    }
}
