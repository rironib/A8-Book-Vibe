import {useLoaderData} from "react-router-dom";
import ListedBook from "./ListedBook.jsx";
import { useEffect, useState } from "react";
import { getReadBookList, getWishlistBooks } from "../../Utility/localStorage.js";

const BookLists = () => {
    const books = useLoaderData();

    const [displayedBooks, setDisplayedBooks] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        const storedReadBookList = getReadBookList();
        const storedWishlists = getWishlistBooks();

        if (books.length > 0) {
            const bookReaded = books.filter(book => storedReadBookList.includes(book.bookId));
            const bookWishlist = books.filter(book => storedWishlists.includes(book.bookId));

            if (sortBy === "Rating") {
                bookReaded.sort((a, b) => b.rating - a.rating);
                bookWishlist.sort((a, b) => b.rating - a.rating);
            } else if (sortBy === "Published Year") {
                bookReaded.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                bookWishlist.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            } else if (sortBy === "Number of Pages") {
                bookReaded.sort((a, b) => b.totalPages - a.totalPages);
                bookWishlist.sort((a, b) => b.totalPages - a.totalPages);
            }

            setDisplayedBooks({ read: bookReaded, wishlist: bookWishlist });
        }
    }, [books, sortBy]);

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div className='bg-[#1313130D] p-8 font-bold text-3xl text-center mb-8 rounded-2xl'>Books</div>

            <div className='text-center mb-6'>
                <select
                    className="bg-green-500 focus:bg-white text-white focus:text-black text-lg select select-bordered w-42 max-w-xs"
                    onChange={handleChange}
                    value={sortBy}
                >
                    <option disabled value="">Sort By</option>
                    <option value="Rating">Rating</option>
                    <option value="Published Year">Published Year</option>
                    <option value="Number of Pages">Number of Pages</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg h-16 xl:h-10"
                       aria-label="Read Books" value='read' checked readOnly/>
                <div role="tabpanel" className="tab-content border-t-base-300 py-6">
                    {
                        displayedBooks.read && displayedBooks.read.map(
                            (book) => <ListedBook key={book.bookId} book={book}/>
                        )
                    }
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg h-16 xl:h-10"
                       aria-label="Wishlist Books"/>
                <div role="tabpanel" className="tab-content border-t-base-300 py-6">
                    {
                        displayedBooks.wishlist && displayedBooks.wishlist.map(
                            (book) => <ListedBook key={book.bookId} book={book}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookLists;
