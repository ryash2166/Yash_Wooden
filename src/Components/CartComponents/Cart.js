import React from 'react'

import './Cart.css'

// ICONS
import { BsArrowLeft } from "react-icons/bs";
import { VscTriangleUp , VscTriangleDown} from "react-icons/vsc";

// Router DOM
import { useNavigate } from 'react-router-dom';

//REDUX
import { REMOVE_CART , CART_QUT_INCREASE , CART_QUT_DECREASE }  from '../../redux/actions/action'
import { useDispatch , useSelector } from 'react-redux';

// ALERT
import { ToastContainer,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showErrorMessage } from '../Common Components/Alerts/Alerts';

//==================================================================================


function Cart() {
  
const TotalAmount = {
  GST : 18.00,
  Discount : 10.00,
  subTotal : 0,
  GSTAmount : 0,
  discountAmount:0,
  }

  const neviGatShop = useNavigate()
  const neviGatCheckout = useNavigate()
  
  const backToHome = useNavigate()

  const dispatch = useDispatch()

  function remove_cart (id) {
    dispatch(REMOVE_CART(id))
    showErrorMessage('Your item has been removed from the cart list!',"bottom-right")
  }

  const CartItems = useSelector((state)=> state.cartReducer.cartList)

  // const CartTotals = useSelector(state => state.totalAmountReducer.totalAmount)


  const increment_Qut = (item) => {
    dispatch(CART_QUT_INCREASE(item))
  }

  const decrease_Qut = (item) => {
    dispatch(CART_QUT_DECREASE(item))
  }



  
  // CALCULATING GST AMOUNT 
   TotalAmount.GSTAmount += (TotalAmount.subTotal * TotalAmount.GST);
    
  return (
    <div className="sm:container mx-auto">
      <section className="mx-auto w-full py-20">

        <div className="mt-6 flex flex-col">

          <div className="overflow-x-auto ">

            <div className="inline-block min-w-full py-2 align-middle px-6 lg:px-0">

              <div className="overflow-hidden border border-gray-200 ">

                <table className="min-w-full divide-y divide-gray-200">

                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        <span>Images</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Courses
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Unit Price
                      </th>

                      <th
                        scope="col"
                        className="px-10 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg capitalize font-medium"
                      >
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {CartItems.map((item, ind) => {
              
                      let {FirstImg,price,name,id,quantity} = item

                      //TOTAL AMOUNT OBJECT COUNT 
                      TotalAmount.subTotal += quantity * price ;
                      TotalAmount.GSTAmount += (TotalAmount.subTotal * TotalAmount.GST) / 100 ;

                      
                      return (
                        <tr key={ind} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-2 py-4">
                          <div className="flex items-center">
                            <div className="h-32 w-32 flex-shrink-0 mx-auto">
                              <img
                                className="h-full w-full block mx-auto  object-cover"
                                src={FirstImg}
                                alt={"Img"}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                          <h1 className="text-base font-semibold text-center">
                            {name}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap">
                          <h1 className="text-center text-base font-medium">
                            $ {price}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap px-8">
                          <div className="quantity_input border rounded-md flex items-center justify-between p-4 cursor-pointer">
                            <p className='text-xl font-semibold'>{quantity}</p>
                            <p className='QUT-btn flex flex-col items-stretch justify-center opacity-0'>
                              <button onClick={()=>increment_Qut(item)} className='INCREASE_count flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all py-[1.5px]' ><VscTriangleUp className='text-sm' /></button>
                              <button onClick={()=>decrease_Qut(item)} className='DECREASE_count flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all p-[1.5px]'><VscTriangleDown className='text-sm' /></button>
                            </p>
                          </div>
                        </td>
                        <td className="whitespace-nowrap">
                        <h1 className="text-center text-base font-medium">
                         $ {quantity * price}
                        </h1>
                        </td>
                        <td className="whitespace-nowrap ">
                            <div className="flex items-center justify-center">
                                <button onClick={()=> remove_cart(id)}>
                                    Remove
                                </button>
                            </div>
                        </td>
                      </tr>
                      )
                    })}
                  </tbody>

                </table>
              </div>

            </div>

          </div>
              {/* Alert  */}
              <ToastContainer transition={Zoom} />
              {/* BuTton */}
              {!CartItems.length ? <button className="Back-HomeBtn mx-auto transition-all flex items-center justify-evenly my-2" onClick={()=> backToHome("/")}>
                            <BsArrowLeft />
                            Back To Home
              </button> : ""}
          {/* End For Table Div */}
          <div className='w-[95%] lg:w-full  mx-auto pt-8 '>
            <ul className='flex flex-col md:flex-row items-stretch justify-between gap-y-3'>
              <li className='flex flex-col sm:flex-row items-stretch justify-start gap-x-3 gap-y-3'>
                <input type="text" name="" id="" placeholder='Coupon code' className='text-black text-xl py-2.5 pl-2  rounded-md outline-none border ' />
                <button id='Coupon-BTN' className='relative BtnCase text-white bg-[#D51243] text-lg font-semibold px-2.5 rounded-md py-2.5 '>
                  Apply Coupon
                </button>
              </li>
              <li className='flex items-stretch justify-start'>
                <button id='Coupon-BTN' onClick={()=>neviGatShop('/shop')} className='relative BtnCase text-white bg-[#D51243] text-lg font-semibold px-4 rounded-md py-2.5 '>
                  Update cart
                </button>
              </li>
            </ul>
            <div className='CartTotals pt-5 grid grid-cols-12 '>
              <ul className='col-span-12 md:col-start-8 md:col-end-[-1]'>
                <li>
                    <h1 className='font-normal text-2xl py-4'>Cart Totals</h1>
                </li>
                <li className='border '>
                  <p className='flex items-center justify-between text-base py-3.5 px-4' ><span>Subtotal</span> <span>$ {TotalAmount.subTotal}</span></p>
                </li>
                <li className='border '>
                  <p className='flex items-center justify-between text-base py-3.5 px-4' ><span>SGST & CGST </span> <span>$ {TotalAmount.GSTAmount.toFixed(2)}</span></p>
                </li>
                <li className='border'>
                  <p className='flex items-center justify-between text-base py-3.5 px-4' ><span>Total</span> <span>$ {(TotalAmount.subTotal + TotalAmount.GSTAmount).toFixed(2)}</span></p>
                </li>
                <li className='mt-4'>
                <button  onClick={()=>neviGatCheckout('/checkout')} id='Coupon-BTN' className='relative BtnCase text-white bg-[#D51243] text-lg font-semibold px-4 rounded-md py-2.5 '>
                  Proceed to Checkout 
                </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
