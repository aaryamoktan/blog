import React from 'react'
import { Link } from 'react-router-dom'
const HomePost = () => {
  return (
    <>
    <Link to="/posts/post/:i">
    <div className='w-full flex flex-col md:flex-row justify-center items-center mt-20 space-x-10 mb-10  '>
      <div className='w-[95%] md:w-[35%] h-[200px] flex justity-center items-center '>
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg/1280px-Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg" alt="" className='h-full w-full object-cover'/>
      </div>
      <div className='flex flex-col w-[95%] md:w-[30%]'>
        <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
          10 Uses of Artifical intelligence in day to day life
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
          <p>aarya dev</p>
          <div className='flex space-x-2 '>
            <p>16/6 /2024</p>
            <p> 12:12</p>
          </div>
        </div>
        <p className='text-sm md:text-lg'>sdfufhsjdfsn ihf dfhsud f uhemy name is aaray amoktan iu=ma from sarlahui nepal</p>
      </div>
    </div>
    </Link>
    </>
  )
}

export default HomePost