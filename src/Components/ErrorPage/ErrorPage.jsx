import {useNavigate, useRouteError} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <>
            <Header/>
            <div className='w-11/12 max-w-[1280px] mx-auto'>
                <div className='min-h-[50vh] w-full p-6 flex flex-col justify-center items-center rounded-xl'>
                    <h2 className='mb-4 text-4xl font-bold'>Oops!</h2>
                    <p className='text-lg mb-10'>{error.status} : {error.statusText}</p>
                    <button className='bg-red-700 text-white px-4 py-2 rounded-md text-lg' onClick={handleGoBack}>
                        Go Back
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ErrorPage;
