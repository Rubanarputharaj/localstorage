import React, { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";
function Login(){
    const [user,setUser]=useState({
        name:"",
        password:""
    })
        const navigate = useNavigate();
          useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
      navigate('/home');
    }
  }, [navigate]);

    const handleSubmit=(e)=>{
  e.preventDefault();
   console.log(user);
   if(user.name && user.password){
      localStorage.setItem('isLogin', 'true');
      navigate('/home');}
      else{
        alert("kindly enter all details")
      }
    
  };
    
    const handleChange=(e)=>{
        
        setUser({...user,[e.target.name]:e.target.value});

    }
    return(
        <form className='Form-container' onSubmit={handleSubmit}> 
        <h1>login</h1>
<input type="text" value={user.name} name='name' placeholder='enter the name' onChange={handleChange} />
<input type="text" value={user.password} name='password' placeholder='enter the password' onChange={handleChange} />
<button type='submit'> submit</button>
        </form>
    )
}
export default Login;