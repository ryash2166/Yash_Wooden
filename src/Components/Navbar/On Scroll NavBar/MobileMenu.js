import React from "react";
import "./MobileMenu.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { IoSearchOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";


function MobileMenu({refs}) {

  function CloseMobileMenu ()
  {
    refs.current.className = "mobile-bg-warp"    
  }

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section id="MobileMenu" className="m-Menu bg-black text-white  w-[22rem] z-30">
      <div className="Menu-Close-btn">
        <button onClick={CloseMobileMenu} id="close-menu-btn" className="bg-[#D51243] text-white w-full flex items-center justify-center text-[1.1rem] py-3 font-semibold">
          CLOSE <IoMdClose className="text-[1.4rem] ml-1" />
        </button>
      </div>
      <div className="MobileMenu-head flex flex-col py-5 mx-6">
        <h1 className="text-center text-xl py-2">WHAT ARE YOU LOOKING FOR?</h1>
        <div className="mobile-search h-[50px] flex items-stretch justify-center bg-white text-black rounded-md my-3.5">
          <input
            id="m-search"
            type="search"
            name=""
            className="text-2xl block w-[80%] bg-transparent outline-none"
          />
          <label
            htmlFor="m-search"
            className="flex items-center justify-center cursor-pointer"
          >
            <IoSearchOutline className="text-2xl" />
          </label>
        </div>
        <div className="mobile-button w-full flex flex-wrap sm:flex-nowrap items-stretch justify-center sm:justify-between gap-x-3 ">
          <button className="text-center font-semibold flex items-center justify-center w-[49%] bg-[#D51243] text-white text-xl rounded-md py-3">
            MENU
          </button>
          <button className="text-center font-semibold flex items-center justify-center w-[49%] bg-[#FFF] text-black text-xl rounded-md mt-2 sm:mt-0 py-3">
            CATEGORIES
          </button>
        </div>
      </div>
      <div className="px-6">
      {/* LINK 1 */}
      <Accordion
        open={open === 1}
        icon={
          <span className="flex items-center justify-center outline outline-[1px] h-[30px] w-[30px] "   onClick={() => handleOpen(1)}>
            <AiOutlinePlus className="hover:text-[#D51243] transition-all text-2xl" />
          </span>
        }
      >
        <AccordionHeader className="border-b-[1px]">
          <Link
            to="/"
            className="block w-full  hover:text-[#D51243] transition-all"
          >
            Home
          </Link>
        </AccordionHeader>
        <AccordionBody className="Accord-body pt-0">
          <ul className="m-MenuLink">
            <li>
              <Link to="/">Wooden Home</Link>
            </li>
            <li>
              <Link to="/">Fashion Home</Link>
            </li>
            <li>
              <Link to="/">Furniture Home</Link>
            </li>
            <li>
              <Link to="/">Cosmetics Home</Link>
            </li>
            <li>
              <Link to="/">Food Grocery</Link>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      {/* LINK 2 */}
      <Accordion
        open={open === 2}
        icon={
          <span className="flex items-center justify-center outline outline-[1px] h-[30px] w-[30px] "   onClick={() => handleOpen(2)}>
          <AiOutlinePlus className="hover:text-[#D51243] transition-all text-2xl" />
          </span>
        }
      >
        <AccordionHeader className="border-b-[1px]" >
        <Link
            to="/shop"
            className="block w-full  hover:text-[#D51243] transition-all"
          >
            Shop
          </Link>
        </AccordionHeader>
        <AccordionBody className="Accord-body pt-0">
        <ul className="m-MenuLink">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/shop2">shop 2</Link>
        </li>
        <li>
          <Link to="/shop-details">Shop details</Link>
        </li>
        <li>
          <Link to="/shop-details2/1">Shop details 2</Link>
        </li>
        <li>
          <Link to="/shop-location">Shop Location</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/sign-in">sign in</Link>
        </li>
        <li>
          <Link to="/checkout">checkout</Link>
        </li>
        <li>
          <Link to="/wishlist">whishList</Link>
        </li>
        <li>
          <Link to="/product-track">Product Track</Link>
        </li>
      </ul>
        </AccordionBody>
      </Accordion>

      {/* LINK 3 */}
      <Accordion
        open={open === 3}
        icon={
          <span className="flex items-center justify-center outline outline-[1px] h-[30px] w-[30px] "   onClick={() => handleOpen(3)}>
          <AiOutlinePlus className="hover:text-[#D51243] transition-all text-2xl" />
        </span>
        }
      >
        <AccordionHeader className="border-b-[1px]" >
        <Link
            to="/about"
            className="block w-full  hover:text-[#D51243] transition-all"
          >
            Pages
          </Link>
        </AccordionHeader>
        <AccordionBody className="Accord-body pt-0" >
        <ul className="m-MenuLink">
          <li>
            <Link to="/shop">Shop Filter V1</Link>
          </li>
          <li>
            <Link to="/shop2">Shop Filter V2</Link>
          </li>
          <li>
            <Link to="/shop-details">Shop Sidebar</Link>
          </li>
          <li>
            <Link to="/shop-details2/1">Shop Right Sidebar</Link>
          </li>
          <li>
            <Link to="/shop-location">Shop list View</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/product-track">Product Track</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="*">404 / Error</Link>
          </li>
          <li>
            <Link to="/comingSoon">Coming Soon</Link>
          </li>
        </ul>
        </AccordionBody>
      </Accordion>

      {/* LINK 5 */}
      <h1 className="flex justify-between items-center w-full py-4 font-sans text-xl text-left font-semibold leading-snug border-b-[1px]">
        <Link to="/about" className="block w-full  hover:text-[#D51243] transition-all">
            About
        </Link>
      </h1>

      {/* LINK 6 */}
      <h1 className="flex justify-between items-center w-full py-4 font-sans text-xl text-left font-semibold leading-snug border-b-[1px]">
        <Link to="/contact" className="block w-full  hover:text-[#D51243] transition-all">
            Contact
        </Link>
      </h1>


      <h1 className="flex justify-between items-center w-full py-4 font-sans text-xl text-left font-semibold leading-snug ">
        <Link to="/sign-in" className="flex items-center hover:text-[#D51243] transition-all">
        <FaRegUser className="mr-3.5" /> Login / Register
        </Link>
      </h1>
      <h1 className="flex justify-between items-center w-full py-4 font-sans text-xl text-left font-semibold leading-snug ">
        <Link to="/wishlist" className="flex items-center hover:text-[#D51243] transition-all">
        <FaRegHeart className="mr-3.5" />  Whishlist
        </Link>
      </h1>
      </div>
    </section>
  );
}

export default MobileMenu;
