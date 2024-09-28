import React from "react";

//ICONS
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";

function LocationCard({
  ShopName,
  Address,
  PhoneNum,
  StoreNum,
  storeHours,
  LocationImg,
}) {
  return (
    <div className="Location-Card mx-auto min-h-[17rem] max-w-[38rem] border border-gray-300 rounded-md flex flex-col sm:flex-row sm:items-stretch sm:justify-center gap-x-3 overflow-hidden">
      <div className="Location-data px-6 min-h-[inherit]">
        <ul className="flex flex-col items-start justify-evenly min-h-full">
          <li>
            <h1 className="text-lg font-semibold py-2.5">{ShopName}</h1>
          </li>

          <li className="flex items-stretch justify-start gap-x-3">
            <span className="pt-1.5 text-base">
              <TfiLocationPin className="" />
            </span>
            <a
              href="/shop-location"
              className="text-gray-400 text-base transition-all hover:text-[#d51243]"
            >
              {Address}
            </a>
          </li>

          <li className="flex items-stretch justify-start gap-x-3">
            <span className="pt-1.5 text-base">
              <IoCallOutline className="" />
            </span>
            <a
              href={`tel:'${PhoneNum}'`}
              className="text-gray-400 text-base transition-all hover:text-[#d51243]"
            >
              {PhoneNum} <br />
              {StoreNum}
            </a>
          </li>

          <li className="flex items-stretch justify-start gap-x-3">
            <span className="pt-1.5 text-base">
              <GoClock className="" />
            </span>
            <p className="text-gray-400 text-base transition-all hover:text-[#d51243]">
              Store Hours: <br />
              {storeHours}
            </p>
          </li>
        </ul>
      </div>
      <div className="location-img  min-h-[inherit]">
        <img src={LocationImg} alt="..." className="block object-cover w-full sm:w-auto h-full" />
      </div>
    </div>
  );
}

export default LocationCard;
