import React from 'react'
import Cart from '../../Components/CartComponents/Cart'
import PageHeading from '../../Components/Common Components/PageHeading/PageHeading'

function CartPage() {
  return (
    <div>
      <PageHeading goBackLink='Home' pageTitle='Cart' />
      <Cart/>
    </div>
  )
}

export default CartPage