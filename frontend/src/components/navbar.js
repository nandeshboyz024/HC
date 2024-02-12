import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'


export default function Navbar(){
  return (
  
    <div className='navbar'>
      
     
   
      <NavLink className='middle_item' aria-current="page" to='/'> Home </NavLink>
      <NavLink className='middle_item' to='/login'> Login </NavLink>
      <NavLink className='middle_item' to='/register'> Register </NavLink>
   
   
   
    </div>

    
  )
}


