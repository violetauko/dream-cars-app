import React, { useState } from 'react'
import HomeContainer from './HomeContainer'
// import { motion } from 'framer-motion'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
// import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import MenuContainer from './MenuContainer'
import Trending from './Trending'
import Mission from './Mission'
import AboutUs from './AboutUs'
import Reviews from './Reviews'
import CarDetails from './CarDetails'

const MainContainer = () => {
  const [{cars}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] =useState()
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>
      <Mission/>

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='mt-5 text-4xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content 
          before:w-20 before:h-1 before:-bottom-4 
          before:left-0 before:bg-gradient-to-tr from-red-600
           to-red-800 transition-all ease-in-out duration-100'>
            Trending Cars
          </p>
          {/* <div className='hidden md:flex gap-3 items-center'>
            <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center
             hover:bg-orange-500 cursor-pointer transition ease-in-out duration-100 hover:shadow-lg'
             onClick={() =>setScrollValue(-200)}
             >
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center
             hover:bg-orange-500 cursor-pointer transition ease-in-out duration-100 hover:shadow-lg'
             onClick={() =>setScrollValue(200)}
             >
              <MdChevronRight className='text-lg text-white'/>
             </motion.div>
          </div> */}
        </div>
        <Trending 
        // scrollValue={scrollValue}
        flag={true} data={cars?.filter((n) => n.category === "All")}/>
      </section>
      <MenuContainer/>
      <AboutUs/>
      <Reviews/>
    </div>
  )
}

export default MainContainer