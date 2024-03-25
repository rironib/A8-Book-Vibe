
const Banner = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-between items-center p-4 mb-24'>
            <div className="hero min-h-[520px] bg-base-200 rounded-3xl">
                <div className="px-28 py-10 hero-content flex-col-reverse gap-10 lg:flex-row-reverse">
                    <img src="/banner.png"
                         className="max-w-xs rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="lg:w-2/3 text-5xl font-bold mb-12">
                            Books to freshen up your bookshelf
                        </h1>
                        <button className="btn btn-primary">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
