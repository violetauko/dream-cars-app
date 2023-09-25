import React from 'react'
import heroBg from '../assets/images/heroBg.png'
import { heroData } from '../utils/data'
import { Link } from 'react-router-dom'

const HomeContainer = () => {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full mb-9'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide
         text-headingColor'>Make Your Driving More {""}
          <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'>Exiting Today</span></p>

        <p className='text-base text-textColor text-left md:text-left md:w-[80%]'>We are driven by the understanding that our success will ultimately be determined
          more by the number of people we help, rather than the amount of product we sell.
        </p>
        {/* <Link to="/"><button type='button' className='bg-orange-600 w-full md: w-auto px-4 py-2 rounded-lg hover:shadow-lg
           transition-all ease-in-out duration-100' >
            Ride
          </button></Link> */}
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img src={heroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-510" alt="bg" />

        <div className='w-full h-full absolute top-0 left-0 lg:left-6
     items-center justify-center 
    px-32 py-4 gap-2 drop-shadow-lg '>
          {
            heroData && heroData.map((data) => (
              <div key={data.id} className='w-[250px] md:w-[420px] md:h-[370px] lg:p-4 bg-cardOverlay backdrop-blur-md mt-20 lg:mt-10
            rounded-3xl flex flex-col items-center justify-center '>
                <img src={data.image} className=" -mt-24" alt="" />
                {/* <p className='text-lg font-semibold text-textColor mt-2'>
              {data.name}</p> */}
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}

export default HomeContainer