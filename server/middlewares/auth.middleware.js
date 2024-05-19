import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

// middleware for authentication
export const auth = (req,res,next)=>{
    try 
    {
        // retrive token from body
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer","");
        console.log(token);
        if(!token || token === undefined)
        {
            return res.status(401).json({
                success:false,
                message:"Token is Missing",
            });
        }
        // verfiy token

        try 
        {
            // decode token
            const payload = jwt.verify(token,process.env.JWT_SECRECT);
            req.user = payload;
        } 
        catch (error) 
        {
            return res.status(401).json({
                success:false,
                message:"Invalid Token",
            });
        }

        next();
    } 
    catch (error) 
    {
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying token",
        });
    }

}


// middleware for student authorization
export const isStudent = (req,res,next)=>{
    try
    {
        if(req.user.role !== "Student")
        {
            return res.status(401).json({
                success:false,
                message:"this is a protected route for Student",
            });
        }
        next();
    }
    catch(err)
    {
        return res.status(500),json({
            success:false,
            message:"User role is not matching",
        });
    }
}

// middleware for admin authorization
export const isAdmin = (req,res,next)=>{
    try
    {
        if(req.user.role !== "Admin")
        {
            return res.status(401).json({
                success:false,
                message:"this is a protected route for Admin",
            });
        }
        next();
    }
    catch(err)
    {
        return res.status(500),json({
            success:false,
            message:"User role is not matching",
        });
    }
}