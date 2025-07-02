import { app } from "../app.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler(async (req , res)=>{
    //get user details from frontend
    const { fullName, email , username , password}=req.body

    //validation -- not empty
    if(fullName == " ") {
        throw new apiError(400,"enter YourFullName Please")
    }
    if(
        [fullName,email,username,password].some((field)=>field?.trim()==="")
    ){
        throw new apiError(400 , "Please Enter a valid Value or Input require")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email) ){
        throw new apiError(400 , "Enter Valid Email")
    }

    // check if user already registerd:using mail or username

        const exitedUser = await User.findOne({
            $or : [{username},{email}]
        })
        if(exitedUser){
            throw new apiError(409 , "User ALready Created Account or UserName TAken")
        }

    //checkfor images and avater

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new apiError(409,"upload Avatr")   
    }

    //upload using localdisk and cloudinary , check avatar uploaded or not

    const uploadCloudinaryAvatar =await uploadOnCloudinary(avatarLocalPath , "avatar")
    const uploadCloudinaryCover = await uploadOnCloudinary(coverImageLocalPath, "cover")

    if(!uploadCloudinaryAvatar){
        throw new apiError(409 , "cloudinary Avatr Faild")
    }
    if(!uploadCloudinaryCover){
        throw new apiError(409 , "cloudinary Cover Faild")
    }

     //creat user object - create entery in db

   const user = await User.create({
        username : username.toLowerCase(),
        email,
        fullName,
        password,
        avatar : uploadCloudinaryAvatar.url,
        coverImage : uploadCloudinaryCover.url || "" ,
    })

    //rewmovw sencitive deils from mongodb response - like hasgpass and tokenns
    const creartedUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    //check succes of user creation
    if(!creartedUser){
        throw new apiError(500 , "User Not Creadted erroe while Regsiter")
    }

    //return response

    return res.status(201).json({
        success : true,
        message : "user crreated SuccesFully",
        user : creartedUser
    })

})

export {registerUser}