const registerUser = async (req,res)=>{
    // get data
    // validate
    // check if user already exists
    // create a user in database.
    // create a varifiaction token.
    // save token in database.
    // send token as email to user.
    // send success status to user.

   const {name,email,password} = req.body;
   if(!name||!email||!password){
    return res.status(400).json({
        message:"All fields are required."
    })
   }

}

export {registerUser};