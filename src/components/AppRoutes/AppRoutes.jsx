import React from 'react'
import { Routes, Route } from 'react-router-dom';


// import Pages
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Cart from '../../pages/Cart/Cart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}

export default AppRoutes