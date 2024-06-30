import Nevbar from '../components/Nevbar'
import Footer from '../components/Footer'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { useOutlet } from 'react-router-dom';
const CreatePost = () => {
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);
    const addCategory = (() => {
        let updatecat = [...cats]
        updatecat.push(cat);
        setCat("")
        setCats(updatecat)
    })
    const deleteCategory = (i) => {
        let updatecats = [...cats]
        updatecats.pop()
        setCats(updatecats)
    }
    return (
        <>
            <Nevbar />
            <div className='px-6 md:px-[200px] mt-8'>
                <h1 className='font-bold md:text-2xl text-xl mt-8'>Create a post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                    <input className='px-4 py-2 outline-none' placeholder='Enter Post title' />
                    <input type="file" className='px-4 py-2 outline-none' />
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input value={cat} className='px-4 py-2 outline-none' onChange={(e) => setCat(e.target.value)} placeholder="enter post category" type="text" />
                            <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
                        </div>
                        <div className='flex  px-4 mt-3'>
                            {cats?.map((c, i) => {
                                return (
                                    <>
                                        <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md mt-2'>
                                            <p>{c}</p>
                                            <p onClick={deleteCategory} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><RxCross2 /></p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                    </div>
                    <textarea rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description' />
                    <button className='bg-black w-full md:w-[20%] text-white  mx-auto font-semibold px-4 py-2 md:text-xl text:lg ' >Create</button>
                </form>
            </div>
            <Footer /></>
    )
}

export default CreatePost