import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


// database connection establish checking
exports.connect = ()=>{
mongoose.connect(process.env.MONGODB_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopolog:true,
    })
    .then(()=>{
        console.log("Database connected successfully!");
    })
    .catch((err)=>{
        console.log("Database connection failed");
        console.error(err);
        process.exit(1);
    })
}