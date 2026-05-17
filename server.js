// // create server
// import express from 'express'
// // to connect the db
// import { connect } from 'mongoose'

// //importing cookie parser for protected routes
// import cookieParser from 'cookie-parser'

// // importing userRoute
// import { userRoute } from './APIs/userAPI.js'


// //importing COrs for cross connections
// import cors from 'cors'
// import { userModel } from './models/UserModel.js'



// const app = express()


// //enable cors
// app.use(cors({origin:"http://localhost:5173",credentials:true})) //url of which our frontend is running
// //add body parser middleware
// app.use(express.json())
// //add the cookie parser
// app.use(cookieParser())


// //if path satrts with /user-api then forward req to userRoute
// app.use("/user-api/",userRoute)
// // connect to db
// async function connectDbAndStartServer() {
//     try {
//         // connect to db server
//         await connect('mongodb://localhost:27017/pvptododb')
//         console.log("DB connected successfully")

//         app.listen(8000, () => {
//             console.log("Server is listening on port 8000")
//         })
//     }
//     catch (err) {
//         console.log("Error in database connection", err)
//     }
// }

// connectDbAndStartServer()


// //page refresh route
// app.get("/refresh",verifyToken,async(req,res)=>{
//     console.log("user is",req.user)
//     let userObj=await userModel.findOne({email:req.user.email})
//     res.status(200).json({message:"user",payload:userObj})
// })


//create server
import express from "express";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { userRoute } from "./APIs/UserAPI.js";
import cors from "cors";
import { UserModel } from "./models/UserModel.js";
import { verifyToken } from "./middlewares/verifyToken.js";
const app = express();

//enable cors
app.use(cors({ origin: ["http://localhost:5173"] ,credentials:true}));
//add body parser middleware
app.use(express.json());
//add cookie parser middleware
app.use(cookieParser());

//if path starts with /user-api. forward req to UserROute
app.use("/user-api", userRoute);

//connect to db
async function connectDBAndStartServer() {
  try {
    //connect to database server
    await connect("mongodb://localhost:27017/pvptododb");
    console.log("DB connection success");
    //start HTTP server
    app.listen(8000, console.log("server listening on port 8000"));
  } catch (err) {
    console.log("Err in DB connection :", err);
  }
}

connectDBAndStartServer();

//page refresh route
app.get("/refresh",verifyToken,async(req,res)=>{
  console.log("user is ",req.user)
  let userObj=await UserModel.findOne({email:req.user.email})
  res.status(200).json({message:"user",payload:userObj})
})