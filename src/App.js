import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import {AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider';
import { getAllCars } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import Footer from './components/Footer';
import CarDetails from './components/CarDetails';



function App() {
  const [{cars}, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllCars().then((data) => {
      dispatch({
        type : actionType.SET_CARS,
        cars : data
      })

    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
    <div>
    <Router>
    <div className="w-screen h-auto flex flex-col bg-primary">
     <Header/>

     <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
     <Routes>
      <Route path='/' element={<MainContainer/>}/>
      <Route path='/createItem' element={<CreateContainer/>}/>
      <Route path='/carDetails/*' element={<CarDetails/>}/>

     </Routes>
     <Footer className="w-full" />
     </main>
    </div>
    </Router>
    </div>
    </AnimatePresence>
  );
}

export default App;
