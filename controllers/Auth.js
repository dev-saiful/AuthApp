import bcrypt from "bcrypt";
import {userModel} from "../models/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

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
        let user = await userModel.create({
            name,email,password:hashpass,role,
        });

        return res.status(200).json({
            success:true,
            message:"User Created Successfully",
            data : user,
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
    try 
    {
            // getting user info
        const {email,password} = req.body;
        // check empty
        if(!email || !password)
        {
            return res.status(400).json({
                success:false,
                message:"Fill all input",
            });
        }

        let user = await userModel.findOne({email});
        // email not exists
        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"User is not register",
            });
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        };

        // check password is matche or not
        // let token;
        if(await bcrypt.compare(password,user.password))
        {
            // password match
           let token = jwt.sign(payload,process.env.JWT_SECRECT,{
                expiresIn:"2h",
            });
            user = user.toObject();
           user.token = token;
            user.password = undefined;
           

            const options = {
                expires: new Date(Date.now()+30000),
                httpOnly:true,
            }

            //  creating cookie
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged in Successfully",
            });
   
           
        }
        else
        {
            // password mismatch
            return res.status(403).json({
                success:false,
                message:"Password Mismatch",
            });
        }
    } 
    catch (error) 
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failed",
        });
    }

}