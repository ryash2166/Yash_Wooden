import React from 'react'

import TopShopLink from './Top Shop Link/TopShopLink';
import NavRow1 from './Nav Row 1/NavRow1';
import NavRow2 from './Nav Row 2/NavRow2';
import OnScrollNavBar from './On Scroll NavBar/OnScrollNavBar';

import './On Scroll NavBar/OnScrollNavBar.css'

window.addEventListener('scroll',()=>{
  const OnNavBar = document.querySelector("#OnScrollNavBar-warp");
  if(window.scrollY > 80){
    OnNavBar.classList.add("On-Scroll-Nav");
  }
  else{
    OnNavBar.classList.remove("On-Scroll-Nav");
  }
})


function NavBar() {
    
  return (
    <div className="">
      <div className='Off-Scroll-NavBar'>
        <TopShopLink/>
        <NavRow1/>
        <NavRow2/>
      </div>
      <div id='OnScrollNavBar-warp' className='Set-On-NavBar Off-Scroll-Nav'>
        <OnScrollNavBar/>
      </div>
    </div>
  )
}

export default NavBar
