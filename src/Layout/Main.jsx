import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";


const Main = () => {
    return (
        <div>
           <Outlet></Outlet> 
           <Footer></Footer>
           <Header></Header>
        </div>
    );
};

export default Main;