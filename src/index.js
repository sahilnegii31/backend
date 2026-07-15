// require('dotenv').config({path: './env'})
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import connection from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connection()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!", err);
})













// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.port}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw error
//     }
// })