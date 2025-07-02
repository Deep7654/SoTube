import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { use } from "react";
 
const userSchema = new Schema({
    username : {
        type : String,
        require : true ,
        unique : true,
        lowercase : true,
        trim : true,
        index : true
    },
    email : {
        type : String,
        require : true ,
        unique : true,
        lowercase : true,
        trim : true
    },
    username : {
        type : String,
        require : true ,
        trim : true,
        index : true
    },
    avater : {
        type : String , // cloudnaryUrl 
        require : true
    },
    coverImage:{
        type : String
    },
    watchHistory : {
        type : Schema.Types.ObjectId,
        ref : "Video"
    },
    password : {
        type : String,
        require : [true ,'Password Require']
    },
    refereshToken : {
        type : String
    }
},{timestamps : true})

userSchema.pre("save" , async function (next){
    if(!thiss.isModified("password")) return next();
    this.password = bcrypt.hash(this.password , 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
}
userSchema.methods.generateAccessToken = function (){
        return jwt.sign(
    {
        _id : this.id,
        _email : this.email,
        _username : this.username ,
        _fullname : this.fullname 
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    })
    }
userSchema.methods.generateRefreshToken = function (){
        return jwt.sign(
    {
        _id : this.id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    })
    }


export const User = mongoose.model("User" ,userSchema) 