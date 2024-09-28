import React from "react";

import PageHeading from "../../Components/Common Components/PageHeading/PageHeading";
import LocationCard from "../../Components/ShopLocationComponents/LocationCard";

// location Data
import ShopLocationData from "../../Data/ShopLocationData";

// ICONS
import { BsArrowRight } from "react-icons/bs";

function ShopLocation() {
  return (
    <section>
      <PageHeading goBackLink="Home" pageTitle="Shop Location" />

      <div className="sm:container mx-auto grid grid-cols-12 gap-x-3 py-16">
        
        <div className="searchLocation-box flex flex-wrap items-stretch justify-center col-span-12 md:col-start-4 md:col-end-10">

          <input
            type="text"
            id="searchLocation-input"
            placeholder="Search here"
            className="block w-[40%] lg:w-[60%] p-5 text-gray-900 border border-gray-300 rounded-s-md  text-base outline-none "
          />
          <button className="text-sm flex w-[50%] lg:w-[40%] items-center justify-center font-bold text-white  bg-[#d51243] rounded-e-md ">
            Find Nearby Store <BsArrowRight className="mt-1 ml-2.5 " />
          </button>

        </div>

        <div className="ShopLocation-card-wrap col-span-12 mt-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">

            {ShopLocationData.map((ShopLocation, ind) => {
              return (
                <LocationCard
                  key={ShopLocation.id}
                  Address={ShopLocation.address}
                  LocationImg={ShopLocation.locationImg}
                  ShopName={ShopLocation.locationName}
                  PhoneNum={ShopLocation.phoneNumber}
                  StoreNum={ShopLocation.storeNumber}
                  storeHours={ShopLocation.storeHours}
                />
              );
            })}

          </div>

        </div>

      </div>
      <div className="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d354421.2378561534!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1715172319285!5m2!1sen!2sbd" width="100%" height="550" allowFullScreen="" loading="lazy" title="map" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}

export default ShopLocation;
