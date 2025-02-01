import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username : {
        type: String, required: true
    },
    email: {
        type : String, required: true, unique: true
    },
    password : {
        type: String, required: true
    },
    address: {
        type: Array
    },
    Phone: {
        type:Number
    },
    userType: {
        type:String, required: true, default:"client", enum:['admin', 'admin', 'vendor', 'driver']
    },
    profile: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Duser&psig=AOvVaw0vWSGkuT_o8-TV3jhGZolU&ust=1738527171589000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICDnMWko4sDFQAAAAAdAAAAABAR"
    }



},{timestamps:true})


const User = mongoose.model("user", userSchema)
export default User;