import React, { useEffect, useState } from 'react'
import { MdCategory } from 'react-icons/md'
import { categories } from '../utils/data'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import RowContainer from './RowContainer'

const MenuContainer = () => {
    const [filter, setFilter] = useState("All")
  
    const [{cars}, dispatch] = useStateValue();

   
  return (
    <section className='w-full my-6'>
        <div className='w-full flex flex-col items-center justify-center'>
        <p className='my-5 text-4xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content 
          before:w-20 before:h-1 before:-bottom-4 
          before:left-0 before:bg-gradient-to-tr from-orange-400
           to-orange-600 mr-auto'>
            What We Have
          </p>
          <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
            {categories && categories.map(category => (
                <motion.div 
                whileTap={{scale: 0.6}}
                key={category.id} 
                className={`group ${filter === category.urlParamName ? 'bg-orange-600' : 'bg-card'} w-32 min-w-[94px] h-28
                cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center 
                justify-center duration-150 transition-all  hover:bg-orange-600 ease-in-out`}
                onClick={() => setFilter(category.urlParamName)}>
                   <div className={`w-10 h-10 rounded-full ${filter === category.urlParamName ? 'bg-card' : 'bg-orange-600'} group-hover:bg-card flex items-center justify-center`}>
                   <MdCategory className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`}/>
                   </div>
                       <p className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor'}  group-hover:text-white`}>{category.name}</p>
                      
                   
                </motion.div>
            ))}
          </div>
          <div className='w-full'>
            <RowContainer
            flag={false}
            data={cars?.filter((n) => n.category === filter)}
            />
          </div>
        </div>
    </section>
  )
}

export default MenuContainer