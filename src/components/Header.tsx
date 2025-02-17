import React from 'react';
import logo from "../assets/codev2gether.png";

const Header: React.FC = () => {
    return (
        <header className='flex justify-between items-center p-5 bg-gray-100 shadow-md'>
            <img src={logo} alt="logo" className='w-24'/>
            <button className='bg-blue-500 shadow-blue-500/50 hover:shadow-md text-white'>Login</button>
        </header>
    )
}

export default Header;