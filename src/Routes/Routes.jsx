import {createBrowserRouter} from "react-router-dom";
import Root from "../Components/Root.jsx";
import ErrorPage from "../Components/ErrorPage/ErrorPage.jsx";
import Home from "../Components/Home.jsx";
import BookLists from "../Components/BookLists/BookLists.jsx";
import BookDetails from "../Components/Main/BookDetails.jsx";
import Statistics from "../Components/Statistics/Statistics.jsx";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                loader: () => fetch('/api.json'),
                element: <Home/>
            },
            {
                path: '/booklist',
                loader: () => fetch('/api.json'),
                element: <BookLists/>
            },
            {
                path: '/book/:bookId',
                loader: () => fetch('/api.json'),
                element: <BookDetails/>
            },
            {
                path: '/statistics',
                loader: () => fetch('/api.json'),
                element: <Statistics/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    }
])

export default router