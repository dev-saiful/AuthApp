import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {connect} from "./config/db";
import { user } from "./routes/user";


const app = express();
const PORT = process.env.PORT || 4005;
// parsing data from request body
app.use(express.json());
// database function call
connect();

// user route mount
app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
});
