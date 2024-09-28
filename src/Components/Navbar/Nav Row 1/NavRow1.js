import React from "react";

// Import ICON 
import { IoSearchOutline } from "react-icons/io5";

import Logo from "../../../Assets/Logos Img/logo.png";
import UKflag from "../../../Assets/Logos Img/United Kingdom.png";

import NavButton from "../Nav Button/NavButton";

import "../Style/NavBar.css";
import "../Style/NavBarResponsive.css";
import { Link } from "react-router-dom";

function NavRow1() {
  return (
    <div id="Row-1" className="sm:container mx-auto grid grid-cols-12 gap-x-6">
      <div className="logo col-span-2 flex items-center">
        {/* LINK  */}
        <Link to="/" className="inline-block">
          <img
            src={Logo}
            className="block object-contain"
            alt="Web Logo"
          />
        </Link>
      </div>

      <div className="searchBox col-span-8 flex justify-between  ml-0 xl:ml-6">

        <div className="searchBar bg-[#F3F4F7] flex rounded-md border px-2 min-w-[60%]">

          <label htmlFor="searchBtn" className="flex items-center mr-1.5">
          <IoSearchOutline className="react-i"/>
          </label>

          <input
            type="text"
            name=""
            id="searchBtn"
            className="px-2.5 bg-[#F3F4F7]"
            placeholder="Search products... "
          />
        </div>

        <div className="selectBtn flex items-stretch gap-x-3 min-w-[30%]">

          <div className="select-Lang flex items-center rounded-md relative border min-w-[145px]">

            <Link to="/" className="flex items-center justify-around w-full">

              <img
                src={UKflag}
                alt="Uk flag"
                className="block w-[40px] h-[40px] object-cover rounded-md"
              />

              <p className="font-bold text-[1rem]">English</p>

              <span className="down-arrow transition-All opacity-60">
              <i className="fa-solid fa-angle-down text-[1.1rem]"></i>
              </span>

            </Link>

            <ul className="lang-list text-center w-full  absolute top-[100%] left-0 shadow-sm bg-white">

              <li className="py-2 text-[1.1rem] hover:opacity-70 transition cursor-pointer">
                Arabic
              </li>
              <li className="py-2 text-[1.1rem] hover:opacity-70 transition cursor-pointer">
                Spanish
              </li>
              <li className="py-2 text-[1.1rem] hover:opacity-70 transition cursor-pointer">
                Mandarin
              </li>
            </ul>

          </div>

          <div className="select-currency flex items-center rounded-md border">
            <select
              name="currency"
              id="currency"
              className="block h-full rounded-md text-[1.3rem] p-1.5"
            >
              <option defaultValue value="USD">
                USD
              </option>
              <option value="YEAN">YEAN</option>
              <option value="EURO">EURO</option>
            </select>
          </div>
        </div>

      </div>

      <div className="col-span-2 flex items-stretch">
        <NavButton/>
      </div>
    </div>
  );
}

export default NavRow1;
