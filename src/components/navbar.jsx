import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-(--navy)  text-(--white)">
      <div className="flex justify-between items-center p-[2rem] px-5 md:px 16 lg:flex-row">
        {/* Left Section */}
        <div className="flex items-center object-cover">
          <Link to="/" className="">
            <span className='text-2xl font-extrabold'>
              <img src={logo} alt="Logo" className="h-24 w-24 inline-block mr-2" />
              Adopt House
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <div>
            <Link
              to="/login"
              className={`nav text-2xl hover:underline underline-offset-11 ${location.pathname === '/login' ? 'underline' : ''}`}>
              Sign In
            </Link>
          </div>
          <div>
            <Link
              to="/register"
              className={`nav text-2xl hover:underline underline-offset-11 ${location.pathname === '/register' ? 'underline' : ''}`}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
