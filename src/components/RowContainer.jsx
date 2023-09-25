import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link,Outlet,Route, Routes } from 'react-router-dom'
import './RowContainer.css'
import CarDetails from './CarDetails'



const RowContainer = ({data}) => {
  return (
    <div>
          <div><Outlet/></div>
            <Routes>
            <Route index element={<AllCarsContainer data={data}/>}/>
            <Route path={":id"} element={<CarDetails data={data}/>} />
            </Routes>
    </div>
  )
}


const AllCarsContainer = ({ flag, data, scrollValue }) => {
    console.log(data)
    const rowContainer = useRef();
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])

    const [showDetails, setShowDetails] = useState("")

   
    return (
        <div
            ref={rowContainer}
            className={`w-full flex items-center flex-wrap justify-between gap-3 bg-rowBg my-12 ${flag ?
                'overflow-x-scroll scrollbar-none' : 'overflow-hidden '}`}>

            {data && data.map(item => (
                <Link to ={`${item.id}`}>
                <div key={item?.id}
                    className='container w-300 h-[400px] min-w-[300px] md:w-340 md:min-w-[420px] my-12 
              bg-white rounded-lg p-2 hover:drop-shadow-lg backdrop-blur-lg flex flex-col items-center justify-evenly relative'
                >
                    <div className='w-full flex items-center justify-between'>
                        <motion.img whileHover={{ scale: 1.2 }}
                            src={item?.imageURL}
                            className='-mt-8 w-48'
                        />
                        {/* <div class="overlay">
                        <div class="text">{item?.description}</div>
                        </div> */}
  
                    </div>
                    <div className='w-full flex flex-col gap-2 items-end justify-end'>
                        <p className='text-textColor font-semibold text-base md:text-lg'>
                            {item?.title}
                        </p>
                        <p className='mt-1 text-sm text-gray-500 '>{item?.model}</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-textColor font-semibold'>
                                <span className='text-sm text-red-500'>$</span>
                                {item?.price}
                            </p>
                        </div>
                    </div>

                </div>
                 </Link>
                
            ))}
        </div>
    )
}

export default RowContainer