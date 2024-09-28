import React from 'react'
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {

  function handleClick() {
    const categoriesWrap = document.getElementById("cateList");
    categoriesWrap.classList.toggle("hidden");
  }

  return (
    <div id="categories-wrapper" className="mr-8 md:w-full h-full ">
      <button
        id="categoriesBtn"
        className="flex items-center justify-evenly"
        onClick={handleClick}
      >
        <i className="fa-solid fa-bars"></i>
        Categories
      </button>
        <ul id="cateList" className="showList ">
          <li>
            <Link to="/shop" className="cateLink flex items-center" >
            <i className="fa-regular fa-user"></i>
              Candles
            </Link>
          </li>

          <li>
          <Link to="/shop" className="cateLink flex items-center" >
              <i className="fa-solid fa-fan block"></i>
              <p className="">Handmade</p>
              <i className="fa-solid fa-arrow-right-long block ml-auto"></i>
          </Link>
            <ul className="Handmade-list">
              <li>
                <Link to="/*">Chair</Link>
              </li>
              <li>
                <Link to="/*">Table</Link>
              </li>
              <li>
                <Link to="/*">Wooden</Link>
              </li>
              <li>
                <Link to="/*">Furniture</Link>
              </li>
              <li>
                <Link to="/*">Clock</Link>
              </li>
              <li>
                <Link to="/*">Gift</Link>
              </li>
              <li>
                <Link to="/*">Cart</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/shop" className="cateLink flex items-center" >
            <i className="fa-solid fa-shoe-prints"></i>
              Gift Sets
            </Link>
          </li>

          <li>
            <Link to="/shop" className="cateLink flex items-center" >
            <i className="fa-regular fa-face-smile"></i>
              Plastic Gifts
            </Link>
          </li>

          <li>
            <Link to="/shop" className="cateLink flex items-center" >
            <i className="fa-regular fa-futbol"></i>
              Handy Cream
            </Link>
          </li>

          <li>
            <Link to="/shop" className="cateLink flex items-center" >
            <i className="fa-solid fa-crown"></i>
              Cosmetics
            </Link>
          </li>

          <li>
            <Link to="/shop" className="cateLink flex items-center" >
            <i className="fa-solid fa-gift"></i>
              Silk Accessories
            </Link>
          </li>

          <li>
            <ul className="cate-sub-Link">
              <li>
                <Link to="*" className="sub-link flex flex-col items-start justify-center">
                Value of the Day
                </Link>
              </li>
              <li>
                <Link to="*"   className="sub-link flex flex-col items-start justify-center">
                Top 100 Offers
                </Link>
              </li>
              <li>
                <Link to="*"  className="sub-link flex flex-col items-start justify-center">
                New Arrivals
                </Link>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  );
}

export default Categories;
