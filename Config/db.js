import mongoose from "mongoose"


export const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("mongo db is connected" .bgRed)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }

}
