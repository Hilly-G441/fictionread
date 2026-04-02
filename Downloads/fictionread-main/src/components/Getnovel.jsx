import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Footer from './Footer'
import slide1 from'../images/caurosel.png'
import slide2 from'../images/case.webp'
import slide3 from'../images/cover1.jpg'

const Getnovel = () => {
  // declairing state variables
  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState ("")
  const[error,setError] = useState ("")
// navigation
const navigate = useNavigate()

// search term 
const [searchTerm,setSearchTerm] = useState("")

// filter
const filteredProducts = products.filter((product)=> product.product_name.toLowerCase().includes(searchTerm.toLowerCase()))

// image url
const img_url = "https://hildaoryx.alwaysdata.net/static/images/"

// function to retrieve products
const getProducts = async()=>{
  setLoading("Please wait as we retrieve products...")
  try {
    const response = await axios.get("https://hildaoryx.alwaysdata.net/api/get_product_details")
    setProducts(response.data)
    setLoading("")
  } catch (error) {
    setError(error.message)
  }
}

  // using useEffect to automatically retrieve products from database
  useEffect(()=>{
    getProducts()
  },[]);

  return (
   
    <div className='row'>
       <div className='row justify-content-center mb-5'>
      <div className='col-md-6'>
        <input type="text"
        className='form-control search-bar text-dark'
        placeholder='Search for a novel..'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>

        {/* setting the carousel */}
       <section className="row">
      <div className="col-md-12">
        {/* carousel starts here */}
        <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
          {/* image wrapper */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} alt="slide1" className="d-block w-100 carousel-img" id='caurosel'/>
            </div>
            <div className="carousel-item" >
              <img src={slide2} alt="slide2" className="d-block w-100 carousel-img" id='caurosel'/>
            </div>
            <div className="carousel-item" >
              <img src={slide3} alt="slide3" className="d-block w-100 carousel-img" id='caurosel'/>
            </div>

          </div>

          {/* controls */}
          <div>
            <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-danger"></span>
            </a>

            <a href="#mycarousel" className="carousel-control-next"data-bs-slide="next">
              <span className="carousel-control-next-icon bg-danger"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    

      <h3 className='text-primary'>Available Novels</h3>
        {loading}
        {error}
      {/* products card design */}


      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
      <div className='col-md-3 justify-content-center'>
        <div className='card shadow mt-2 p-4'>
          <img src={img_url + product.product_photo} alt={product.product_photo} className='product_img' />

          {/* product details */}
          <div className='card-body'>
            <h5 className='mt-2'>{product.product_name}</h5>
            <p className='text-muted'>{product.product_description}</p>
            <b className='text-warning'>Ksh {product.product_cost}</b> <br/>

            <button className='btn btn-outline-primary mt-2 w-100' onClick={()=>navigate("/makepayment",{state:{product}})}>Purchase now</button>

          </div>
        </div>
      </div>
        ))
      ) : (
        <p>No Novels found</p>
      )}  
    <Footer/>
    </div>
  )
}

export default Getnovel
