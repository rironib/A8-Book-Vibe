import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className='mb-24'>
            <div className="hero min-h-[480px] bg-base-200 rounded-3xl">
                <div className="px-12 md:px-14 lg:px-28 py-20 md:py-4 hero-content flex-col-reverse gap-16 lg:gap-10 md:flex-row-reverse">
                    <img src="/banner2.png"
                         className="w-full max-w-[450px] md:max-w-[320px] rounded-lg"/>
                    <div className='text-center md:text-left'>
                        <h1 className="lg:w-2/3 text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-normal xl:leading-relaxed font-bold mb-8 md:mb-12">
                            Books to freshen up your bookshelf
                        </h1>
                        <Link to='/booklist'  className="btn bg-[#23BE0A] text-white text-lg">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
