import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className='mb-24'>
            <div className="hero min-h-[520px] bg-base-200 rounded-3xl">
                <div className="px-6 lg:px-28 py-14 hero-content flex-col-reverse gap-14 lg:gap-10 lg:flex-row-reverse">
                    <img src="/banner.png"
                         className="w-full max-w-xs rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="lg:w-2/3 text-5xl font-bold mb-12">
                            Books to freshen up your bookshelf
                        </h1>
                        <Link to='/booklist'  className="btn btn-primary">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
