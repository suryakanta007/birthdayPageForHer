import User from "../models/User.model.js"
import crypto from "crypto";
import nodemailer from "nodemailer"
import  bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const registerUser = async (req, res) => {
    // get data
    // validate
    // check if user already exists
    // create a user in database.
    // create a varifiaction token.
    // save token in database.
    // send token as email to user.
    // send success status to user.

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required."
        })
    }

    try {
        let isUserPresent = await User.findOne({ email });
        if (isUserPresent !== null) {
            return res.status(400).json({
                mesaage: "User is already present."
            })
        }

        let newUser = await User.create({
            name,
            email,
            password
        })

        console.log(newUser);

        if (!newUser) {
            return req.status(400).json({
                message: "User not registerd."
            })
        }


        const token = crypto.randomBytes(32).toString("hex");
        console.log(token);

        newUser.verificationToken = token

        await newUser.save();




        //send email.
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        let options = {
            from: process.env.MYMAIL ,// sender address
            to: newUser.email, // list of receivers
            subject: "Register successfully.", // Subject line
            text:`Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `, // plain text body
        }

        let info = await transporter.sendMail(options)
        if(!info){
           return res.status(500).json({
                message:"Somthing gone wrong with sending mail."
            })
        }
        return res.status(200).json({
            message:"Success fully user registerd."
        })
    } catch(error) {
        console.log(error)
        throw new Error(error);
    }
}


const userVerify = async (req,res)=>{
 try{ let {token} = req.params;
    if(!token){
        res.status(404).json({message:"give token."})
    }
    let isUserPresent =await User.findOne({verificationToken:token});
    if(!isUserPresent){
        return res.status(404).json({
            message:'User is not present in the db.'
        })
    }

    isUserPresent.isverified = true
    isUserPresent.verificationToken = undefined;

    await isUserPresent.save()
    return res.status(200).json({
        message:"Successfully verified."
    })}catch(error){
        throw new Error(error);
    }
}


const userLogin  = async (req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(400).json({
            message:"All the fields are required."
        })
    }
    try {
       const user =  await User.findOne({email})
       if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
       }
       if(user.isverified === false){
        return res.status(400).json({
            message:"Please verify your email."
        })
       }
       
       const isPasswordCorrect = await bcrypt.compare(password,user.password);
       

       if(!isPasswordCorrect){
        return res.status(400).json({
            message:"Invalid email or password"
        })
       }
       
       const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:"24h"
       })
       const cookesOptions = {
        httpOnly: true,
        secure:true,
        maxAge:24*60*60*1000
      }

       res.cookie("token",token,cookesOptions);
      
       res.status(200).json({
        success:true,
        message:"Login successful",
        token,
        user : {
            id:user._id,
            name:user.name,
            role:user.role
        }
       })
    } catch (error) {
        return res.status(500).json({
            message:"internal error while login :- " + error
        })
    }
}

const getMe = async (req,res)=>{
    try {
        console.log(req.user.id)
        const user = await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(401).json({
                message:'Profile details not found.'
            })
        }
        console.log(user)
        res.status(200).json(user)
        
    } catch (error) {
        throw new Error(error);
    }
}

const logoutUser = async (req,res)=>{
    try {
        res.cookie("token","",{});
        res.status(200).json({
            message:"Logout user successfully."
        })
    } catch (error) {
        throw new Error;
    }
}

const forgotPassword = async (req,res)=>{
    try {
        // get email
        // Find user based in email
        // reset token + reset expiry => Date.now()+10*60*1000 => user.save()
        // SEnd email. desine email
    } catch (error) {
        
    }
}

const resetPassword = async (req,res)=>{
    try {
        // collect token from params
        // password from req.body
        const {token}= req.params
        const {password} = req.body
        
        try {
            const user = await User.findOne({
                resetPasswordToken:token,
                resetPasswordExpires:{$gt:Date.now()}
            })
            // set password in user.
            // resetToken , resetExpariy => reset
            // save
        } catch (error) {
            
        }
    } catch (error) {
        
    }
}

export { registerUser , userVerify, userLogin,resetPassword,forgotPassword,logoutUser,getMe}