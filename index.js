import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {connect} from "./config/db";
const app = express();
const PORT = process.env.PORT || 4005;
// parsing data from request body
app.use(express.json());
// database function call
connect();

