import React, { useState } from 'react';


const SignUpPage = () => {

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');

    const signup=async (event)=>{
        event.preventDefault();
        await fetch(`http://localhost:5000/api/auth/signup`,{
            method:'POST',
            body: JSON.stringify({firstName,lastName,username,email,password,confirmPassword}),
            headers:{'Content-Type':'application/json'}
        });
    };

  return (
    <form className='signup' onSubmit={signup}>
        <input 
            type="text" 
            placeholder='First Name'
            value={firstName}
            onChange={(event)=>setFirstName(event.target.value)} 
        />
        <input 
            type="text" 
            placeholder='Last Name'
            value={lastName} 
            onChange={(event)=>setLastName(event.target.value)}
        />
        <input 
            type="text" 
            placeholder='Username'
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
        />
        <input 
            type="text" 
            placeholder='email' 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
        />
        <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
        />
        <input 
            type="password" 
            placeholder='Confirm Password' 
            value={confirmPassword}
            onChange={(event)=>setConfirmPassword(event.target.value)}
        />
        <button>Submit</button>
    </form>
  );
};

export default SignUpPage;
