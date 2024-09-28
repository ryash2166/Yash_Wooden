import React from "react";
import PageHeading from "../../../Components/Common Components/PageHeading/PageHeading";
// Data 
import ProductsData from "../../../Data/ProductsData"
// Data Card
import ProductsCard from "../../../Components/Common Components/ProductsCard/ProductsCard";

import './ShopPage.css'
//ICONS
import { IoListOutline } from "react-icons/io5";
import { BsGrid3X3 } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

function ShopPage1() {
  return (
    <section className="">
      <PageHeading goBackLink="Home" pageTitle="Shop" />
      <div className="ShopP1 sm:container mx-auto">
        <div className="ShopP1-Item-Bar flex flex-wrap gap-y-4 justify-between items-stretch mt-20 ">

          <h1 className="text-xl flex items-center justify-center gap-x-2 ">
            10
            <p className="text-slate-300  capitalize">Item On List</p>
          </h1>

          <ul className="Shop-item-btn-box flex flex-col justify-center items-end gap-y-4 sm:flex-row sm:gap-y-0 sm:items-stretch sm:justify-between gap-x-4">
            <li>
              <button  className="clearAll text-white bg-[#D93444] rounded-md">Clear All</button>
            </li>
            <li className="item-short">
              <select className="py-3 px-4 pe-9 block w-full border rounded-lg text-sm outline-none disabled:opacity-50 disabled:pointer-events-none focus:ring-offset-2 focus:ring-4 ring-indigo-300">
                <option defaultValue >Short By (default)</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </li>
            <li className="item-on-list">
            <select className="py-3 px-4 pe-9 block w-full border rounded-lg text-sm outline-none disabled:opacity-50 disabled:pointer-events-none focus:ring-offset-2 focus:ring-4 ring-indigo-300">
                <option defaultValue >All</option>
                <option>10 Per Page</option>
                <option>20 Per Page</option>
                <option>30 Per Page</option>
              </select>
            </li>
            <li className="item-show-btn flex flex-col sm:flex-row items-stretch justify-center gap-x-2">
              <button className="flex items-center justify-center">
              <IoListOutline className="text-2xl" />
              </button>
              <button className="flex items-center justify-center">
              <BsGrid3X3  className="text-xl" />
              </button>
            </li>
          </ul>
        </div>
      <div className="ShopP1-card-warp py-20  flex flex-wrap items-center justify-center lg:grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-x-4 lg:gap-x-6">
          {ProductsData.map((Product,ind)=>{
            return(
              <ProductsCard key={ind} id={Product.id} FirstImg={Product.FirstImg} SecondeImg={Product.SecondeImg} name={Product.name} price={Product.price} quantity={Product.quantity} className={" h-[24rem] w-[18rem]  "} />
            )
          })}
      </div>
    </div>
    <ToastContainer />
    </section>
  );
}

export default ShopPage1;
