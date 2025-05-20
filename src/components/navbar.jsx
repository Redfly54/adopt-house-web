import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const token = localStorage.getItem('auth_token');
  const location = useLocation();

  const [user, setUser] = useState(null);
  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (token) {
      fetch(`${apiURL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(res => res.ok ? res.json() : null)
        .then(data => setUser(data))
        .catch(() => setUser(null));
    }
  }, [token]);

  return (
    <nav className="bg-(--navy)  text-(--white)">
      <ul className="flex justify-between items-center p-(--header-height) lg:flex-row">
        <div className="flex items-center">
          <Link to="/" className="hover:underline">

            <span className='text-2xl font-extrabold'>
              <img src={logo} alt="Logo" className="h-24 w-24 inline-block mr-2" />
              Adopt House
            </span>
          </Link>
        </div>
        {token ? (
          <div className="flex space-x-4">
            <li>
              <Link
                to="/"
                className={`text-2xl underline-offset-10 ${location.pathname === '/' ? 'underline' : ''}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/findpet"
                className={`text-2xl underline-offset-10 ${location.pathname === '/findpet' ? 'underline' : ''}`}>
                Temukan Hewan
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`flex items-center text-2xl underline-offset-10 ${location.pathname === '/profile' ? 'underline' : ''}`}>
                {user && user.picture && (
                  <img
                    src={`${apiURL}/${user.picture}`}
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2 border object-cover"
                  />
                )}
                Profile
              </Link>
            </li>
          </div>
        ) : (
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
        )}
      </ul>
    </nav>

  );
};

export default Navbar;
