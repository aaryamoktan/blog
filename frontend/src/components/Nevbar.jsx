import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Menu from "./Menu";
const Nevbar = () => {
  const [menu ,setMenu] = useState(false)
  const user = true;
  const showmenu =()=>
    {
      setMenu(!menu)
    }
  return (
    <>
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 ">
      <h1 className="text-lg md:text-xl font-extrabold">
       <Link to="/">Blog Market</Link> 
        </h1>
        <div className=" flex justify-center items-center space-x-0 ">
          <p><IoIosSearch className="size-5 "/></p>
          <input  className="outline-none px-3 py-1 " placeholder="search" type="text"/>
        </div>
        <div className=" hidden md:flex items-center justify-center space-x-2 md:space-x-4">
         {user && <h3><Link to="/write">Write</Link></h3>}
         {!user && <h3><Link to="/login">Login</Link></h3>}
          {user &&<Link to="/profile/:id"><h3>Profile</h3> </Link> }
            {!user&& <h3> <Link to="/Register">Register </Link></h3>  } 
        </div>
        <div onClick={showmenu} className="md:hidden cursor-pointer">
          <FaBars/>
          {menu && <Menu/>}
        </div>
        </div></>
  )
}
export default Nevbar;