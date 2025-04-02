import mongoose from "mongoose";


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB")
    }catch(err){
        console.log("Mongodb connect error",err)
        process.exit(1)
    }
}

export {connectDB}