import nodemailer from "nodemailer";


const sendVerificationEmail = async (email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    const options = {
      from: process.env.MYMAIL,
      to:email,
      subject: "Register successfully. complete your verfication.",
      text: `Please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/verify/${token}`
    }
    
    const info = await transporter.sendMail(options);
    return info;
  } catch (error) {
    console.log("Something Worng with sending email :",error )
    return false
  }
}

export { sendVerificationEmail }