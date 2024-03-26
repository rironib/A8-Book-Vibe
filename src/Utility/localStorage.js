import {toast} from "react-toastify";

const getReadBookList = () => {
    const storedReadBook = localStorage.getItem('read-list');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveToReadBook = (id) => {
    const storedReadBooks = getReadBookList();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadBooks));
        toast.success('Successfully added to Read List!');
        return;
    } else {
        toast.error('Already added to Read List!');
        return;
    }
}

const getWishlistBooks = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveToWishlist = (id) => {
    const storedReadBooks = getReadBookList();
    const existInRead = storedReadBooks.find(bookId => bookId === id);
    const storedWishlist = getWishlistBooks();
    const existInWishlist = storedWishlist.find(bookId => bookId === id);
    if(existInRead){
        toast.error('Already added to Read List!');
        return;
    } else if (!existInWishlist) {
        storedReadBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedReadBooks));
        toast.success('Successfully added to Wishlist!');
        return;
    } else {
        toast.error('Already added to Wishlist!');
        return;
    }
}

export {getReadBookList, saveToReadBook, getWishlistBooks, saveToWishlist}