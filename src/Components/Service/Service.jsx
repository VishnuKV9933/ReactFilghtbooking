import React from "react";
import "./Service.css";
import { MdFlight, MdMore, MdReadMore } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import Search from "../Search/Search";

function Service() {
  return (
    <>
      <div className="options-container flex  flex-wrap w-full h-fit  px-[20px] lg:px-[150px] ">
        <div className="w-1/2 md:w-1/4  h-[50px] border flex justify-center items-center font-semibold gap-2">
          <MdFlight />
          Search Flights
        </div>
        <div className="w-1/2 md:w-1/4  h-[50px] border flex justify-center items-center font-semibold gap-2">
          <MdMore /> Manage
        </div>
        <div className="w-1/2 md:w-1/4  h-[50px] border flex justify-center items-center font-semibold gap-2">
          <MdReadMore /> Whats on flight
        </div>
        <div className="w-1/2 md:w-1/4  h-[50px] border flex justify-center items-center font-semibold gap-2">
          <HiStatusOnline /> Flight Status
        </div>
      </div>

      <Search />
    </>
  );
}

export default Service;
