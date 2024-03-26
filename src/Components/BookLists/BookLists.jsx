import ListedBook from "./ListedBook.jsx";
import {useLoaderData} from "react-router-dom";

const BookLists = () => {
    const books = useLoaderData();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div className='bg-[#1313130D] p-8 font-bold text-3xl text-center mb-8 rounded-2xl'>Books</div>
            <div className='text-center mb-6'>
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn m-1">Sort By</div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Published Year</a></li>
                        <li><a>Number of Pages</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input onChange={handleChange} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked/>
                <div role="tabpanel" className="tab-content border-t-base-300 py-6">
                    {
                        books.map((book) => <ListedBook key={book.bookId} book={book}/>)
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"/>
                <div role="tabpanel" className="tab-content border-t-base-300 py-6">
                    {
                        books.map((book) => <ListedBook key={book.bookId} book={book}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookLists;
