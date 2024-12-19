import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer.jsx";



const Body = () => {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        <Footer/>
      
       
       

    </div>
  )
}

export default Body;