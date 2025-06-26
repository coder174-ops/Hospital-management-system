import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-xl font-semibold">Prescripto</h2>
          </div>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Center Portion */}
        <div>
          <p className="text-lg font-semibold mb-2">COMPANY</p>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
            <li className="hover:text-blue-600 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-lg font-semibold mb-2">GET IN TOUCH</p>
          <ul className="space-y-2 text-sm">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Prescripto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
