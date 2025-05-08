import React from 'react';
import logo from './assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="border-t-2 mx-10"></div>
      <div className="flex justify-between items-center px-10 py-20 ">
        <div className="flex items-center">
            <span className="text-2xl font-bold flex items-center">
              <img src={logo} alt="Logo" className="h-24 w-24 inline-block mr-2" />
              Adopt House
            </span>
        </div>
        <div>
          <p className="text-sm">@2025 adopthouse.com All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;