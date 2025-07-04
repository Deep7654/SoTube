import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
       const connection =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`connection done SuccesFully : ${connection.connection.host}`)
    } catch (error) {
        console.log("Error DB not Connect Failed : " , error.message);
        process.exit(1)
    }
}

export default connectDB



/*
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error)=>{
             console.log("error" , error)
        })

        app.listen(process.env.PORT , ()=>{
            console.log(`App is listing in port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR : Can not Connect" , error)
    }
})

// function connectDB(){}

// connectDB()
*/