import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'


// icons import
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { LuArrowDownUp } from "react-icons/lu";
import { ImEye } from "react-icons/im";
import { CiHeart } from "react-icons/ci";

// REDUX
import { useDispatch , useSelector} from 'react-redux';
import {ADD_CART , ADD_WISHLIST} from '../../../redux/actions/action'

// STYLE
import './ProductsCard.css'

// ALERT 
import { showSuccessMessage , showErrorMessage} from '../Alerts/Alerts';


function ProductsCard(Product_data) {
    const cartItems = useSelector(state =>  state.cartReducer.cartList)
    const wishItem = useSelector(state => state.wishReducer.wishList)

    let {id=1,FirstImg,SecondeImg,name,price,className} = Product_data;

    const dispatch = useDispatch()

    const Cart_Data = (Product_data) =>{
        dispatch(ADD_CART(Product_data))
        let find = cartItems.findIndex(item => item.id === Product_data.id);
        find === -1 ? showSuccessMessage("Your item has been added to the Cart list!","bottom-right") : showErrorMessage("Item already in Cart List. Please review and checkout promptly.","bottom-right")
    }
    
    const Wish_Data = (Product_data) =>{
        dispatch(ADD_WISHLIST(Product_data))
        let find =  wishItem.findIndex(item => item.id === Product_data.id);
        find === -1 ? showSuccessMessage("Your item has been added to the Wish list!","bottom-right") : showErrorMessage("Item already in Wish List. Please review and checkout promptly.","bottom-right")
    }

    let  Classes = className += " ProductCard  ";

    const shopDetailsPage = useNavigate();
    const neviGetWishlist = useNavigate();

  return (
    <div id='PRODUCTCARD' className={Classes}>
        <div className='ProductCard-Head mx-3.5 my-3 relative'>
            <Link id='ProductCard-link' to={`/shop-details2/${id}`} className='block rounded-md overflow-hidden relative '>
                <img src={FirstImg} alt={name + "image"} className='black object-contain w-full h-full mx-auto ' />
                <img src={SecondeImg} alt={name + "image"} className='black object-contain mx-auto absolute top-0 z-[1]' />
            </Link>
            <div className='ProductCard-Buttons mx-auto flex items-stretch justify-center rounded-md absolute '>
                    <ul id={id} className='bg-white w-full flex items-center justify-evenly rounded-md'>
                    <li className='flex items-center justify-center'>
                        <button onClick={()=>Cart_Data(Product_data)} className='flex items-stretch justify-center hover:text-[#D51243] transition-all'>
                            <CiShoppingBasket  className='text-2xl' />
                        </button>
                    </li>
                    <li className='flex items-center justify-center'>
                        <button onClick={()=>neviGetWishlist("/wishlist")} className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                            <LuArrowDownUp className='text-2xl rotate-90 ' />
                        </button>
                    </li>
                    <li className='flex items-center justify-center'>
                        <button onClick={()=>shopDetailsPage(`/shop-details2/${id}`)} className='flex items-center justify-center hover:text-[#D51243] transition-all' >
                            <ImEye className='text-2xl' />
                        </button>
                    </li>
                    <li className='flex items-center justify-center '>
                        <button  onClick={()=>Wish_Data(Product_data)}  className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                            <CiHeart className='text-2xl ' />
                        </button>
                    </li>
                    </ul>
            </div>
        </div>
        <div className='ProductCard-body mx-3.5'>
            <Link to={`/shop-details2/${id}`} className='text-[1rem] capitalize block text-gray-400 ' >{name}</Link>
            <p className='text-[1.1rem] font-bold mt-1'> $ {price} </p>
        </div>
        <div className='ProductCard-Review flex items-center justify-between mt-1 px-3.5'>
            <ul className='ProductCard-Colors'>
                <li className='flex items-center'>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#99C4FF] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#99C4FF] block rounded-full transition-all mx-auto'></span>
                    </Link>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#D51243] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#D51243] block rounded-full transition-all mx-auto'></span>
                    </Link>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#FF7373] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#FF7373] block rounded-full transition-all mx-auto'></span>
                    </Link>
                    <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#BE9AFF] rounded-full'>
                        <span className='w-[14px] h-[14px] bg-[#BE9AFF] block rounded-full transition-all mx-auto'></span>
                    </Link>
                </li>
            </ul>
            <p className='ProductCard-Star flex  justify-start items-center'>
                <Link to='/' className='flex items-center '>
                    <FaStar className='text-red-950' />
                    <FaStar className='text-red-950' />
                    <FaStar className='text-red-950' />
                    <FaStar className='text-red-950' />
                    <CiStar/>
                </Link>
                <span className="inline-flex items-center text-xs">
                    (81)
                </span>
            </p>
        </div>
    </div>
  )
}

export default ProductsCard
