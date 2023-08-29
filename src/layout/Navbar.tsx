import React, { MutableRefObject } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';


const Navbar = React.forwardRef<HTMLDivElement, any>((_props, ref) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = async () => {
        if ((ref != null && typeof ref !== 'function')) {
            if (location.pathname === "/") {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            } else {
                await navigate("/");
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className='bg-transparent relative z-10'>
            <div className=' flex z-20 flex-row-reverse justify-between items-center mb-52'>
                <div className='flex gap-10 flex-row-reverse items-center'>
                                 <NavLink to={`/signin`} >
                    <Button className={`gap-4 items-center text-lg`}>
                        <p>ورود به حساب کاربری</p>
                        <img src='/assets/icons/user.svg' alt='user' />
                    </Button>
                </NavLink>
                <NavLink to={`/`} className={({ isActive }) => isActive ? `text-purple text-xl` : ` text-white text-xl`} >صفحه اصلی</NavLink>
                <span onClick={handleClick} className={`text-white text-xl cursor-pointer`} >لیست بازی ها</span>
                <span className={` text-white text-xl cursor-pointer`} >آموزش ها</span>
                <NavLink to={`/download`} className={({ isActive }) => isActive ? `text-purple text-xl` : ` text-white text-xl`} >دانلود</NavLink>
                </div>
   
                <div className='flex'>
                    <img src='/assets/icons/logo-mini.svg' />
                    <p className='text-2xl ml-4'>Electro Gaming Cloud</p>
                </div>
            </div>
            <Outlet />
        </nav>
    )

})


export default Navbar;