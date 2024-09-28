import React  from "react";
import ProductsData from '../../../Data/ProductsData'
import {Link , useParams} from 'react-router-dom'
import PageHeading from "../../../Components/Common Components/PageHeading/PageHeading";


import product_det_1  from "../../../Assets/Icons/product-det-1.png"
import product_det_2  from "../../../Assets/Icons/product-det-2.png"
import product_det_3  from "../../../Assets/Icons/product-det-3.png"
import product_det_4  from "../../../Assets/Icons/product-det-4.png"

import "./ShopDetails.css";

// ICONS
import { FaStar } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";

//redux
import { useDispatch, useSelector } from "react-redux"; 
import {ADD_CART,ADD_WISHLIST} from '../../../redux/actions/action'


// ALERT
import { ToastContainer ,Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { showErrorMessage,showSuccessMessage } from '../../../Components/Common Components/Alerts/Alerts'


// main function
function ShopDetails2() {

  
  // URL ID
  const ID =  useParams();
  const ProductInfo = ProductsData.filter((ProductsData)=>{
    return (ProductsData.id === Number(ID.id))
  })
  
  const {name,price,FirstImg,SecondeImg,id,quantity} = ProductInfo[0]
  
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartList)
  const wishItems = useSelector(state => state.wishReducer.wishList)
  

  // Add To cart DATA 
  const Add_cart = (ProductInfo) => {
    dispatch(ADD_CART(ProductInfo))
    let find = cartItems.findIndex(item => item.id === ProductInfo.id);
    find === -1 ? showSuccessMessage("Your item has been added to the Cart list!","top-right") : showErrorMessage("Item already in Cart List. Please review and checkout promptly.","top-right")
  }
  // Add To wishlist DATA 
  const ADD_wish = (ProductInfo) => {
    dispatch(ADD_WISHLIST(ProductInfo))
    let find =  wishItems.findIndex(item => item.id === ProductInfo.id);
    find === -1 ? showSuccessMessage("Your item has been added to the Wish list!","top-right") : showErrorMessage("Item already in Wish List. Please review and checkout promptly.","top-right")
  }
  

  return (
    <section>
      <PageHeading goBackLink="Home" pageTitle="Shop Details 2" />

      <div className="sm:container mx-auto py-20 ">

      <div id="ShopDetails-2" className={`ShopDetails-wrap grid grid-cols-12 gap-x-5 gap-y-6  ProductInfo-${id}`}>

      <div className="ShopD2-images-warp flex justify-center col-span-12 lg:col-span-4 ">
        <div className="ShopD2-ShowCase w-full flex flex-col gap-y-4">
            <img src={FirstImg} alt=".." className="rounded-lg block object-contain " />
            <img src={SecondeImg} alt=".." className="rounded-lg block object-contain " />

        </div>

      </div>

        <div className="ShopD2-info col-span-12 px-4 md:px-0 md:col-span-8 lg:sticky lg:top-[140px] lg:h-[max-content] lg:col-span-5 ">
          <div className="info-heading-box mb-5">
            <div className="ShopD2-links flex items-center justify-start gap-x-2 mb-2">
              <span className="bg-red-100 text-red-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded">
                Dress
              </span>

              <span className="flex items-center justify-center text-base">
                <a
                  href="/shop-details"
                  className="flex items-center justify-center"
                >
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                </a>
                10 Reviews
              </span>
            </div>

            <h1 className="text-3xl capitalize font-bold flex flex-wrap items-center justify-start gap-x-2 mb-2">
              {name}
              <span className="block mt-2 text-xs text-[#d51243] font-bold px-2.5 py-0.6 rounded border border-gray-500">
                in Stock
              </span>
            </h1>

            <h1 className="ShopD2-price flex items-center justify-start text-5xl font-bold text-[#d51243] uppercase">
              <span className="text-[#CFCFCF] line-through text-2xl pe-1.5 mt-2">
                $9.35
              </span>
              $ {price}
            </h1>

            <p className="text-base capitalize  text-gray-400 mt-6">
              Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23.
              It is a completely modern design and you feel comfortable to put
              on this hijab. Buy it at the best price.
            </p>
          </div>

          <ul className="ShopD2-Buy-Btn flex flex-wrap items-stretch gap-x-3 gap-y-3 mb-4">
            <li className="flex items-stretch justify-center">
              <p className="count-buttons flex justify-center items-stretch border border-[#CFCFCF] gap-x-3 text-2xl p-3.5 rounded-md">
                <button
                  className="flex items-center text-[#CFCFCF]">
                  <LuMinus className="text-xl" />
                </button>
                {quantity}
                <button
                  className="flex items-center text-[#CFCFCF]">
                  <FiPlus className="text-xl" />
                </button>
              </p>
            </li>
            <li className="flex items-stretch justify-center">
              <button
               onClick={()=>Add_cart(ProductInfo[0])} 
               className="text-xl font-semibold text-white flex items-center justify-center bg-[#d51243] gap-x-3 py-3.5 px-6 rounded-md hover:bg-black transition-all">
                <BsCart2 className="" />
                Add to Cart
              </button>
            </li>
            <li className="flex items-stretch justify-center">
              <button onClick={()=>ADD_wish(ProductInfo[0])} className="flex items-center justify-center py-3.5 px-4 text-gray-400  border border-[#CFCFCF] rounded-md hover:bg-[#d51243] hover:text-[#CFCFCF] transition-all">
                <CiHeart className="text-2xl" />
              </button>
            </li>
          </ul>

          <ul className="ProductCard-Colors mb-4">
            <li className="flex items-center">
              <Link
                to="/shopDetails"
                className="flex items-center mr-1 border border-transparent text-[#99C4FF] rounded-full"
              >
                <span className="w-[14px] h-[14px] bg-[#99C4FF] block rounded-full transition-all mx-auto"></span>
              </Link>
              <Link
                to="/shopDetails"
                className="flex items-center mr-1 border border-transparent text-[#D51243] rounded-full"
              >
                <span className="w-[14px] h-[14px] bg-[#D51243] block rounded-full transition-all mx-auto"></span>
              </Link>
              <Link
                to="/shopDetails"
                className="flex items-center mr-1 border border-transparent text-[#FF7373] rounded-full"
              >
                <span className="w-[14px] h-[14px] bg-[#FF7373] block rounded-full transition-all mx-auto"></span>
              </Link>
              <Link
                to="/shopDetails"
                className="flex items-center mr-1 border border-transparent text-[#BE9AFF] rounded-full"
              >
                <span className="w-[14px] h-[14px] bg-[#BE9AFF] block rounded-full transition-all mx-auto"></span>
              </Link>
            </li>
          </ul>

          <ul className="ShopD-Details flex flex-col items-stretch justify-start gap-y-3">
            <li>
              <p className="text-start text-base text-[#CFCFCF]">
                <span className="font-bold text-black"> SKU </span>: BO1D0MX8SJ
              </p>
            </li>
            <li>
              <p className="text-start text-base text-[#CFCFCF]">
                <span className="font-bold text-black"> Categories </span>:{" "}
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  T-Shirt
                </a>
                ,{" "}
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  Tops
                </a>
                ,{" "}
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  Womens
                </a>
              </p>
            </li>
            <li>
              <p className="text-start text-base text-[#CFCFCF]">
                <span className="font-bold text-black"> Tags </span>:{" "}
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  fashion
                </a>
                ,{" "}
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  t-shirt
                </a>
                ,{" "}
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  women
                </a>
              </p>
            </li>
            <li className="share-link">
              <p className="text-start text-base text-[#CFCFCF]">
                <span className="font-bold text-black pe-1"> Share </span>:
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  <AiOutlineTwitter />
                </a>
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  <FaBehance />
                </a>
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  <BsYoutube />
                </a>
                <a
                  href="/shop-details"
                  className="inline-flex justify-center items-center px-1 transition-all hover:text-[#d51243]
      "
                >
                  <RxLinkedinLogo />
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="ShopD-content col-span-12  md:col-span-4 lg:col-span-3 ">
            <ul className="conditionalList flex flex-col justify-stretch gap-y-4 max-w-[18rem] ">
              <li className="border border-[#CFCFCF] text-[#CFCFCF] rounded-md flex items-center justify-center gap-x-2 py-2.5">
                <span className="flex items-stretch justify-center">
                  <img src={product_det_1} alt="..." className="block object-contain " />
                </span>
                <p className="text-base text-gray-900 ">
                  Free Shipping apply to all <br />
                  orders over $100
                </p>
              </li>

              <li className="border border-[#CFCFCF] text-[#CFCFCF] rounded-md flex items-center justify-center gap-x-2 py-2.5">
                <span className="flex items-stretch justify-center">
                  <img src={product_det_2} alt="..." className="block object-contain " />
                </span>
                <p className="text-base text-gray-900 ">                  
                  Guranteed 100% Organic <br />
                  from natural farmas
                </p>
              </li>

              <li className="border border-[#CFCFCF] text-[#CFCFCF] rounded-md flex items-center justify-center gap-x-2 py-2.5">
                <span className="flex items-stretch justify-center">
                  <img src={product_det_3} alt="..." className="block object-contain " />
                </span>
                <p className="text-base text-gray-900 ">                  
                  1 Day Returns if you change <br /> 
                  your mind
                </p>
              </li>

              <li className="border border-[#CFCFCF] text-[#CFCFCF] rounded-md flex items-center justify-center gap-x-2 py-2.5">
                <span className="flex items-stretch justify-center">
                  <img src={product_det_4} alt="..." className="block object-contain " />
                </span>
                <p className="text-base text-gray-900 ">                              
                Covid-19 Info: We keep <br />
                delivering.
                </p>
              </li>


            </ul>
          </div>

        </div>
        {/* Alert  */}
        <ToastContainer transition={Flip} />
      </div>
    </section>
  );
}

export default ShopDetails2
