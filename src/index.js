import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from '../src/pages/Blog'
import Shop from '../src/pages/Shop'
import Fintech from "./pages/Fintech";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Fintech" element={<Fintech />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//     },
//     {
//         path: "Blog",
//         element: <Blog/>,
//     },
//     {
//         path: "Shop",
//         element: <Shop/>,
//     },
//     {
//         path: "Fintech",
//         element: <Fintech/>,
//     },
//
//
//
// ]);
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <RouterProvider router={router}/>
//     </React.StrictMode>
// );


