import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router'
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayout from "./MainLaout";
import CreateUser from "../pages/CreateUser";
import UserList from "../pages/UserList";
const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainLayout />}>
                    <Route element={<Dashboard />} />
                    <Route path="user/create" element={<CreateUser />} />
                    <Route path="user/list" element={<UserList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;