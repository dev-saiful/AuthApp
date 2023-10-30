import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

exports.connect = ()=>{
mongoose.connect();
}