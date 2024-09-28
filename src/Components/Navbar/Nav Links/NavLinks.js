import React from 'react'
import './NavLinks.css'
import { Link } from 'react-router-dom'

function NavLinks({className}) {
  const Classes = "flex flex-row items-stretch min-h-[inherit] " + className;
  return (
    <section
    id="NavLink-wrapper"
    className={Classes}
  >
    {/* Link box 1  */}
    <div id="home" className="Nav-link">
        <Link to="/"   className="head-link poppins-regular flex items-center transition-all" >Home <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i></Link>
      <ul className="links-warp link-box ">
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
    </div>

    {/* link box 2 */}

    <div id="shop" className="Nav-link">
      <Link
        to="/shop"
        className="head-link poppins-regular flex items-center transition-all"
      >
        Shop <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i>
      </Link>
      <ul className="links-warp link-box">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/shop2">Shop 2</Link>
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
    </div>

    {/* link box 3 */}

    <div id="pages" className="Nav-link">
      <Link
        to="/about"
        className="head-link poppins-regular flex items-center transition-all"
      >
        Pages <i className="ml-2 fa-solid fa-angle-down text-[1.1rem]"></i>
      </Link>
      <div className="link-box ">
        {/* Page layout 2  */}
        <ul className="links-warp">
          <li>
            <h3>PAGE LAYOUT</h3>
          </li>
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
        </ul>
        {/* Page layout 2  */}
        <ul className="links-warp">
          <li>
            <h3>PAGE LAYOUT 2</h3>
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
        </ul>

        {/* Page Layout 3 */}

        <ul className="links-warp">
          <li>
            <h3>PAGE TYPE </h3>
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
            <Link to="/coming-soon">Coming Soon</Link>
          </li>
        </ul>
      </div>
    </div>

    {/* link box 4 */}

    <div id="blog" className="Nav-link">
    <Link to="/about" className="head-link poppins-regular flex items-center transition-all">
        About
      </Link>
    </div>

    {/* link box 5 */}

    <div id="contact" className="Nav-link">
      <Link to="/contact" className="head-link poppins-regular flex items-center transition-all">
        Contact
      </Link>
    </div>
  </section>
  )
}

export default NavLinks
