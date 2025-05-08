import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-sky-700 p-10 text-white">
      <ul className="flex justify-between items-center">
        <div className="flex items-center">
          <li>
            <Link to="/" className="hover:underline">
              <span className='text-2xl font-bold'>
                <img src={logo} alt="Logo" className="h-24 w-24 inline-block mr-2" />
                Adopt House
              </span>
            </Link>
          </li>
        </div>

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