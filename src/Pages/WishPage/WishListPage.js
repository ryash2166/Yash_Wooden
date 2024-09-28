import React from 'react'
import WishListTb from '../../Components/WishComponents/WishListTb'
import PageHeading from '../../Components/Common Components/PageHeading/PageHeading'


function WishListPage() {
  return (
    <section>
        <PageHeading goBackLink='Home' pageTitle='Wishlist' />
        <WishListTb />
    </section>
  )
}

export default WishListPage
