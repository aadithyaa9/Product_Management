import express from "express";
import { connectDB } from "./config/db.js";
import product from "./models/Product.js";

const app = express();

app.use(express.json());

app.post("/api/products" , async(req,res)=>{
    const a = req.body;
    if (!a.name || !a.price || !a.image){
        return res.status(400).json({success:false,message:"File not found"});
    }

    const newProduct = new product(a);

    try{
        await newProduct.save();
        res.status(201).json({success:true , message:"You have sucessfully created one" , data:newProduct});
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({success:false, message:"Error in Creation"});
    }
})




app.listen( 5000 , ()=>{
    connectDB()
    console.log("Server RUNNING in http://localhost:5000");
})


