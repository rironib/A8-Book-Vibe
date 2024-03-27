import ListedBook from "./ListedBook.jsx";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getReadBookList, getWishlistBooks} from "../../Utility/localStorage.js";

const BookLists = () => {
    const books = useLoaderData();

    const [dispalyReadLists, setDisplayReadLists] = useState([]);
    const [displayWishlists, setDisplayWishlist] = useState([])

    useEffect(() => {
        const storedReadBookList = getReadBookList();
        const storedWishlists = getWishlistBooks();
        if(books.length > 0){
            const bookReaded = books.filter(book => storedReadBookList.includes(book.bookId));
            const bookWishlist = books.filter(book => storedWishlists.includes(book.bookId));
            setDisplayReadLists(bookReaded);
            setDisplayWishlist(bookWishlist);
        }
    }, [books]);

    console.log(dispalyReadLists)

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div className='bg-[#1313130D] p-8 font-bold text-3xl text-center mb-8 rounded-2xl'>Books</div>

            <div className='text-center mb-6'>
                <select className="bg-green-500 focus:bg-white select select-bordered w-42 max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option>Rating</option>
                    <option>Published Year</option>
                    <option>Number of Pages</option>
                </select>

                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn m-1">Sort By</div>
                    <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Published Year</a></li>
                        <li><a>Number of Pages</a></li>
                    </ul>
                </div>
            </div>

            <form className="max-w-sm mx-auto">
                <select id="countries"
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </form>

            <div role="tablist" className="tabs tabs-lifted">
                <input onChange={handleChange} type="radio" name="my_tabs_2" role="tab" className="tab"
                       aria-label="Read Books" checked/>
                <div role="tabpanel" className="tab-content border-t-base-300 py-6">
                    {
                        dispalyReadLists.map((book) => <ListedBook key={book.bookId} book={book}/>)
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"/>
                <div role="tabpanel" className="tab-content border-t-base-300 py-6">
                    {
                        displayWishlists.map((book) => <ListedBook key={book.bookId} book={book}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookLists;
