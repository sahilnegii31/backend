const asyncHandler = (reqHandler)=>{
    (error,req,res,next)=>{
        Promise.resolve(reqHandler(error,req,res,next)).catch((err)=>next(err))

    }
}



export {asyncHandler}

// const asyncHandler= (fn)=> async (error,req,res,next)=>{
//     try {
//         await fn(error,req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess:false,
//             message:error.message
//         })
//     }
// }