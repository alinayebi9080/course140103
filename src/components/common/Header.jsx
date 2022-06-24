
import { HiOutlineMenu } from 'react-icons/hi'


const Header = () => {
    return (
        <header className="flex justify-between w-full p-2 items-center">
            <div className='flex items-center'>
                <HiOutlineMenu size={30} />
                <h2 className="text-xl font-bold px-4">پنل ادمین دیجی کالا</h2>
            </div>
            <button className="font-light">خروج از پنل کاربری</button>
        </header>
    );
}

export default Header;