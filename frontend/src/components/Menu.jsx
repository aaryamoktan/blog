import { Link } from "react-router-dom"
const Menu = () => {
    const user = true;
  return (
    <>
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4">
      {!user &&<Link to="/login"> <h3 className="text-white text-md hover:tert-gray-500">Login</h3></Link>} 
      {!user && <Link to="/register">  <h3 className="text-white text-md hover:tert-gray-500">rgister</h3></Link> }
      {user &&<Link to="/write"> <h3 className="text-white text-md hover:tert-gray-500">Write</h3></Link>} 
      {user && <Link to="/profile/:id">  <h3 className="text-white text-md hover:tert-gray-500">Profile</h3></Link> }
    </div>
    </>
  )
}

export default Menu