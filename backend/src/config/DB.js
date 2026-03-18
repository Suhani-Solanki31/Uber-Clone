import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(env.MONGO_URL);
    if (res) {
      console.log(
        "MONGODB connected succcessfully ==> ",mongoose.connection.host || 4000);
    }
  } catch (error) {
    console.error("MONGODB connection failed ---> ", error.message);
    console.error("Stack trace : ", error.stack);
    process.exit(1);
  }
};
