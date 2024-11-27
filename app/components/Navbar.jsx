"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" text-white absolute w-screen">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold logo-bg w-[372px] h-[140px] flex items-center justify-center">
          <Link href="#">
            <Image src="/images/logo.svg" width={196} height={48} alt="" className="md:ml-7" />
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">HOW TO BUY</a>
          <a href="#" className="hover:text-gray-300">Whitepaper</a>
          <a href="#" className="hover:text-gray-300">Audit</a>
          <a href="#" className="hover:text-gray-300">Visit Casino</a>
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="px-10 py-4   banner-btn-right md:w-[320px] md:h-[100px] ">
            CONNECT WALLET
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            HOW TO BUY
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Whitepaper
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Audit
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Visit Casino
          </a>


          <button className="block w-full px-4 py-2 mt-2 bg-blue-600 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
