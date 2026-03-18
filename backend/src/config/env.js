import dotenv from "dotenv";
dotenv.config();


const requiredEnvVars = ["MONGO_URL","PORT","JWT_SECRET","JWT_EXPIRES_IN"];

requiredEnvVars.forEach((envVar)=>{
    if(!process.env[envVar]){
        throw new Error(`Missing required environment variable: ${envVar}`);
    }
})

export const env = {
    PORT : process.env.PORT,
    MONGO_URL:process.env.MONGO_URL
}