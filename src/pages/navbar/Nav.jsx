import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import { NavButton } from "./NavButton";
import { Separator } from "@/components/ui/separator"


export const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Events", link: "/events" },
    // { name: "Team", link: "/team" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-100">
      <div className="md:flex bg-white md:px-10 md:py-3 items-center justify-between md:p-0 p-4">
       
        <div>
          <img src={logo} alt="logo" className="md:w-[40%] w-[50%]" />
        </div>

        
        <div
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden "
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <i className="fa-solid fa-xmark text-black"></i> // Close
          ) : (
            <i className="fa-solid fa-bars text-black"></i> // open
          )}
        </div>

        {/* Navigation Menu */}
        <ul
          className={`md:flex space-x-6 md:items-center absolute md:static 
            bg-white w-full left-0 px-10 pb-10 md:pb-0 md:w-auto transition-all duration-500 
            ease-in ${open ? "top-20 opacity-100" : "hidden"} md:opacity-100 z-100 `}
        >
            <Separator  className="md:hidden" />
          {Links.map((link, index) => (
            <li
              key={index}
              className="text-gray-700 font-semibold hover:text-gray-900 text-2xl md:my-0 my-7 w-full "
            >
              <a href={link.link} className="w-full block whitespace-nowrap">{link.name}</a>
            </li>
          ))}
          <NavButton />
        </ul>
      </div>
    </div>
  );
};
