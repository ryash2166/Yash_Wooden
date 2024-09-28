import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../Nav Links/NavLinks";
import Categories from "../Categories List/Categories";

// IONS
import { SlCallEnd } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

import '../Style/NavBar.css'
import '../Style/NavBarResponsive.css'

function NavRow2() {

  return (
    <div
      id="Row-2"
      className="sm:container mx-auto grid grid-cols-12 items-stretch"
    >

    <div className="col-span-2">
      <Categories/>
    </div>
 
    <div className="col-span-7 flex items-stretch py-1 ml-0 xl:ml-6">
      <NavLinks />
    </div>

    <div className="col-span-3 flex items-center ">
    <ul className="content-links flex items-center justify-around w-full">
        <li className="flex items-center ">
         <SlCallEnd className="text-xl mr-2.5 rotate-180" />
          <a
            href="tel:980.029.666.99"
            className="block text-[1.1rem] uppercase font-medium"
          >
            980.029.666.99
          </a>
        </li>
        <li className="flex items-center">
        <IoLocationOutline className="text-xl mr-2.5" />
          <Link to="/contact" className="block text-[1.1rem] font-medium">
            Find Store
          </Link>
        </li>
    </ul>
    </div>
    </div>
  );
}

export default NavRow2;
