// import {Link} from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";

const Book = ({book}) => {
    const {bookId,bookName,image,author,category,rating,tags} = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className='flex flex-col p-6 border rounded-2xl'>
                <div className='flex justify-center bg-[#F3F3F3] mb-6 py-6 rounded-2xl'>
                    <img src={image} className='h-60'/>
                </div>
                <div className='flex flex-wrap gap-5 text-[#23BE0A] font-medium mb-4'>
                    {
                        tags.map((tag, idx) => <span key={idx}>{tag}</span>)
                    }
                </div>
                <div className='flex-grow font-bold text-2xl mb-4'>{bookName}</div>
                <div className='text-[#131313CC] font-medium mb-4 pb-4 border-b border-dashed'>By : {author}</div>
                <div className='flex justify-between font-medium text-[#131313CC]'>
                    <div>{category}</div>
                    <div className='flex items-center gap-2'>{rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
