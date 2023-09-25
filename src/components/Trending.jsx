import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'


const Trending = ({ flag, data }) => {
    console.log(data)
    // const rowContainer = useRef();
    // useEffect(() => {
    //     rowContainer.current.scrollLeft += scrollValue;
    // }, [scrollValue])
    return (
        <div
            // ref={rowContainer}
            className={`w-full flex items-center flex-wrap justify-between gap-3  my-24 ${flag ?
                'overflow-x-scroll scrollbar-none' : 'overflow-hidden '}`}>

            {data && data.map(item => (
                <div key={item?.id}
                    className='w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[420px] my-24
              p-2 hover:drop-shadow-lg  flex flex-col items-center justify-evenly '>
                    <div className='w-full flex items-center justify-between'>
                        <motion.img whileHover={{ scale: 1.2 }}
                            src={item?.imageURL}
                            className='  '
                        />

                    </div>
                    {/* <div className='w-full flex flex-col gap-2 items-end justify-end'>
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
             </div> */}
                </div>
            ))}
        </div>
    )
}

export default Trending