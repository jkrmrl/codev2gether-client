import React from 'react';
import logo from "../assets/codev2gether.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = () => {
        if (location.pathname === '/login') {
            navigate('/register');
        } else if (location.pathname === '/register') {
            navigate('/login');
        } else {
            navigate('/login');
        }
    }

    return (
        <header className='flex justify-between items-center p-5 bg-gray-100 shadow-md'>
            <img src={logo} alt="logo" className='w-24'/>
            <button className='bg-blue-600 hover:bg-blue-500 text-white' onClick={handleButtonClick}>{location.pathname === '/login' ? 'Register' : 'Login'}</button>
        </header>
    )
}

export default Header;