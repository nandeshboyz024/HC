import { User } from "../models/Patient.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { send_cookies } from "../utils/features.js";

export const getall = async(req,res)=>{
    const users  = await User.find({});
    // const {name} = ;
    console.log(req.query);
    res.json({
        success: true,
        users,
    });
};


export const register = async(req,res)=>{
    const {firstname,lastname,username,pfnumber,email,password} =  req.body;// distructering values from an object
    let user = await User.findOne({pfnumber})
    
    if(!user){
        user = await User.findOne({email}) ;
    }
      
    console.log(user);

    console.log(req.body);

    if(user) return res.status(404).json({
        success: false,
        message: "User Already Exist",
    });
    

    
    const hashedpassword = await bcrypt.hash(password,10); 
    
    user =  await User.create({firstname,lastname,username,pfnumber,email, password:hashedpassword});
    
    send_cookies(user,res,"Registered Succesfully",201 );

};

export const login = async(req,res,next)=>{
    const {pfnumber,password} =  req.body;// distructering values from an object
    const user  = await User.findOne({pfnumber}).select("+password");
   
    if(!user) return res.status(404).json({
        success: false,
        message: "User dosen't Exist",
    });

    const isMatch  = await bcrypt.compare(password,user.password);
     
    if(!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid Password",
    });
    
    send_cookies(user,res,`Welcome back ${user.firstname}`,200);
} ;
