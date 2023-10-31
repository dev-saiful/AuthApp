import bcrypt from "bcrypt";
import {userModel} from "../models/User.model.js";

// signup routes handler
export const signup = async(req,res)=>{
    try
    {
        // getting user details
        const {name,email,password,role} = req.body;
        // checking email is already exists
        const existsEmail = await userModel.findOne({email});
        if(existsEmail)
        {
            return res.status(400).json({
                success:false,
                message:"Email already exists",
            });
        }

        let hashpass;
        try
        {
            hashpass = await bcrypt.hash(password,10);
        }
        catch(err)
        {
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",
            });
        }

        // create and insert entry into database
        const user = await userModel.create({
            name,email,password:hashpass,role,
        });

        return res.status(200).json({
            success:true,
            message:"User Created Successfully",
        });

    }
    catch(error)
    {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Unable to create user, try again later",
        });
    }
}

// login 

export const login = async(req,res)=>{
    
}