import Nevbar from "../components/Nevbar"
import Footer from "../components/Footer"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const PostDetails = () => {
  return (
    <>
      <Nevbar />
      <div >

        <div className='px-8 md:px-[200px] mt-8'>
          <div className="flex  justify-between items-center">
            <h1 className='font-bold text-black md:text-3xl text-md'>
              10 Uses of Artifical intelligence in day to day life
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <p><FaRegEdit /></p>
              <p><MdDelete /></p>
            </div>

          </div>
          <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
            <p>aarya dev</p>
            <div className='flex space-x-2 mt-10 '>
              <p>16/6 /2024</p>
              <p> 12:12</p>
            </div>
          </div>

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg/1280px-Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg" alt="" className='h-[550px] mx-auto w-full object-cover' />
          <p className=' mx-auto mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className=" flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="bg-gray-300 rounded-lg px-3 py-1">Tech </div>
              <div className="bg-gray-300 rounded-lg px-3 py-1">AI </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-6 font-semibold">Comments:</h3>
            <div className="px-2 py-2 bg-gray-200 rounded-lg mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">Aarya Moktan</h3>
                <div className="flex justify-center items-center sapce-x-4 ">
                  <p className="text-gray-500 text-sm">16/06/2024</p>
                  <div className="flex items-center justify-center space-x-2 mx-3">
                    <p><FaRegEdit /></p>
                    <p><MdDelete /></p>
                  </div>
                </div>
              </div>
              <p className="px-4 mt-2">Nice information</p>
            </div>
            
          </div>
          <div className=" w-fullflex flex-col mt-4 md:flex-row">
            <input className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" type="text" placeholder="Write comment" />
            <button className="bg-black text-sm text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0 mb-2">Add Comment</button>
          </div>

        </div></div>
      <Footer /></>

  )
}

export default PostDetails