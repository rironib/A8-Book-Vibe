import {useLoaderData, useParams} from "react-router-dom";
import {saveToReadBook, saveToWishlist} from "../../Utility/localStorage.js";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet-async";

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;

    const handleAddToReadBook = () => {
        saveToReadBook(idInt);
    }

    const handleAddToWishlist = () => {
        saveToWishlist(idInt)
    }

    return (
        <>
            <Helmet>
                <title>{bookName} | Book Vibe</title>
            </Helmet>
            <div className='grid lg:grid-cols-2 gap-12 mb-12'>
                <div className='col-span-1 flex justify-center bg-[#1313130D] p-6 rounded-xl'>
                    <img src={image} className='max-h-[500px] rounded-xl'/>
                </div>
                <div className='col-span-1 flex flex-col'>
                    <h2 className='font-bold text-3xl mb-5'>{bookName}</h2>
                    <h5 className='text-[#131313CC] text-lg font-medium mb-4'>By : {author}</h5>
                    <h5 className='text-[#131313CC] text-lg font-medium py-2 border-y'>{category}</h5>
                    <p className='flex-grow text-[#131313B3] py-3'>
                        <strong className='text-[#131313]'>Review : </strong>{review}
                    </p>
                    <p className='flex items-center gap-2 pb-3 border-b'>
                        <strong>Tag </strong>
                        <span className='flex flex-wrap gap-2'>
                            {
                                tags.map((tag, idx) => <span
                                    className='bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1 rounded-full'
                                    key={idx}>{tag}</span>)
                            }
                        </span>
                    </p>
                    <table className='w-full my-3'>
                        <tbody>
                        <tr className='*:py-1'>
                            <td className='text-[#131313B3]'>Number of Pages:</td>
                            <td className='font-semibold'>{totalPages}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr className='*:py-1'>
                            <td className='text-[#131313B3]'>Publisher:</td>
                            <td className='font-semibold'>{publisher}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr className='*:py-1'>
                            <td className='text-[#131313B3]'>Year of Publishing:</td>
                            <td className='font-semibold'>{yearOfPublishing}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr className='*:py-1'>
                            <td className='text-[#131313B3]'>Rating:</td>
                            <td className='font-semibold'>{rating}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-4 mt-2'>
                        <button onClick={handleAddToReadBook} className='btn bg-white border-2'>Read</button>
                        <button onClick={handleAddToWishlist}
                                className='btn bg-[#50B1C9] text-white hover:text-black'>Wishlist
                        </button>
                    </div>
                </div>
                <ToastContainer
                    autoClose={2000}
                    theme="colored"
                />
            </div>
        </>
    );
};

export default BookDetails;
