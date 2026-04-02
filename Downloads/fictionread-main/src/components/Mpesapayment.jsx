import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const Mpesapayment = () => {

// declaring state variables
const{product} = useLocation().state || {};
const [phone,setPhone] = useState("")
const[messages,setMessages] = useState("")
const[error,setError] = useState("")

// image url
const img_url = "https://hildaoryx.alwaysdata.net/static/images/"

// function for mpesa payment
const handleSubmit =async (e) =>{
  e.preventDefault()
  setMessages("Please wait as we process the transaction")
  try {
    // retrieving user and product details for submission
    const formData = new FormData()
    formData.append("phone",phone)
    formData.append("amount",product.product_cost)

    // adding base url for mpesa payment request
    const response = await axios.post("https://hildaoryx.alwaysdata.net/api/mpesa_payment",formData)
    setMessages(response.data.message)
  } catch (error) {
    setError(error.message)
  }
}
  return (
    <div className='row  justify-content-center mt-2'>
      <h3>LIPA NA MPESA</h3>
  {messages}
  {error}
      {/* Make payment body */}
      <div className='col-md-6 card shadow card-margin mb-4'>
        <img src={img_url + product.product_photo} alt={product.product_photo} />
        <p>Product Name: {product.product_name}</p>
        <p className='text-warning'>Product Cost: {product.product_cost}</p>
        {/* Mpesa payment form */}
        <form action="" onSubmit={handleSubmit}>

          <label htmlFor="">Phone Number</label>

          <input 
          type="tel"
          placeholder='Enter Phone number'
          className='form-control'
          onChange={(e) => setPhone(e.target.value)}
          /> <br/>

          <button className='btn btn-warning'>Make Payment</button> 
        </form> <br/>
      </div>
      <Footer/>
    </div>
  )
}


export default Mpesapayment
