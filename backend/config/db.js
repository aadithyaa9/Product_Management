import mongoose from "mongoose"
import  dotenv from "dotenv"
dotenv.config()
export const connectDB  = async()=>{
    try{
        const connect1 =  mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MONGODB")
    }catch(error){
        process.exit(1);
    }
}
