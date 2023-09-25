import React from 'react'
import { useParams } from 'react-router-dom'
import AllCarsContainer from './RowContainer'


const CarDetails = ({data}) => {
    const {id} = useParams();
    const item = data[id]
    return (
        <div className='cd-container'>
              <div className='w-full flex items-center justify-between'>
                        <AllCarsContainer/>
                    </div>
        </div>
    )
}
export default CarDetails