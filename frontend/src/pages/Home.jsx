import HomePost from "../components/HomePost"
import Footer from "../components/Footer"
import Nevbar from "../components/Nevbar"
const Home = () => {
  return (
    <>
    <Nevbar/>
    <div className=" px-8 md:px-[100px]">
    <HomePost/>
    <HomePost/>
    <HomePost/>
    <HomePost/>
    </div>
    <Footer/>
    </>
  )
}

export default Home