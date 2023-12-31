import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {  connectDB  } from "./config/db.js"
import router from "./routes/user.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 4005;
// parsing data from request body
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded());
// database function call
connectDB();

// user route mount
app.use("/api/v1",router);

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
});
