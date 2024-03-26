import Header from "./Header/Header.jsx";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div className='w-11/12 max-w-[1280px] mx-auto'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;
