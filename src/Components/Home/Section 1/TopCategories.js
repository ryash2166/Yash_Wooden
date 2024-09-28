import React from "react";
import { Link } from "react-router-dom";

import cateImg1 from '../../../Assets/Top Categories Img/cat01.svg'
import cateImg2 from '../../../Assets/Top Categories Img/cat02.svg'
import cateImg3 from '../../../Assets/Top Categories Img/cat03.svg'
import cateImg4 from '../../../Assets/Top Categories Img/cat04.svg'
import cateImg5 from '../../../Assets/Top Categories Img/cat05.svg'
import cateImg6 from '../../../Assets/Top Categories Img/cat06.svg'

import '../Style/Home.css'
import '../Style/HomeResponsive.css'

function TopCategories() {
  return (
    <section className="pt-20">
      <div className="Top-Cate-Heading pl-10">
        <h1 className="Section-Heading">
          Top
          <span>Categories</span>
        </h1>
      </div>

      <div className="tpCategories-wrp pt-[4rem] pb-[6rem] grid grid-cols-2 md:grid-cols-[repeat(4,minmax(0,19rem))]  lg:grid-cols-[repeat(6,minmax(0,19rem))] items-center justify-center">

        <div className="tp-cat-box">

          <div className="tp-Cate-Card">

            <div className="categoriesImg">
              <img src={cateImg1} alt="categories 01" />
              <p className="Cate-number flex items-center justify-center">20</p>
            </div>

            <div className="CateBoxLink" >
              <Link to="/shop">
                <span className="bg-underline">Driftwood</span>
                <span className="bg-underline">Table Decor</span>
              </Link>
            </div>

          </div>
        </div>


        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg2} alt="categories 02" />
              <p className="Cate-number flex items-center justify-center">12</p>
            </div>
            <div className="CateBoxLink" >
              <Link to="/shop">
                <span className="bg-underline">Floor Driftwood</span>
                <span className="bg-underline">Sculpture</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg3} alt="categories 03" />
              <p className="Cate-number flex items-center justify-center">03</p>
            </div>
            <div className="CateBoxLink" >
              <Link to="/shop">
                <span className="bg-underline">Driftwood</span>
                <span className="bg-underline">Christmas Tree</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg4} alt="categories 04" />
              <p className="Cate-number flex items-center justify-center">09</p>
            </div>
            <div className="CateBoxLink" >
              <Link to="/shop">
                <span className="bg-underline">Wooden</span>
                <span className="bg-underline">Bluetooth Speaker</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg5} alt="categories 05" />
              <p className="Cate-number flex items-center justify-center">10</p>
            </div>
            <div className="CateBoxLink" >
              <Link to="/shop">
                <span className="bg-underline">Receivers</span>
                <span className="bg-underline">Amplifiers</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="tp-cat-box">
          <div className="tp-Cate-Card">
            <div className="categoriesImg">
              <img src={cateImg6} alt="categories 06" />
              <p className="Cate-number flex items-center justify-center">05</p>
            </div>
            <div className="CateBoxLink" >
              <Link to="/shop">
                <span className="bg-underline">Appetizer</span>
                <span className="bg-underline">Plate Set</span>
              </Link>
            </div>
          </div>
        </div>

          </div>

    </section>
  );
}

export default TopCategories;
