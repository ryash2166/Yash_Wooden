import React from 'react'
import Header from '../../Components/Home/Header/Header'
import TopCategories from '../../Components/Home/Section 1/TopCategories'
import PopularProducts from '../../Components/Home/Section 2/PopularProducts'
import OfferBanner from '../../Components/Home/Section 3/OfferBanner'
import FollowOnSwiper from '../../Components/Home/Section 4/FollowOnSwiper'

function WoodenHome() {
  return (
    <>
    <div className='sm:container mx-auto'>
      <Header/>
      <TopCategories/>
      <PopularProducts/>
      <OfferBanner/>
    </div>
      <FollowOnSwiper/>
    </>
  )
}

export default WoodenHome
