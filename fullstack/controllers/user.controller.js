import User from "../models/User.model.js"
import crypto from "crypto";
import nodemailer from "nodemailer"
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
            return req.status(400).json({
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
    console.log("login feature coming soon.");
    res.json({message:"login feature coming soon"})
}

export { registerUser , userVerify, userLogin}