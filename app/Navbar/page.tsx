"use client";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white relative">
      <div className="text-xl lg:text-2xl font-bold">Dashboard</div>
      <div className="flex items-center">
        <div className="flex relative gap-3">
          <button className="relative flex z-10 w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none focus:ring">
            <Image
              className="object-cover w-full h-full"
              src="/assets/notification.svg"
              alt="Notification"
              width={48}
              height={48}
            />
          </button>
          <button className="relative flex z-10 w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none focus:ring">
            <Image
              className="object-cover w-full h-full"
              src="/assets/jd.svg"
              alt="Profile"
              width={48}
              height={48}
            />
          </button>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="ml-3 flex items-center text-[#08138C] text-base lg:text-lg font-medium focus:outline-none"
          >
            John Doe
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
