import {Helmet} from "react-helmet-async";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | Book Vibe</title>
            </Helmet>
            <div className='min-h-[50vh] w-full p-6 flex flex-col justify-center items-center rounded-xl'>
                <h2 className='mb-6 text-4xl font-bold'>Login</h2>
                <div className='flex flex-col gap-6'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                        </svg>
                        <input type="text" className="grow" placeholder="Username"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70">
                            <path fill-rule="evenodd"
                                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <input type="password" className="grow" placeholder="Password"/>
                    </label>
                    <button className="btn btn-wide btn-active">Login</button>
                </div>
            </div>
        </>
    );
};

export default Login;
