import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const product = mongoose.model('Product' ,Schema);

export default product;



