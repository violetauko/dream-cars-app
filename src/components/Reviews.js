import React from 'react'
import './Reviews.css'
import { ImQuotesLeft } from 'react-icons/im'
import { RiStarSFill } from 'react-icons/ri'
import { RiStarSLine } from 'react-icons/ri'
import photo1 from '../assets/images/photo1.webp'
import photo2 from '../assets/images/photo2.jpeg'
import photo3 from '../assets/images/photo3.webp'

const Reviews = () => {
  return (
    <section id='reviews' className='r-container'>
      <h2 className='text-orange-600'>Reviews</h2>
      <h1>What do our customers say?</h1>
      <div className='r-cards'>
        <div className='r-card'>
          <ImQuotesLeft id='im-icon' size={45} />
          <p>"fight for the customer" approach is a breath of fresh air.
            If you are in the market for a Caddy, I strongly recommend you visit them and everything will be sorted</p>
          <h3 className='font-bold mt-3'>Kelly C.</h3>
          <div className='ri-icons'>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
          </div>
          <div className='photo'>
          <img src={photo1} alt="person1"/>
          </div>
        </div>
        <div className='r-card'>
          <ImQuotesLeft id='im-icon' size={45} />
          <p>As usual everything went smoothly and perfectly. After 16 years as a client the service and 
          people remain at the top. No reason for me to go anywhere else for my cars.</p>
          <h3 className='font-bold mt-3'>Carry Kyles.</h3>
          <div className='ri-icons'>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
          </div>
          <div className='photo'>
          <img src={photo2} alt="person2"/>
          </div>
        </div>
        <div className='r-card'>
          <ImQuotesLeft id='im-icon' size={45} />
          <p>Very organized and excellent service. Stuart was extremely helpful and I would definitely go to him again. 
          The video summary of my service was also a nice touch.</p>
          <h3 className='font-bold'>Jessy Kim.</h3>
          <div className='ri-icons'>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSFill size={24}/>
            <RiStarSLine size={24}/>
          </div>
          <div className='photo'>
          <img src={photo3} alt="person3"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews