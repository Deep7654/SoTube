const asyncHandler = (reqestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(res , res , next)).catch((error) => next(error))
    }
}

export {asyncHandler}