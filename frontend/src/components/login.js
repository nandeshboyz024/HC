import React, { useState } from 'react'
import axios from "axios" ;
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHashtag,faLock} from '@fortawesome/free-solid-svg-icons';



export default function Login() {
    const [pfnumber, setpfnumber] = useState('');
    const [password, setpassword] = useState('');
    

    
    const submit = async(e)=>{
         e.preventDefault();
         try {
            
            const user  = await axios.post("http://localhost:4000/api/v1/users/login",{
                pfnumber:pfnumber , 
                password:password,
            });

            console.log(user);
            // console.log("tere naam ");
         }catch(e) {
            console.log("user does not exist");
         }
    }

    return (
    <>
   <div className="reg">
      <h2 style={{textAlign:'center',color:'white', fontFamily: 'Helvetica Neue'}}>Login Form</h2>
    <form className='card'>
      <div className='form my-4' style={{textAlign:'center'}}>    
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faHashtag} />&nbsp;&nbsp;<input type="string" name="pfnumber" onChange={(e)=>{setpfnumber(e.target.value)} } placeholder='PF number' /><br />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;<input type="text" name="password" onChange={(e)=>{setpassword(e.target.value)} } placeholder='Password' /><br />
        </div>
        <div className='text-center my-2'>
          <button  type='submit' >Sign In</button>
        </div>
        <div className='text-center my-2'>
          Create new account?  <Link  to="/register" >Sign Up</Link>
        </div>
      </div>
    </form>
    </div>
    </>
  )
}