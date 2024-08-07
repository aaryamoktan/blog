import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import Footer from '../components/Footer'
import { URL } from './url'
import { Navigate } from 'react-router-dom'
const Regist = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState();
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const registerHandle =async() => {
    try{
      const save =await fetch(URL+'/auth/register',  
        {method:"POST",
          headers:{"Authorization":localStorage.getItem('token')}})
        .then(result=>console.log(result))
       .catch(err=>console.log(err));
       if(save)
       {
       console.log(save)
       alert("data send")
       }
    }
    catch(err)
    {
      console.log(err)
    }
  }
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 mt-5 ">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Blog Market</Link>
        </h1>
        <h3><Link to="/login">login</Link></h3>
      </div>
      <div className='w-full flex justify-center items-center h-[70vh] mt-20'>
        <div className=' flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
          <h1 className='text-xl font-bold text-left'>Create an account</h1>
          <input className='w-full px-4 py-2 border-2 border-black outline-0' type="text" onChange={(e) => {
            setUsername(e.target.value)
          }
          } placeholder="Enter your username" />
          <input className='w-full px-4 py-2 border-2 border-black outline-0' type="text" onChange={(e) => {
            setEmail(e.target.value)
          }
          } placeholder="Enter your email" />
          <input className='w-full px-4 py-2 border-2 border-black outline-0' type="password" onChange={(e) => {
            setPassword(e.target.value)
          }
          } placeholder="Enter your password" />
          <button onClick={registerHandle} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>
            Register </button>
          <div className='flex justify-center items-center space-x-4'>
            <p>Already have an account?</p>
            <p className='text-gray-500 hover:text-black'><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Regist