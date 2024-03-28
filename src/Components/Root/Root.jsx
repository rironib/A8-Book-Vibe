import Header from "../Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Root = () => {
    return (
        <>
            <Header/>
            <div className='w-11/12 max-w-[1280px] mx-auto'>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Root;
