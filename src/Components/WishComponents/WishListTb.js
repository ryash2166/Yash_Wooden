import React from "react";
import "./WishListTb.css";

//ICONS
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { VscTriangleUp , VscTriangleDown} from "react-icons/vsc";

// REDUX
import { ADD_CART , REMOVE_WISHLIST, WISH_QUT_INCREASE ,WISH_QUT_DECREASE } from "../../redux/actions/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


// Alert
import { ToastContainer , Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { showErrorMessage,showSuccessMessage } from "../Common Components/Alerts/Alerts";


function WishListTb() {
  const backToHome = useNavigate()

  const wishItems = useSelector(state => state.wishReducer.wishList)
  
  // DISPATCH
  const dispatch = useDispatch()

  // WISHLIST 
  const Remove_list = (id) => {
    dispatch(REMOVE_WISHLIST(id))
    showErrorMessage('a quick reminder that you have an item that removed from the list','bottom-right')
  }

  // WISHLIST TO CART 
  const ADD_cart = (item) => {
    dispatch(ADD_CART(item))
    dispatch(REMOVE_WISHLIST(item.id))
    showSuccessMessage('Your item has been added to the cart list!','bottom-right')
  }

  // increment_Qut
  const increment_Qut = (item) => {
    dispatch(WISH_QUT_INCREASE(item))
  }

  const decrease_Qut = (item) => {
    dispatch(WISH_QUT_DECREASE(item))
  }

  return (
    <div className="sm:container mx-auto">
      <section className="mx-auto w-full py-20">
        <div className="mt-6 flex flex-col">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                        className="px-12 py-3.5 text-center text-lg capitalize font-medium"
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
                        Add To Cart
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

                    {wishItems.map((item , ind) => {
                      let {FirstImg,name,price,id,quantity} = item
                      return (

                        <tr key={ind} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-2 py-4">
                          <div className="flex items-center">
                            <div className="h-32 w-32 flex-shrink-0 mx-auto">
                              <img
                                className="h-full w-full block mx-auto  object-cover"
                                src={FirstImg}
                                alt={name + "Img"}
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
                        <td className="whitespace-nowrap px-2">
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
                                <button onClick={()=>ADD_cart(item)} id="addToCart-btn" className="BtnCase inline-block border h-14 w-[150px] rounded-md bg-[#D51243] text-white font-medium text-base relative">
                                    Add To Cart
                                </button>
                            </div>
                        </td>
                        <td className="whitespace-nowrap ">
                            <div className="flex items-center justify-center">
                              <button onClick={()=> Remove_list(id)}>
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
              {/* Button */}
              {!wishItems.length ? <button className="Back-HomeBtn mx-auto transition-all flex items-center justify-evenly my-2" onClick={()=> backToHome("/")}>
                            <BsArrowLeft />
                            Back To Home
              </button> : ""}
        </div>
      </section>
    </div>
  );
}

export default WishListTb;
