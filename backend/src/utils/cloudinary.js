import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localPathofFile , fileName)=>{
    try {
        if(!localPathofFile)  {
        console.log('no local path of File');
        return null;
        }
    const response = await cloudinary.uploader.upload(localPathofFile , {
        public_id : fileName,
        resource_type : "auto"
    })
    console.log(`The Data After file Upload successFully ${response}`);
    return response;
} catch(err){
    console.log(`Error while Uploading ${err}`)
    fs.unlinkSync(localPathofFile);
    return null;
}
}

export {uploadOnCloudinary}