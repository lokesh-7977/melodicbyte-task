"use client";
import Image from "next/image";
import { useState } from "react";
import Chartplaceholder from "../Charts/page";

const AnalysisChart = ({ title }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="p-4 border-[1px] rounded-[23px] border-[#D6D9FF] w-full max-w-lg mx-auto">
      <div className="flex gap-4 mb-2 w-full justify-center items-center">
        <h3 className="text-lg text-[#08138C] font-Montserrat font-bold text-[28px]">
          {title}
        </h3>
        <div className="border-[1px] text-center pl-2 p-1 border-[#08138C] rounded-full flex items-center w-[121px] h-[39px]">
          This Month
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex pt-1 items-center text-[#08138C] text-lg font-medium focus:outline-none"
            >
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Previous Month
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Next Month
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[250px]">
        <Chartplaceholder />
      </div>
    </div>
  );
};

export default AnalysisChart;
