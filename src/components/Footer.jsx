import React from 'react'
import './Footer.css'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Footer = () => {
  const location = useLocation()
  const pathName = location.pathname;
  return (
    <div className='footer'>
      <div className='inner-container'>
      <img src={logo} alt='logo'/>
        <h2>Test your driving skills with our car</h2>
      </div>
      <div className='footer-box'>
        <h4 className='text-orange-600'>Quick Links</h4>
        <div className='footer-links hover:text-orange-300'>
        {pathName!=='/'?<Link to="/#about">About Us</Link>:<a className='hover:text-orange-300'href="#about">About Us</a>}
        {pathName!=='/'?<Link to="/#contacts">Contact Us</Link>:<a className='hover:text-orange-300'href="#contacts">Contact Us</a>}
        {pathName!=='/'?<Link to="/#reviews">Reviews</Link>:<a className='hover:text-orange-300'href="#reviews">Reviews</a>}
        {pathName!=='/'?<Link to="/#cars">Cars</Link>:<a className='hover:text-orange-300'href="#cars">Cars</a>}
        </div>
      </div>
      <div className='footer-box'>
        <h4 className='text-orange-600'>Follow</h4>
        <div className='footer-links '>
          <a className='hover:text-orange-300' href='#'>Twitter</a>
          <a className='hover:text-orange-300'href='#'>LinkedIn</a>
          <a className='hover:text-orange-300'href='#'>Facebook</a>
          <a className='hover:text-orange-300'href='#'>Instagram</a>
        </div>
      </div>
      <div className='footer-box'>
        <h4 className='text-orange-600'>Contacts us</h4>
        <div className='footer-contact'>
          <p>
            <FaMapMarkedAlt /> &nbsp; Address: Nairobi.
          </p>
          <p>
            <FaPhoneAlt /> &nbsp; Phone: +254765432678.
          </p>
          <p>
            <FaEnvelope /> &nbsp; Email: email@email.com
          </p>
          <p>
            <FaGlobe /> &nbsp; Wesbite: www.dreamCars.com
          </p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p className='u-small-text'>
          &copy; Copyright {(new Date().getFullYear())} Dream Cars, Inc. All Rights Reserved
        </p>
      </div>
    </div>

  )
}

export default Footer

