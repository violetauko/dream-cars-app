import React, { useState } from 'react'
import avatar from '../assets/images/avatar.png'
import { MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import logo from '../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue()
  const [isMenu, setIsMenu] = useState(false)
  const location = useLocation()
  const pathName = location.pathname;

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    } else {
      setIsMenu(!isMenu)
    }
  }
  const logout = () => {
    setIsMenu(false)
    localStorage.clear()
    dispatch({
      type: actionType.SET_USER,
      user: null,
    })
  }
  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-3 px-16 bg-primary'>
      {/* desktop and tablets */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={logo} className="w-12 object-cover" alt="logo" />
          <p className='text-headingColor text-xl font-bold'>Dream Cars</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>{pathName !== '/' ? <Link to="/#">Home</Link> : <a href="#">Home</a>}</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>{pathName !== '/' ? <Link to="/#about">About Us</Link> : <a href="#about">Cars</a>}</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>{pathName !== '/' ? <Link to="/#cars">Cars</Link> : <a href="#cars">About Us</a>}</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>{pathName !== '/' ? <Link to="/#contacts">Contact Us</Link> : <a href="#contacts">Contact Us</a>}</li>

          </motion.ul>


          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar} className="w-10 min-w-[40px] max-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
              alt="user"
              onClick={login}
            />
            {
              isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                  {
                    user && user.email === "aukoviolet24@gmail.com" && (
                      <Link to="/createItem">
                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                transition-all duration-100 ease-out text-textColor text-base'

                          onClick={() => setIsMenu(false)}
                        >
                          New Item <MdAdd /> </p>
                      </Link>
                    )
                  }
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-textColor text-base'
                    onClick={logout}
                  >
                    Logout <MdLogout /></p>
                </motion.div>
              )
            }

          </div>

        </div>
      </div>

      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={logo} className="w-12 object-cover" alt="logo" />
          <p className='text-headingColor text-sm font-bold'>Dream Cars</p>
        </Link>

        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar} className="w-10 min-w-[40px] max-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
            alt="user"
            onClick={login}
          />
          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                {
                  user && user.email === "aukoviolet24@gmail.com" && (
                    <Link to="/createItem">
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                transition-all duration-100 ease-out text-textColor text-base'>New Item <MdAdd /> </p>
                    </Link>
                  )
                }

                <ul className='flex flex-col'>
                  <li className='text-base text-textColor hover:text-headingColor 
                  duration-100 transition-all ease-in-out cursor-pointer 
                  px-4 py-2 hover:bg-slate-100'
                    onClick={() => setIsMenu(false)}
                  >Home</li>
                  <li className='text-base text-textColor hover:text-headingColor
                   duration-100 transition-all ease-in-out cursor-pointer 
                   px-4 py-2 hover:bg-slate-100'
                    onClick={() => setIsMenu(false)}
                  >Cars</li>
                  <li className='text-base text-textColor hover:text-headingColor 
                  duration-100 transition-all ease-in-out cursor-pointer 
                  px-4 py-2 hover:bg-slate-100'
                    onClick={() => setIsMenu(false)}
                  >About Us</li>
                  <li className='text-base text-textColor hover:text-headingColor 
                  duration-100 transition-all ease-in-out cursor-pointer 
                  px-4 py-2 hover:bg-slate-100'
                    onClick={() => setIsMenu(false)}
                  >Contact us</li>
                </ul>

                <p className='m-2 p-2 rounded-md shadow-lg flex items-center justify-center gap-3 cursor-pointer bg-slate-200
                 hover:bg-gray-300 transition-all duration-100 ease-out text-textColor text-base'
                  onClick={logout}
                >
                  Logout <MdLogout />

                </p>

              </motion.div>
            )
          }

        </div>
      </div>
    </header>
  )
}

export default Header