import PostDetails from "./pages/PostDetails"
import Home from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Regist from "./pages/Regist"
import Profile from "./pages/Profile"
import CreatePost from "./pages/CreatePost"
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/posts/post/:id" element={<PostDetails/>}/>
        <Route path="/register" element={<Regist/>}/>
        <Route path="/write" element={<CreatePost/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
     
    </div>
  )
}

export default App