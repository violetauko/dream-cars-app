// import React from 'react'
// import { Link,Outlet,Route, Routes } from 'react-router-dom'
// import RowContainer from './RowContainer'
// import CarDetails from './CarDetails'

// const AllCars = ({cars}) => {
//   return (
//     <div className='al-container'>
            
//             <div><Outlet/></div>
//             <Routes>
//             <Route index element={<AllCarsContainer cars={cars}/>}/>
//             <Route path={":id"} element={<CarDetails cars={cars}/>} />
//             </Routes>
//         </div>
//     )
// }
// const AllCarsContainer = ({cars}) => {
//   return (
//     <div className='ls-inner-container'>
//                 {cars.map((item, index) =><div className='ls-collection' key={item.id}>
//                 <Link to={`${index}`} style={{textDecoration: "none", color: "#010824", fontFamily: "'Poppins', sans-serif"}}>
//                 <RowContainer imageURL={item['imageURL']} title={item['title']} description={item['description']} model={item['model']} price={item['price']} />
//                     </Link>
//                 </div>)}
//             </div>
//   )
// }

// export default AllCars