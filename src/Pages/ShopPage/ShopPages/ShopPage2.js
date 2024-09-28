import React, { useState } from "react";
// import from Next Ui
import { Slider } from "@nextui-org/slider";

import PageHeading from "../../../Components/Common Components/PageHeading/PageHeading";
import ProductsData from "../../../Data/ProductsData";
import ProductsCard from "../../../Components/Common Components/ProductsCard/ProductsCard";

import "./ShopPage.css";

//ICONS
import { IoListOutline } from "react-icons/io5";
import { BsGrid3X3 } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

function ShopPage2() {
  const [value , setValue] = useState([9, 100])
  return (
    <section className="">
      <PageHeading goBackLink="Home" pageTitle="Shop 2" />

      <div className="ShopP2 sm:container mx-auto grid grid-cols-12 gap-x-3 pt-20">
        <div className="ShopP2-Card-warp col-span-12 lg:col-span-10 ">
          <div className="ShopP2-Item-Bar flex flex-wrap gap-y-4 justify-between items-stretch ">
            <h1 className="text-xl flex items-center justify-center gap-x-2 ">
              10
              <p className="text-slate-300  capitalize">Item On List</p>
            </h1>

            <ul className="Shop-item-btn-box flex  flex-col justify-center items-end gap-y-4  sm:flex-row sm:gap-y-0 sm:items-stretch sm:justify-between gap-x-4">
              <li>
                <button className="clearAll text-white bg-[#D93444] rounded-md">
                  Clear All
                </button>
              </li>
              <li className="item-short">
                <select className="py-3 px-4 pe-9 block w-full border rounded-lg text-sm outline-none disabled:opacity-50 disabled:pointer-events-none focus:ring-offset-2 focus:ring-4 ring-indigo-300">
                  <option defaultValue>Short By (default)</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </li>
              <li className="item-on-list">
                <select className="py-3 px-4 pe-9 block w-full border rounded-lg text-sm outline-none disabled:opacity-50 disabled:pointer-events-none focus:ring-offset-2 focus:ring-4 ring-indigo-300">
                  <option defaultValue>All</option>
                  <option>10 Per Page</option>
                  <option>20 Per Page</option>
                  <option>30 Per Page</option>
                </select>
              </li>
              <li className="item-show-btn flex flex-col sm:flex-row gap-y-2 items-stretch justify-center gap-x-2">
                <button className="flex items-center justify-center">
                  <IoListOutline className="text-2xl" />
                </button>
                <button className="flex items-center justify-center">
                  <BsGrid3X3 className="text-xl" />
                </button>
              </li>
            </ul>
          </div>

          <div className="ShopP2-card-warp py-10  flex flex-wrap items-center justify-center lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-x-2">
            {ProductsData.map((Product, ind) => {
              return (
                <ProductsCard
                  key={ind}
                  id={Product.id} 
                  FirstImg={Product.FirstImg}
                  SecondeImg={Product.SecondeImg}
                  name={Product.name}
                  price={Product.price}
                  quantity={Product.quantity}
                  className={" h-[22.5rem] w-[17rem] "}
                />
              );
            })}
          </div>
            {/* alert */}
          
        </div>

        <aside className="col-span-12 lg:col-span-2 ">
          {/* Category UL */}
          <ul className="Category-list flex flex-col items-start justify-stretch w-full gap-y-3">
            <li className="w-full">
              <h1 className="text-base font-semibold border-b px-2 py-3">
                Category
              </h1>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-kid"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-kid"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Kids
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-men"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-men"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Mens
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-women"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-women"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Womens
              </label>
            </li>
          </ul>

          {/* Range Box  */}
          <ul className="Filter-list flex flex-col items-start justify-stretch w-full gap-y-3">
            <li className="w-full">
              <h1 className="text-base font-semibold border-b px-2 py-3">
                Filter
              </h1>
            </li>
            <li className="w-full py-3">
            <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider 
        formatOptions={{style: "currency", currency: "USD"}}
        size="sm"
        step={10}
        maxValue={100}
        minValue={10}
        value={value} 
        onChange={setValue}
        className={{
          base: "max-w-md gap-3",
          filler: "bg-gradient-to-r from-pink-300 to-cyan-300",
        }}
      />
      <p className="font-bold text-lg ">
       {/* {Array.isArray(value) && value.map((b) => `$ ${b}`) .join(" ")} */}
       {value.map((b) => `$ ${b} | `).join(" ")}
      </p>
    </div>
            </li>
          </ul>
          {/* First Color UL */}
          <ul className="Color-list flex flex-col items-start justify-stretch w-full gap-y-3">
            <li className="w-full">
              <h1 className="text-base font-semibold border-b px-2 py-3">
                Color
              </h1>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-black"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-black"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                black
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-blue"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-blue"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Blue
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-gray"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-gray"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Gray
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-green"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-green"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Green
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-red"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-red"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Red
              </label>
            </li>
          </ul>

          {/* Seconde Color UL  */}
          <ul className="Color-list flex flex-col items-start justify-stretch w-full gap-y-3">
            <li className="w-full">
              <h1 className="text-base font-semibold border-b px-2 py-3">
                Color
              </h1>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-Adidas"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-Adidas"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Adidas
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-Balenciaga"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-Balenciaga"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Balenciaga
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-Balmain"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-Balmain"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Balmain
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-Burberry"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-Burberry"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Burberry
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="checkbox-Chloe"
                type="checkbox"
                value=""
                className="w-4 h-4 category-checkbox"
              />
              <label
                htmlFor="checkbox-Chloe"
                className="ms-2 text-sm font-light text-[#989898]"
              >
                Chloe
              </label>
            </li>
          </ul>
        </aside>
      </div>
      <ToastContainer  />
    </section>
  );
}

export default ShopPage2;
