import { FiUsers } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { LuFileBarChart } from "react-icons/lu";
import {useNavigate} from "react-router-dom";
const ListedBook = ({book}) => {
    const {
        bookId = null,
        image = "",
        bookName = "",
        author = "",
        category = "",
        tags = [],
        totalPages = "",
        publisher = "",
        yearOfPublishing = "",
        rating = ""
    } = book || {};
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/book/${bookId}`);
    }

    return (
        <div className='flex flex-col md:flex-row gap-6 p-6 mb-4 border rounded-xl'>
            <div className='flex items-center bg-[#1313130D] p-4 rounded-xl'>
                <img src={image} className='max-h-[340px] md:max-h-[280px] lg:max-h-[240px] xl:max-h-[220px] mx-auto rounded-xl' />
            </div>
            <div className='w-full'>
                <h2 className='font-playfairDisplay font-bold text-2xl lg:text-3xl mb-3'>{bookName}</h2>
                <h5 className='font-medium mb-5'>By : {author}</h5>
                <div className='flex flex-wrap gap-4 mb-4'>
                    <p className='flex flex-wrap gap-4'>
                        <strong>Tag</strong>
                            {
                                tags.map((tag, idx) => <span className='bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1 rounded-full' key={idx}>#{tag}</span>)
                            }
                    </p>
                    <p className='flex gap-2 items-center text-[#131313CC]'><GrLocation /> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex flex-wrap gap-5 border-b pb-3 mb-3'>
                    <p className='flex gap-2 items-center'><FiUsers /> Publisher: {publisher}</p>
                    <p className='flex gap-2 items-center'><LuFileBarChart /> Page {totalPages}</p>
                </div>
                <div className='flex flex-wrap gap-3'>
                    <span className='bg-[#328EFF26] text-[#328EFF] px-4 py-1 rounded-full'>Category: {category}</span>
                    <span className='bg-[#FFAC3326] text-[#FFAC33] px-4 py-1 rounded-full'>Rating: {rating}</span>
                    <button onClick={handleOnClick} className='bg-[#23BE0A] text-white px-4 py-1 rounded-full'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;
