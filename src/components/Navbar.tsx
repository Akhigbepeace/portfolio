import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navbarLinks, socialMedia } from "../data/data";
import Image from "next/image";

const Navbar = () => {
  const Logo = "/assets/logo.png";
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed z-[5] w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] shadow-md shadow-[#040c16]  text-gray-300">
      <div className="bg-[#ccd6f6] rounded-[100%] w-[60px] h-[60px] ">
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
          className="p-[10px_5px_0px_7px]"
        />
      </div>

      <ul className="hidden md:flex">
        {navbarLinks.map((links, index) => (
          <li key={index}>
            <Link to={links.to} smooth={true} duration={500}>
              {links.title}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[-100%] left-0 w-full h-screen overflow-hidden  bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {navbarLinks.map((links, index) => (
          <li key={index} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={links.to}
              smooth={true}
              duration={500}
            >
              {links.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialMedia.map((item, index) => (
            <li
              key={index}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[${item.bg}]`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.name} {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
