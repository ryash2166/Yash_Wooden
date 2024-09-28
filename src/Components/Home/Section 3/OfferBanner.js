import React from 'react'
import OfferPoster from '../../../Assets/Offer Poster.png'

import '../Style/Home.css'
import '../Style/HomeResponsive.css'
import { Link } from 'react-router-dom'


function OfferBanner() {
  return (
    <section className='pt-10'>

      <div className='Offer-wrapper mx-auto bg-[#F8F8F8] rounded-md'>

        <div className="offerBox mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-2">

          <div className="offer-Post flex items-center justify-center">

              <div className='offer-Img mx-auto w-[90%] relative'>

                <img src={OfferPoster} className='block h-full w-full
                object-contain m-auto ' alt="Offer Poster" />

                  <div className='Img-Off-text absolute'>
                    <h1 className='flex flex-wrap flex-col items-center justify-center'>
                      <span>From </span>
                      $49
                    </h1>
                  </div>

              </div>

          </div>

          <div className=" offer-Text flex flex-col flex-wrap items-stretch justify-center">

              <h1 className='Off-price flex flex-wrap items-center justify-start'>$49.00 
              <p className='opacity-45 ml-2 line-through'>$59.00</p>
              </h1>
              
              <div className='Offer-link-wrp'>

                <Link to="/shopDetails" className='OfferLink'>
                  <h1>Pro2 Abstract Folded Pots</h1>
                </Link>
                <p>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor. Wonderful accent piece for coffee tables or side tables.</p>
              </div>

              <div className='Off-count-warp my-3'>

                <div className='ProgressBar mx-auto bg-white overflow-hidden rounded-2xl'>
                  <span className='ProgressLine bg-[#D82552]  rounded-2xl h-[8px] w-[80%] block'></span>
                </div>
                <div className='Count-box my-6 grid grid-cols-12 gap-y-7'>

                <ul className='countdown-time col-span-12 xl:col-span-8 grid  grid-cols-3 sm:grid-cols-4 gap-x-4'>
                  <li className='my-1 sm:my-0'>
                    <p className='time-number'>123</p>
                    <p className='time-text'>Days</p>
                  </li>
                  <li className='my-1 sm:my-0'>
                    <p className='time-number'>22</p>
                    <p className='time-text'>Hours</p>
                  </li>
                  <li className='my-1 sm:my-0'>
                    <p className='time-number'>21</p>
                    <p className='time-text'>Minutes</p>
                  </li>
                  <li className='my-1 sm:my-0 col-start-2 col-end-2 sm:col-auto'>
                    <p className='time-number'>47</p>
                    <p className='time-text'>Secods</p>
                  </li>
                </ul>
                <div className='count-text flex items-center justify-center col-span-12 xl:col-span-4 text-center'>
                  <p className='text-[1.1rem] opacity-60'>
                    Remains until the <br />
                    end of the offer
                  </p>
                </div>
                </div>
              </div>

          </div>  {/* offerText End  */}

        </div> {/* grid End */}

      </div>

    </section>
  )
}

export default OfferBanner
