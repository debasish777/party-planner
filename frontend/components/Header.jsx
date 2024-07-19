import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/" className='logo'>Party app</Link>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </nav>
        </header>
    );
};

export default Header;