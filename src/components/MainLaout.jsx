import { Outlet } from 'react-router';
import Header from './common/Header';
import Navigation from './common/Navigation';

const MainLayout = () => {
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