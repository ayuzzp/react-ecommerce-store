import CustomNavbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Slider from "./components/slider";
import CategoryNav from "./components/cetegoryNavbar";



const Layout = () => {
  return (
    <>
      <CustomNavbar />
     <CategoryNav />
      <Slider />
      <Outlet />
      <Footer/>
      
    </>
  );
};

export default Layout;
