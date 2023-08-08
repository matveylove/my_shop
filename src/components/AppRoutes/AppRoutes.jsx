import React from 'react'
import { Routes, Route } from 'react-router-dom';

// routes
import { ROUTES } from '../../routes/routes';

// import Pages
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Cart from '../../pages/Cart/Cart';
import FullPage from '../../pages/FullPage/FullPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
            <Route path={ROUTES.FULLPAGE} element={<FullPage />} />
        </Routes>

    )
}

export default AppRoutes