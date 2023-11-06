import express from "express";
const router = express.Router();
import {  signup,login  } from "../controllers/Auth.js";
import {  auth,isStudent,isAdmin  } from "../middlewares/auth.middleware.js";
// create route and map to handler or controller
router.post("/login",login);
router.post("/signup",signup);

// protected Route
router.get("/test",auth,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Protected Route for TEST",
    })
});

router.get("/student",auth,isStudent,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Protected Route for Student",
    });
});

router.get("/admin",auth,isAdmin,(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Welcome to Protected Route for Admin",
    });
});

export default router;