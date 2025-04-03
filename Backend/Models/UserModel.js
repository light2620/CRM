import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    profilePic : {
        type : String,
    },
    isVerified :{
        type : Boolean,
        default : false
    }
})


const UserModel = mongoose.model("user",userSchema);


export {UserModel}