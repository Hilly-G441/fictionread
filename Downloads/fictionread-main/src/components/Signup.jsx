import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Signup = () => {
    // Declairing state variables
const[username, setUsername] = useState("")
const[email, setEmail] = useState("")
const[phone, setPhone] = useState("")
const[password, setPassword] = useState("")

// status messages
const[loading,setLoading] = useState("")
const [error,setError] = useState("")
const[success,setSuccess] = useState("")

// function to signup
const submitSignupDetails =async(e) =>{
  e.preventDefault()
  setLoading("Please wait...")
  try {
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("password",password);

    // adding base url
    const response = await axios.post("https://hildaoryx.alwaysdata.net/api/signup",formData);

    setSuccess(response.data.success)
    setLoading("")

    // reset values
    setUsername("")
    setEmail("")
    setPhone("")
    setPassword("")
  } catch (error) {
    setError(error.message)
    
  }
}
  return (
   <div className='container-fluid' id='sign2'>
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4' id='card' >
        <h1 id='h1'>Sign Up</h1>
        
        {/* Binding variables */}
        {loading} <br/>
        {error} <br/>
        {success} <br/>


        {/* Signup form */}
        <form onSubmit={submitSignupDetails}>
          <input 
          type="text" 
          placeholder='Enter username' 
          className='form-control text-dark' 
          onChange={(e)=>setUsername(e.target.value)}/>
          <br/>

          <input 
          type="email" 
          placeholder='Enter email' 
          className='form-control text-dark' 
          onChange={(e)=>setEmail(e.target.value)}/>
          <br/>

          <input 
          type="tel" 
          placeholder='Enter phone number'
          className='form-control text-dark' 
          onChange={(e)=>setPhone(e.target.value)}/>
          <br/>

          <input 
          type="password" 
          placeholder='Enter password' 
          className='form-control text-dark' 
          onChange={(e)=>setPassword(e.target.value)}/>
          <br/>
          
          <input 
          type="submit" 
          value="Signup " 
          className='btn btn-primary text-dark w-50'/>
          <br />

          {/* Incase someone has an account */}
          <Link to='/signin' className='text-dark'>Already have an account? Signin</Link>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Signup

