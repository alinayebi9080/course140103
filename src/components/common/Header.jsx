
import { useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi'
import { MainContext } from './../../provider/MainProvider';
import { useNavigate } from 'react-router';


const Header = () => {

    const { setToken } = useContext(MainContext)

    const navigate = useNavigate()

    const handleLogin = () => {
        setToken(undefined)
        localStorage.clear()
        navigate("/login", { replace: true })
    }

    return (
        <header className="flex justify-between w-full p-2 items-center">
            <div className='flex items-center'>
                <HiOutlineMenu size={30} />
                <h2 className="text-xl font-bold px-4">پنل ادمین دیجی کالا</h2>
            </div>
            <button className="font-light" onClick={handleLogin}>خروج از پنل کاربری</button>
        </header>
    );
}

export default Header;