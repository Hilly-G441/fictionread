import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Signin = () => {
  // declaring state variables
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  // status messages
  const [loading,setLoading] = useState("")
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")

  // navigation
  const navigate = useNavigate()

  // function to signin
  const handleSignin =async(e) => {
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // retriving user details
      const formData = new FormData();
      formData.append ("email",email)
      formData.append ("password",password)

      // adding base url
      const response = await axios.post("https://hildaoryx.alwaysdata.net/api/signin",formData);
      if(response.data.user){
        setSuccess(response.data.message)
        setLoading("")
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")
      }else{
        setError(response.data.message)
        setLoading("")

      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div id='sign1'>
    <div className='row justify-content-center' >
      <div className='col-md-6 card shadow p-4 m-2 ' >
        <h1>Signin</h1>

        {/* binding variables */}
        {loading} <br/>
        {error} <br/>
        {success} <br/>
        <form action=" "onSubmit ={handleSignin}>
          
          <input 
          type="email" 
          placeholder='Enter email' 
          className='form-control text-dark' 
          onChange={(e)=>setEmail(e.target.value)}/>
           <br/>

          <input 
          type="password" 
          placeholder='Enter password' 
          className='form-control text-dark' 
          onChange={(e)=>setPassword(e.target.value)}/> 
          <br/>

          <input 
          type="submit" 
          value="Login" 
          className='btn btn-primary w-50' /> 
          <br/>

          <Link to='/signup'>Don't have an account? Signup</Link>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Signin
