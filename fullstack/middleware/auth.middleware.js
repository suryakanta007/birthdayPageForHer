import jwt from "jsonwebtoken"
export const isLogedIn = async (req,res,next)=>{
    try {
        console.log(req.cookies);
        let token = req.cookies?.token

        console.log("Token found : ", token ? "YES" : "NO");
        if(!token){
            return res.status(401).json({
                success: false,
                message:"Authtication failed."
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded
        console.log(req.user)
        next();

    } catch (error) {
        res.status(500).json({
            message:"Auth middleware failwir",
            error
        })
        
    }
    next();
}