import React from 'react'


//  
import { BsCart3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

import './NavButton.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavButton({className}) {

  const neviGetCart = useNavigate();
  const neviGetSignIn = useNavigate();
  const neviGetWishlist = useNavigate();

  const Cart_count = useSelector((state)=> state.cartReducer.cartList );
  const Wish_count = useSelector((state)=> state.wishReducer.wishList );
  

  const Classes = "navButton w-full flex items-center justify-around " + className;
  return (
    <ul className={Classes}>
        <li className='mx-1.5 lg:mx-0'>
          <button type="button" onClick={()=>neviGetCart("/cart")} id="cartBtn">
            <BsCart3 className='react-i'/>
            <span id="cartCount" className="flex items-center justify-center ">
              {Cart_count.length}
            </span>
          </button>
        </li>

        <li className='mx-1.5 lg:mx-0'>
          <button type="button" onClick={()=> {neviGetSignIn("/sign-in")}}>
          <RiUserLine className='react-i'  />
          </button>
        </li>

        <li className='hidden md:block mx-1.5 lg:mx-0'>
          <button type="button" id="likeBtn" onClick={()=> {neviGetWishlist("/wishlist")}}>
            <CiHeart className='react-i'/>
            <span id="likeCount" className="flex items-center justify-center ">
            {Wish_count.length}
            </span>
          </button>
        </li>
      </ul>
      
  )
}

export default NavButton
