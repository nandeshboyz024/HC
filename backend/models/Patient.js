import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    pfnumber :{  // work place on roll number
      type: String, 
      unique: true, 
      required: true,
    },  
    email:{
        type: String,
        unique: true,
        required: true,
    },  
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 



export const User = mongoose.model("patients_database" , schema );
