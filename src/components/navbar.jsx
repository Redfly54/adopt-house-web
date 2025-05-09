import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-(--navy)  text-(--white)">
      <ul className="flex justify-between items-center p-(--header-height) lg:flex-row">
        {/* Left Section */}
        <div className="flex items-center">
          <Link to="/" className="hover:underline">
            <span className='text-2xl font-extrabold'>
              <img src={logo} alt="Logo" className="h-24 w-24 inline-block mr-2" />
              Adopt House
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <li>
            <Link
              to="/register"
              className={`text-2xl underline-offset-10 ${location.pathname === '/register' ? 'underline' : ''}`}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`text-2xl underline-offset-10 ${location.pathname === '/login' ? 'underline' : ''}`}>
              Sign In
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
