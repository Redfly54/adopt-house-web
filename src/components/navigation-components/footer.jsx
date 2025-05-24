import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin  } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();
  const authFooter = location.pathname === '/login' || location.pathname === '/register';

  if (!authFooter) return (
    <footer className="bg-white text-black py-16 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div>
          <div className="flex items-center mb-6">
            <img src={logo} alt="Logo" className="h-16 w-16 mr-2" />
            <span className="text-xl font-bold">Adopt House</span>
          </div>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="X">
             <FaXTwitter className="text-[32px]"/>
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-[32px]"/>
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-[32px]"/>
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-[32px]"/>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-1">
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><a href="#">UI design</a></li>
              <li><a href="#">UX design</a></li>
              <li><a href="#">Wireframing</a></li>
              <li><a href="#">Diagramming</a></li>
              <li><a href="#">Brainstorming</a></li>
              <li><a href="#">Online whiteboard</a></li>
              <li><a href="#">Team collaboration</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About Adoption</h3>
            <ul className="space-y-1">
              <li><a href="#">Adoption Pet</a></li>
              <li><a href="#">Other Types Of Pet</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Term &amp; Policy</h3>
            <ul className="space-y-1">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <footer className="bg-white text-(--black)">
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