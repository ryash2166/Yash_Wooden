
// React Dom
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
//TOP SCROLL 
import ScrollToTop from './Components/Common Components/Scroll To Top/ScrollToTop'
// REDUX
import { Provider } from 'react-redux';
import Store from './store'

//NAVBAR & FOOTER
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

// ERROR PAGE
import ErrorPage from './Pages/Error Page/ErrorPage.js';

//HOME PAGE
import WoodenHome from './Pages/Home page/WoodenHome'

//CONTACT PAGE
import Contact from './Pages/ContactPage/Contact';

//ABOUT PAGE
import About from './Pages/AboutPage/About'

// LOGIN & SIGNUP PAGE
import LoginPage from './Pages/Login&SignupPage/LoginPage'
import SignupPage from './Pages/Login&SignupPage/SignupPage'

//CART & WISH PAGE
import CartPage from './Pages/CartPage/CartPage'
import WishListPage from './Pages/WishPage/WishListPage'

//CHECKOUT & TRACK PAGE
import Checkout from './Pages/CheckoutPage/Checkout'
import TrackPage from './Pages/TrackPage/Track';

//SHOP LOCATION PAGE
import ShopLocation from './Pages/LocationPage/ShopLocation'

// SHOP PAGES ALL 
import ShopDetails1 from './Pages/ShopPage/ShopDetailsPage/ShopDetails1'
import ShopDetails2 from './Pages/ShopPage/ShopDetailsPage/ShopDetails2'

import ShopPage1 from './Pages/ShopPage/ShopPages/ShopPage1'
import ShopPage2 from './Pages/ShopPage/ShopPages/ShopPage2'



function App() {
  return (
    <div className="App mt-[128px] xl:mt-0">
      <Provider store={Store}>
       <BrowserRouter>
        <ScrollToTop/>
        <NavBar/>
        <Routes>

          <Route path="/" element={<WoodenHome/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="/sign-in" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path="/product-track" element={<TrackPage/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          
          <Route path="/shop" element={<ShopPage1/>}/>
          <Route path="/shop2" element={<ShopPage2/>}/>
          <Route path="/shop-details" element={<ShopDetails1/>}/>
          <Route path="/shop-details2/:id" element={<ShopDetails2/>}/>

          <Route path="/shop-location" element={<ShopLocation/>}/>
          
          <Route path="*" element={<ErrorPage/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter> 
      </Provider>
    </div>
  );
}

export default App;

