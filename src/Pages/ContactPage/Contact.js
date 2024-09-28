import React,{ useState }  from "react";
import "./Contact.css";
import { Formik , Field , ErrorMessage , Form} from "formik";
import * as Yup from 'yup'
import axios from "axios";

import Location from "../../Assets/Icons/location-pin.svg";
import Call from "../../Assets/Icons/call-receive.svg";
import Clock from "../../Assets/Icons/clock-0500.svg";
import HeadPhone from "../../Assets/Icons/headset.svg";
import RightArrow from "../../Assets/Icons/right-arrow.svg";

// ICONS
import { LuCheckCircle } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const PhoneRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const initialValues = {
  Name : "",
  Email : "",
  Number : "",
  Subject : "",
  Message : "",
}

const formSchema = Yup.object().shape({
  Name : Yup.string().min(2).max(18).required("* This Fild Is Required"),
  Email : Yup.string().email("Email Is Not Valid").required("* This Fild Is Required"),
  Subject : Yup.string().min(5,"Enter Valid Product Name").max(20).required("* this Fils Is Required"),
  Message : Yup.string().min(30).max(100).required("* this Fils Is Required"),
  Number : Yup.string().matches(PhoneRegex,"Number Is Not Valid").required("* this Fils Is Required"),
});


function Contact() {
    /* Navigate */ 
    const NavigateHome = useNavigate()

   /* Server State Handling */
   const [serverState, setServerState] = useState();
   const [ showAlert , setShowAlert] = useState(false);

   const handleServerResponse = (ok, msg) => {
     setServerState({ok, msg});
   };

   const handleOnSubmit = (values, actions) => {
     axios({
       method: "POST",
       url: "https://formspree.io/f/mdoqbrjo",
       data: values,
     })
    .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thank You For This is informational ");
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
          NavigateHome("/")
        }, 2000);
        })
        .catch(error => {
          actions.setSubmitting(false);
          handleServerResponse(false, error.response.data.error);
          setShowAlert(false)
    });
   };

  return (
    <div id="Contact" className=" mx-auto pt-28">

      <div className="sm:container mx-auto Contact-data-box grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-6 lg:gap-y-0 mb-32">

        <div className="Contact-details col-auto lg:col-span-4 ">
          <div className="contact-link-wrap border rounded-md py-9 px-9 mb-3.5">
            <h1 className="Contact-details-heading text-[2rem] capitalize font-bold mb-5">
              Get In Touch
            </h1>
            <ul className="">
              <li className="my-[20px] flex items-center justify-start">
                <span className="icons w-[20px] h-[20px] mt-[4px] mr-4 self-start flex items-center justify-center">
                  <img src={Location} alt="Location icon" className="block w-full h-full object-contain " />
                </span>
                <span className="contact-link flex items-center justify-center">
                  <a href="#address-Map">
                    24/26 Strait Bargate, Boston, PE21, United Kingdom
                  </a>
                </span>
              </li>
              <li className="my-[20px] flex items-center justify-start">
                <span className="icons w-[20px] h-[20px] mt-[4px] mr-4 self-start flex items-center justify-center">
                  <img src={Call} alt="Call icon" className="block w-full h-full object-contain " />
                </span>
                <span className="contact-link flex items-center justify-center">
                  <a href="tel:6 - 146 - 389 - 5748">
                    +098 (905) 786 897 8
                    <br />6 - 146 - 389 - 5748
                  </a>
                </span>
              </li>
              <li className="my-[20px] flex items-center justify-start">
                <span className="icons w-[20px] h-[20px] mt-[4px] mr-4 self-start flex items-center justify-center">
                  <img src={Clock} alt="Clock icon" className="block w-full h-full object-contain " />
                </span>
                <span className="contact-link">
                  <p>
                    Store Hours : <br />
                    10 am - 10 pm EST, 7 days a week
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-btn-wrap flex flex-col items-center justify-center gap-y-4">
            <a href="tel:6 - 146 - 389 - 5748" className="contact-btn border w-full min-h-[55px] rounded-md flex items-center justify-center ">
              <p>Get Support On Call </p>
              <span className="icons w-[20px] h-[20px] mt-[4px] ml-4 flex items-center justify-center">
                <img src={HeadPhone} alt="HeadPhone icons" />
              </span>
            </a>
            <a
              href="https://www.google.com/maps/@36.963672,-119.2249843,7.17z"
              className="contact-btn border w-full min-h-[55px] rounded-md flex items-center justify-center "
            >
              <p>Get Direction</p>
              <span className="icons w-[20px] h-[20px] mt-[4px] ml-4 flex items-center justify-center">
                <img src={Location} alt="Location icon" className="block w-full h-full object-contain " />
              </span>
            </a>
          </div>
        </div>

        <div className="Contact-form col-auto lg:col-span-8">
          <div className="Contact-form-heading">
            <h1 className="text-[2rem] capitalize font-bold">
              Make Custom Request
            </h1>
            <p className="text-gray-600 capitalize text-[1rem]">
              Must-have pieces selected every month want style Ideas and Treats?
            </p>
          </div>
          {/* Form  */}
          <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
          validationSchema={formSchema}
          >
          {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0 py-6">
              <div className="col-span-6">
              <label htmlFor="Name"></label>
              <Field
                type="text"
                id="Name"
                name="Name"
                className="block w-full px-5 py-4 border rounded-lg text-[1.2rem] mb-1"
                placeholder="Full name"
                title="Please fill out this field"
              />
              <ErrorMessage name="Name" className="errorMsg text-red-500 text-sm" component="p" />
              </div>
              <div className="col-span-6">
              <label htmlFor="Email"></label>
              <Field 
                type="email"
                id="Email"
                name="Email"
                className="block w-full px-5 py-4 border rounded-lg text-[1.2rem] mb-1"
                placeholder="Email address"
                title="Please fill out this field"
              />
              <ErrorMessage name="Email" className="errorMsg text-red-500 text-sm" component="p" />
              </div>
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-12 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0 pb-6">
              <div className="col-span-6">
              <label htmlFor="Number"></label>
              <Field
                type="text"
                id="Number"
                name="Number"
                className=" block w-full px-5 py-4 border rounded-lg text-[1.2rem] mb-1"
                placeholder="Phone number"
                title="Please fill out this field"
              />
              <ErrorMessage name="Number" className="errorMsg text-red-500 text-sm" component="p" />
              </div>
              <div className="col-span-6">
                <label htmlFor="Subject"></label>
                <Field
                  type="text"
                  id="Subject"
                  name="Subject"
                  className="block w-full px-5 py-4 border rounded-lg text-[1.2rem] mb-1"
                  placeholder="Subject"
                  title="Please fill out this field"
                />
                <ErrorMessage name="Subject" className="errorMsg text-red-500 text-sm" component="p" />
              </div>
            </div>

            <div className="pb-8">
              <label htmlFor="Message"></label>
              <Field
                as="textarea"
                id="Message"
                name="Message"
                rows="7"
                className="block px-5 py-[18px] w-full text-[1.2rem] border rounded-lg mb-1"
                placeholder="Enter massage"
                title="Please fill out this field"
              ></Field>
              <ErrorMessage name="Message" className="errorMsg text-red-500 text-sm" component="p" />
            </div>

            <div>
            <button  type="submit" disabled={isSubmitting} className="bg-[#D51243] form-button flex items-center justify-evenly text-[#FFFFFF] font-bold text-[1.1rem] min-w-[185px] min-h-[55px] px-2 rounded-[5px]">
                Get A Quote <span className="icons w-[20px] h-[20px] mt-[4px] flex items-center justify-center"><img src={RightArrow} alt="Right Arrow" className="block w-full h-full object-contain " /></span>
            </button>
            {serverState && showAlert ? (
               <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 mt-2">
               <div className="flex items-center justify-between space-x-4">
                 <div>
                   <LuCheckCircle className="h-6 w-6 text-green-600" />
                 </div>
                 <div>
                   <p className={`text-sm font-medium text-green-600 ${!serverState.ok ? "errorMsg" : ""}`} >
                     {serverState.msg}
                   </p>
                 </div>
                 <div>
                   <CgClose className="h-6 w-6 cursor-pointer text-green-600" />
                 </div>
               </div>
             </div>
            ):null}
          </div>
          </Form>
          )}
          </Formik>
        </div>

      </div>

      <div id="address-Map" className="address-map-container">

      <iframe title="map" className="w-full min-h-[550px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d772784.5275147371!2d-74.254797!3d40.834782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1714412516192!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>


    </div>
  );
}

export default Contact;
