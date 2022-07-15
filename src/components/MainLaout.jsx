import { Outlet, Navigate } from 'react-router';
import Header from './common/Header';
import Navigation from './common/Navigation';
import { useContext } from 'react';
import { MainContext } from './../provider/MainProvider';

const MainLayout = () => {


    const { token } = useContext(MainContext)
    let payload
    if (token) payload = JSON.parse(atob(token?.split(".")[1]))

    if (!token || (token && payload.exp < new Date().getTime())) {
        return <Navigate to="/login" replace={true} />
    }


    return (
        <div className='flex'>
            <Navigation />
            <div className='w-full'>
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;