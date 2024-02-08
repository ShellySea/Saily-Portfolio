import React, { useState } from "react";
import SJ from "../assets/SJLogo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-white">
      <div>
        <img src={SJ} alt="Logo" style={{ width: "80px", height: "60px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={toggleNav}>
        {!openNav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}

      {openNav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center">
          <ul>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Contact</li>
          </ul>
        </div>
      )}
      {/* Social Media Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-900  ml-[-100px] hover:ml-[2px] duration-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/saily-jadhav-083a62101/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/ShellySea"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full" href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full" href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
