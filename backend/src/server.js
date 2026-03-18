import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/DB.js";

const startServer = async () => {
  try {
    //firstly check that Database is connected or not
    await connectDB();

    //server is start
    app.listen(env.PORT, () => {
      console.log(`🚀 Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
