import React from 'react';
import logo from "../assets/codev2gether.png";
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions'; 

interface HeaderProps {
    logoutUser: () => void; 
    isAuthenticated: boolean; 
}

const Header: React.FC<HeaderProps> = ({ logoutUser, isAuthenticated }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = () => {
        if (isAuthenticated) {
            logoutUser();
            navigate('/login');
        } else {
            if (location.pathname === '/login') {
                navigate('/register');
            } else if (location.pathname === '/register') {
                navigate('/login');
            } else {
                navigate('/login');
            }
        }
    };

    return (
        <header className='flex justify-between items-center p-5 bg-gray-100 shadow-md'>
            <img src={logo} alt="logo" className='w-24'/>
            <button
                className='bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded'
                onClick={handleButtonClick}
            >
                {isAuthenticated ? 'Logout' : location.pathname === '/login' ? 'Register' : 'Login'}
            </button>
        </header>
    );
};

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);