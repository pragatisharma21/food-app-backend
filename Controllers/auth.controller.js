import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"

//Register
export const registerController = async(req, res)=>{
    try {
        const {username , email, password, address } = req.body
        if(!username || !email || !password || !address){
            return res.status(400).send({success: false , message: " please fill all fields "})
        }
        const existinguser = await User.findOne({email})
        if(existinguser ){
           return res.status(400).send({success: false, message: "user is already exist please login"})
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const user = await User.create({username, email, password: hashedpassword, address})
        res.status(201).send({success: true ,message: "user is created successfully", user})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false , message : "error in registiring message" ,error: error.message
        })
        
    }

}


