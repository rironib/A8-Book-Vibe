import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BarChart from "./Components/BarChart/BarChart.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import BookLists from "./Components/BookLists/BookLists.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import BookDetails from "./Components/Main/BookDetails.jsx";

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
                path: '/chart',
                element: <BarChart/>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
