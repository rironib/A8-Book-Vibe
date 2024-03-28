import Book from "./Book.jsx";
import {useLoaderData} from "react-router-dom";

const Books = () => {
    const books = useLoaderData();
    // console.log(books)
    return (
        <div>
            <div className='min-h-80 w-full mb-12'>
                <h2 className='mb-4 text-center text-4xl font-playfairDisplay font-bold'>Books</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                    {
                        books.map((book) => <Book key={book.bookId} book={book}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;
