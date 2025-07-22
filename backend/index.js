import express from "express";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/products" , (req,res)=>{
    res.send("<h2>Happy that i made so far</h2>");
})




app.listen( 5000 , ()=>{
    connectDB()
    console.log("Server RUNNING in http://localhost:5000");
})


