import express from "express";
const router = express.Router();
import {  signup,login  } from "../controllers/Auth.js";
// create route and map to handler or controller
router.post("/login",login);
router.post("/signup",signup);

export default router;