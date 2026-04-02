import React from 'react'
import image from '../in.avif'
import picture from '../fb.avif'
import tag from '../x.avif'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div className='row  bg-info'>
        <div className='col-md-4'>
          <b><h3>QUICK LINKS</h3></b>
           <Link href=''to="/signup" className='text-dark nav-link'>Signup</Link><br />
           <Link to="/signin" className='text-dark nav-link'>Signin</Link><br />
           <Link to="/addnovel" className='text-dark nav-link'>Add Novel</Link><br />
        </div>
        <div className='col-md-4'>
         <b><h3>CONNECT WITH US</h3></b>
         <img src={image} alt="" id='socials'/> <br/> <br />
         <img src={picture} alt=""  id='socials'/> <br/> <br />
         <img src={tag} alt="" id='socials' /> <br /> <br />
        </div>
        <div className='col-md-4'>

          <h3>CONTACT US</h3>
          <form action="">
            <input type="email" placeholder='Enter your email' className='form-control' /><br />
            <textarea cols={15} rows={7}  placeholder='Leave a comment' className='form-control'></textarea><br />
             <input type="submit" value="Send Message" class="btn btn-primary"></input><br />
          </form><br />
        </div>
          <footer className=' text-light bg-dark p-2 text-center'>
            <h5>Developed by Hilly-G. &copy; 2026. All rights reserved.</h5>
        </footer>
      </div>
  )
}

export default Footer
