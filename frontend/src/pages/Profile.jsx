import Footer from "../components/Footer"
import Nevbar from "../components/Nevbar"
import Proiflepost from "../components/Proiflepost"
const Profile = () => {
  return (
   <>
   <Nevbar/>
   <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
    <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
        <h1 className="text-xl front-bold mb-4">Your post</h1>
        <Proiflepost/>
        <Proiflepost/>
        <Proiflepost/>
        <Proiflepost/>
    </div>
    <div className=" md:sticky md:top-16 flex justify-start md:justify-end flex-col space-y-10  md:w-[30%] w-full mt-5  md:items-end  ">
        <div className="flex flex-col space-y-4 items-start">
        <h1 className="text-xl front-bold mb-9 ">Profile</h1>
        <input className="outline-none px-4 py-2 text-gray-500 " placeholder="Your name" type="text"/>
        <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" type="email"/>
        <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your password" type="password"/>
        <div className="flex items-center space-x-4 mt-8">
            <button className="text-white bg-black font-semibold px-4 py-2 hover:text-black hover:bg-gray-400">Update</button>
            <button className="text-white bg-black font-semibold px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button>
        </div>
        </div>  
    </div>
   </div>
   <Footer/></>
  )
}

export default Profile