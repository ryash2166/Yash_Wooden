import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import PageHeading from "../../Components/Common Components/PageHeading/PageHeading";

import { useSelector } from "react-redux";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 26 26"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


function Checkout() {

  const TotalAmount = {
    GST : 18.00,
    Discount : 10.00,
    subTotal : 0,
    GSTAmount : 0,
    discountAmount:0,
    }
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [shippingAmount] = useState(7)

  const [isShipping,setIsShipping] = useState(true)

  const CartList = useSelector((state)=>state.cartReducer.cartList)

  TotalAmount.GSTAmount += (TotalAmount.subTotal * TotalAmount.GST);

  return (
    <section>
      <PageHeading goBackLink="Home" pageTitle="Checkout" />
      <div className="sm:container mx-auto profile-forms hidden">
        <div className="ReturningCustomer"></div>
        <div className="HaveCoupon"></div>
      </div>
      <div className="sm:container mx-auto Checkout-forms grid grid-cols-12 gap-x-6 pt-10 items-start">
        <div className="BillingDetails col-span-12 lg:col-span-6 py-6 px-1 md:px-6">
          <h1 className="text-2xl border-b py-3">Billing Details</h1>
          <form className="mx-auto">
            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
              {/* First Row  */}
              <div className="countries-selection col-span-12">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-base text-gray-400"
                >
                  Country
                </label>
                <select
                  id="countries"
                  className="text-gray-900 text-base border  block w-full p-2.5 "
                >
                  <option defaultValue >Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* Seconde Row */}
              <div className="col-span-6 ">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-base text-gray-400"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-6 ">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-base text-gray-400"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                />
              </div>

              {/* Third Row */}
              <div className="col-span-12">
                <label
                  htmlFor="Company_Name"
                  className="block mb-2 text-base text-gray-400"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="Company_Name"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                />
              </div>

              {/* Forth  Row */}

              <div className="col-span-12">
                <label
                  htmlFor="Address"
                  className="block mb-2 text-base text-gray-400"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="Address2"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5 mb-5"
                  required
                  placeholder="Street address"
                />
                <input
                  type="text"
                  id="Address"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                  placeholder="Apartment,suite,unit,etc.(optional)"
                />
              </div>

              {/* Fifth  Row */}

              <div className="col-span-12">
                <label
                  htmlFor="Town"
                  className="block mb-2 text-base text-gray-400"
                >
                  Town / City
                </label>
                <input
                  type="text"
                  id="Town"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                  placeholder="Town / City"
                />
              </div>

              {/* Sixth Row  */}

              <div className="col-span-6 ">
                <label
                  htmlFor="State_name"
                  className="block mb-2 text-base text-gray-400"
                >
                  State / County
                </label>
                <input
                  type="text"
                  id="State_name"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-6 ">
                <label
                  htmlFor="Zip_code"
                  className="block mb-2 text-base text-gray-400"
                >
                  Postcode / Zip
                </label>
                <input
                  type="text"
                  id="Zip_code"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  placeholder="Postcode / Zip"
                  required
                />
              </div>

              {/* Seventh Row */}
              <div className="col-span-6 ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-6 ">
                <label
                  htmlFor="Phone_num"
                  className="block mb-2 text-base text-gray-400"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="Phone_num"
                  className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            {/* End OF Form  */}

            {/* Add Toggle Input */}
            <div className="createAccount">
              <div className="flex items-center py-8">
                <input
                  id="CreateAcc-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded "
                />

                <label
                  htmlFor="CreateAcc-checkbox"
                  className="ms-2 text-LG font-normal   text-gray-400"
                >
                  Create an account?
                </label>
              </div>
              <p className="text-BASE text-gray-400">
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page.
              </p>
              <div className="py-2.5">
                <label
                  htmlFor="Account_pass"
                  className="block mb-2 text-lg text-gray-400"
                >
                  Account password
                </label>
                <input
                  type="password"
                  id="Account_pass"
                  className="border border-gray-300 text-gray-900 text-lg  block w-full p-2.5"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            {/* New Form Add */}
            <div className="Ship-Different-Add">
              <div className="flex items-center py-8 border-b">
                <label
                  htmlFor="differentAdd-checkbox"
                  className="text-xl font-normal  text-gray-400"
                >
                  Ship to a different address?
                </label>

                <input
                  id="differentAdd-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded ms-2"
                />
              </div>
              <p>Add New Form Copy </p>
            </div>

            {/* Order Note  */}
            <div className="py-6">
              <label
                htmlFor="OrderNote"
                className="block mb-2 text-xl text-gray-400"
              >
                Order Note{" "}
              </label>
              <textarea
                id="OrderNote"
                rows="6"
                className="block p-2.5 w-full text-base border border-gray-300 "
                placeholder="Note About Your Order , e,g .special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="YourOrder border-3 border-gray-500 col-span-12 lg:col-span-6 px-1.5 md:px-6  py-6">
          <h1 className="text-2xl border-b py-3">Your Order</h1>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs font-light uppercase ">
                <tr className="border-b">
                  <th scope="col" className="py-6 px-0 font-normal">
                    Product
                  </th>
                  <th scope="col" className="py-6 px-0 font-normal">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="py-6 px-0 font-normal  whitespace-nowrap"
                  >
                    Cart Subtotal
                    <span className="font-bold"> × {CartList.length} </span>
                  </th>
                  <td className="py-6 px-0"> $ {TotalAmount.subTotal.toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="py-6 px-0 font-normal  whitespace-nowrap"
                  >
                    Discount  
                    <span className="font-bold"> × {TotalAmount.Discount} % </span>
                  </th>
                  <td className="py-6 px-0"> $ {TotalAmount.discountAmount.toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="py-6 px-0 font-normal  whitespace-nowrap"
                  >
                    GST 
                    <span className="font-bold"> × {TotalAmount.GST} % </span>
                  </th>
                  <td className="py-6 px-0">$ {TotalAmount.GSTAmount.toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="py-6 px-0 font-normal  whitespace-nowrap"
                  >
                    Shipping
                  </th>
                  <td className="py-3 px-0">
                    <div className="flex items-center me-4">
                      <input
                        id="FlatRate"
                        type="radio"
                        value={shippingAmount}
                        checked={isShipping  === true}
                        onChange={()=>setIsShipping(!isShipping)}
                        name="colored-radio"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 "
                      />
                      <label
                        htmlFor="FlatRate"
                        className="ms-2 text-sm font-light text-gray-900"
                      >
                        Flat Rate: $ {shippingAmount.toFixed(2)}
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="FreeShip"
                        type="radio"
                        value={0}
                        checked={isShipping === false}
                        onChange={()=>setIsShipping(!isShipping)}
                        name="colored-radio"
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 "
                      />
                      <label
                        htmlFor="FreeShip"
                        className="ms-2 text-sm font-light text-gray-900"
                      >
                        Free Shipping
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="py-6 px-0 font-normal  whitespace-nowrap"
                  >
                    Order Total
                  </th>
                  <td className="py-6 px-0 font-medium">$ {(TotalAmount.subTotal + TotalAmount.GSTAmount + (isShipping ? shippingAmount : 0)).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="accordion-box py-6">
            {/* First  */}
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)} className="text-base border-none">
                  Direct Bank Transfer
              </AccordionHeader>
              <AccordionBody className="text-base ">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
              </AccordionBody>
            </Accordion>
            {/* Second  */}
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)} className="text-base border-none" >
              Cheque Payment
              </AccordionHeader>
              <AccordionBody className="text-base">
              Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
              </AccordionBody>
            </Accordion>
            {/* Third */}
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)} className="text-base border-none" >
                Pay Pal
              </AccordionHeader>
              <AccordionBody className="text-base" >
              Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="PlaceOrder-btn py-2">
            <button
              type="submit"
              className="border block w-full font-medium rounded-md py-3.5 text-lg bg-[#d51243] text-white "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
