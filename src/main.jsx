import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Book from "./Components/Main/Book.jsx";
import BarChart from "./Components/BarChart/BarChart.jsx";
import Main from "./Components/Main/Main.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        loader: () => fetch('/api.json'),
        children: [
            {
                path: '/home',
                element: <Main/>
            },
            {
                path: '/book/:bookId',
                loader: ({params}) => fetch(`'/api.json/${params.bookId}`),
                // loader: ({params}) => console.log(params.userId),
                element: <Book/>
            },
            {
                path: '/chart',
                element: <BarChart/>
            },
            {
                path: '/books',
                element: <App/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
