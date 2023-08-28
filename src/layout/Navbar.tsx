import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../components/Button';

const Navbar: FC = () => {
    return (
        <nav className='bg-transparent'>
            <div className=' flex z-20 gap-10 flex-row-reverse items-baseline mb-52'>

           
            <NavLink to={`/login`} >
                <Button className={`gap-4 items-center text-lg`}>
                    <p>ورود به حساب کاربری</p>
                    <img src='/assets/icons/user.svg' alt='user' />
                </Button>
            </NavLink>
            <NavLink to={`/`} className={({isActive})=> isActive ? `text-purple text-xl` : ` text-white text-xl` } >صفحه اصلی</NavLink>
            <NavLink to={`/games`} className={({isActive})=> isActive ? `text-purple text-xl` : ` text-white text-xl` } >لیست بازی ها</NavLink>
            <NavLink to={`/instruction`} className={({isActive})=> isActive ? `text-purple text-xl` : ` text-white text-xl` } >آموزش ها</NavLink>
            <NavLink to={`/download`} className={({isActive})=> isActive ? `text-purple text-xl` : ` text-white text-xl` } >دانلود</NavLink>
 </div>
            <Outlet />
        </nav>
    )
}

export default Navbar;