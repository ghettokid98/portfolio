import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const [open, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link" },
  ];

  return (
    <header className="fixed bg-zinc-900 shadow-2xl top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900">
      <div className="max-w-screen-2xl w-full mx-auto px-8 items-center md:px-6">
        <div className="flex justify-between items-center relative w-full">
          <div>
            <a
              href="#"
              className="text-white text-2xl font-bold tracking-widest"
            >
              Tech<span className="text-sky-400">Version</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-10 ring-2 ring-bg-white rounded-full p-2">
            {navItems.map(({ label, link, className }, key) => (
              <a
                href={link}
                className={`${className} block  hover:text-sky-400`}
                key={key}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu (Smooth Transition) */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-60 backdrop-blur-lg
    flex flex-col items-center z-50
    transition-all
    ${
      open
        ? "translate-x-0 opacity-100 duration-500 ease-in-out"
        : "translate-x-full opacity-0 duration-0"
    }
  `}
          >
            <div className="flex flex-col w-full items-center text-white text-2xl gap-10 py-10">
              {navItems.map(({ label, link, className }, key) => (
                <a
                  href={link}
                  className={`${className} block`}
                  key={key}
                  onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex flex-row gap-5 items-center">
            <CiFacebook size={30} className="text-sky-400" />
            <FaWhatsapp size={30} className="text-sky-400" />
            <FaInstagram size={30} className="text-sky-400" />
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden  z-50">
            {open ? (
              <IoIosClose
                onClick={() => setIsOpen(false)}
                size={30}
                className="text-white cursor-pointer"
              />
            ) : (
              <FaBarsStaggered
                onClick={() => setIsOpen(true)}
                size={20}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
