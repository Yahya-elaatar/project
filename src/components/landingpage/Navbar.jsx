import { useState } from "react";
import {  logo } from "../../assets";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="findme" className="w-[300px] h-[70px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
         <li
         key={nav.id}
         className={`font-poppins 
         font-normal cursor-pointer text-
         [16px] ${
           active === nav.title ? "text-white" : "text-dimWhite"
         } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
         onClick={() => setActive(nav.title)}
       >
         {nav.id === "Se-connecter" ? (
           <Link to="/auth/Signin">{nav.title}</Link>
         ) : (
           <a href={`#${nav.id}`}>{nav.title}</a>
         )}
       </li>
       
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
