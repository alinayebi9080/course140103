import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router'

import { Login, Dashboard, CreateUser, UserList, CreateProduct } from "../pages"
import MainLayout from './MainLaout';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="user/create" element={<CreateUser />} />
                    <Route path="user/list" element={<UserList />} />
                    <Route path="product/create" element={<CreateProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;