import React from "react";

// Data 
import ProductsData from "../../../Data/ProductsData";

// Data Card
import ProductsCard from '../../Common Components/ProductsCard/ProductsCard'

import '../Style/Home.css'
import '../Style/HomeResponsive.css'


import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function PopularProducts() {


  return (
    
    <section  className="">

      <div className="Popular-Products-Heading mb-5 grid grid-cols-1 sm:grid-cols-12 pt-[7rem]">
       
        <h1 className="Section-Heading col-auto mb-5 sm:mb-0 sm:col-span-2 pl-0 md:pl-10">
          Popular
          <span>Products</span>
        </h1>

        <ul className="PopProducts-link col-start-auto sm:col-start-6 lg:col-start-8 xl:col-start-9 sm:col-end-[-1] flex flex-wrap items-center justify-around gap-y-2">
          <li>
            <a  href="#All" className="text-[1.3rem] font-semibold" >
              All
            </a>
          </li>
          <li>
            <a href="#Popular" className="text-[1.3rem] font-semibold">
              Popular
            </a>
          </li>
          <li>
            <a href="#onSale" className="text-[1.3rem] font-semibold">
              On Sale
            </a>
          </li>
          <li>
            <a href="#bastRated" className="text-[1.3rem] font-semibold">
              Bast Rated
            </a>
          </li>
        </ul>
      </div>

      <div className="PopProducts-wrapper pt-8 md:pt-16 pb-24">
      
        <div className="mx-auto flex flex-wrap items-center justify-center lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-x-4 lg:gap-x-6">

          {ProductsData.map((Product,ind)=>{
            return(
              <ProductsCard  key={ind} id={Product.id} FirstImg={Product.FirstImg} SecondeImg={Product.SecondeImg} quantity={Product.quantity}  name={Product.name} price={Product.price} className={" h-[24rem] w-[18rem] "} />
            )
          })}

        </div> {/* END OF GRID */}
        {/* alert */}
        <ToastContainer  />
      </div>
    </section>
  );
}

export default PopularProducts;
