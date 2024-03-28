import {useNavigate, useRouteError} from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../Header/Header.jsx";
import {Helmet} from "react-helmet-async";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    const handleGoHome = () => {
        navigate('/');
    }
    return (
        <>
            <Helmet>
                <title>Error | Book Vibe</title>
            </Helmet>
            <Header/>
            <div className='w-11/12 max-w-[1280px] mx-auto'>
                <div className='min-h-[70vh] w-full p-6 flex flex-col justify-center items-center rounded-xl'>
                    <h1 className='mb-8 text-9xl font-bold'>{error.status}</h1>
                    <h3 className='mb-4 text-4xl font-bold'>{error.statusText}</h3>
                    <p className='mb-6 md:w-2/5 text-lg text-center'>But don't worry, you can find plenty of other books on our homepage.</p>
                    <div className='flex flex-col sm:flex-row justify-center gap-6'>
                        <button className='btn md:text-lg' onClick={handleGoBack}>
                            <FaArrowLeftLong /> Go Back
                        </button>
                        <button className='btn btn-neutral md:text-lg'
                                onClick={handleGoHome}>
                            <RiHome4Line/> Go to homepage
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
