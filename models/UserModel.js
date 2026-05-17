// import { Schema,model } from "mongoose"

// //create user schema
// const userSchema=new Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         //if someone already existed with the saem user name and send request 
//        // unique:true
//        unique:[true,"Email already exists"]
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     //default for evary user and any crud operations will be done in this array only
//     todos:[
//         {
//             taskName:{type:String,required:true},
//             description:{type:String,required:true},
//             status:{type:String,default:"pending"}
//         }
//     ]
    
// },{
//     versionKey:false,
//     timestamps:true,
//     strict:true
//     }
// )
// export const userModel=model("/user",userSchema)


import { Schema, model } from "mongoose";

//create user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:[true,"Email already existed"]
    },
    password: {
      type: String,
      required: true,
    },
    todos: [
      {
        taskName: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, default: "pending" },
      },
    ],
  },
  { versionKey: false, timestamps: true, strict: true }
);

//generate user model for the above user schema
export const UserModel = model("user", userSchema);