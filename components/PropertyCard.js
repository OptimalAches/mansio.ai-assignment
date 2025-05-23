"use client"

import { MapPin, Home, IndianRupee, Shield, Coins, Snowflake, Tv, Droplets, Dumbbell, Utensils, User, CigaretteOff } from "lucide-react";

export default function PropertyCard({ data }) {
  return (
    <div className="w-full max-w-[1200px] rounded-[36px] bg-gray-100 shadow-[0_18px_60px_0_rgba(255,125,40,0.13)] mx-auto overflow-hidden p-0 flex flex-col relative border-0">
      {/* Top: Image and address/details */}
      <div className="flex flex-row items-start px-6 pt-6 gap-6">
        {/* Property Image */}
        <div className="w-[550px] h-[270px] bg-white rounded-2xl overflow-hidden flex items-center justify-center">
          <img src={data.image} alt="property" className="w-full h-full object-cover" />
        </div>
        {/* Address and Details */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center bg-white py-8 p-4 w-full rounded-2xl">
            <MapPin size={70} className="text-orange-500" />
            <div className="flex flex-col gap-1 justify-center">
              <span className="font-bold text-2xl leading-tight">{data.bhk} Flat in HSR Layout</span>
              <span className="text-gray-500 text-[15px] font-semibold mb-1">{data.address}</span>
            </div>
          </div>
          <div className="flex gap-6 text-[15px] mt-6">
            <div className="flex gap-11 items-center pl-8 pr-24 bg-white rounded-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500 font-semibold">Accommodation Type</span>
                <span className="text-[18px] font-semibold text-gray-800">{data.type}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500 font-semibold">Room Type</span>
                <span className="text-[18px] font-semibold text-gray-800">{data.roomType}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-white justify-center p-7 pr-28 rounded-2xl">
              <span className="text-xs text-gray-500 font-semibold">Availability</span>
              <span className="text-[18px] font-semibold text-gray-800"> {data.availability}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Row */}
      <div className="flex flex-row px-6 pt-6 pb-6 gap-5 w-full">
        {/* Rent, Deposit, Extra */}
        <div className="flex flex-col w-[300px] bg-white rounded-2xl pt-3">
          <div className=" p-3 rounded-2xl flex flex-col items-start  min-h-[54px]">
            <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold ">
              <IndianRupee size={14} />
              <span>Rent</span>
            </div>
            <div className="text-[18px] font-semibold text-gray-800">{data.rent}</div>
          </div>
          <div className=" p-3 rounded-2xl flex flex-col items-start gap-1 min-h-[54px]">
            <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold ">
              <Shield size={14} />
              <span>Security Deposit</span>
            </div>
            <div className="text-[18px] font-semibold text-gray-800">{data.deposit}</div>
          </div>
          <div className=" p-3 rounded-2xl flex flex-col items-start gap-1 min-h-[54px]">
            <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold ">
              <Coins size={14} />
              <span>Extra</span>
            </div>
            <div className="text-[18px] font-semibold text-gray-800">{data.extra}</div>
          </div>
        </div>
        {/* Amenities */}
        <div className="flex-1 flex flex-col justify-between gap-2 rounded-2xl bg-white min-w-[600px]">
          <div className="grid grid-row-3 gap-x-3 gap-y-3 p-6">
            {/* Room Amenities */}
            <div>
              <div className="text-xs text-gray-500 mb-2 font-semibold flex items-center gap-2">Room Amenities</div>
              <div className="flex flex-wrap gap-4">
                {data.roomAmenities.map((am, i) => (
                  <span key={i} className="bg-[#FFFFE3] text-orange-500 text-[14px] px-3 py-1.5 pr-16 rounded-full flex items-center gap-1  font-medium">
                    {am === "AC" && <Snowflake size={14} />}
                    {am === "Wardrobe" && <Home size={14} />}
                    {am === "Study Table" && <Tv size={14} />}
                    {am}
                  </span>
                ))}
              </div>
            </div>
            {/* Flat Amenities */}
            <div>
              <div className="text-xs text-gray-500 mb-1 font-semibold flex items-center gap-1">Flat Amenities</div>
              <div className="flex flex-wrap gap-4">
                {data.flatAmenities.map((am, i) => (
                  <span key={i} className="bg-[#FFFFE3] text-orange-500 text-[14px] px-3 py-1.5 pr-16 rounded-full flex items-center gap-1 font-medium">
                    {am === "TV" && <Tv size={14} />}
                    {am === "RO" && <Droplets size={14} />}
                    {am}
                  </span>
                ))}
              </div>
            </div>
            {/* Society Amenities */}
            <div>
              <div className="text-xs text-gray-500 mb-1 font-semibold flex items-center gap-1">Society Amenities</div>
              <div className="flex flex-wrap gap-4">
                {data.societyAmenities.map((am, i) => (
                  <span key={i} className="bg-[#FFFFE3] text-orange-500 text-[14px] px-3 py-1.5 pr-16 rounded-full flex items-center gap-1  font-medium">
                    {am === "Pool" && <Droplets size={14} />}
                    {am}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Flatmate Preference and Flatmates */}
        <div className="flex flex-col gap-4 min-w-[175px] bg-white p-6 rounded-2xl">
          <div>
            <div className="text-xs text-gray-500 mb-1 font-semibold">Desired Flatmate Preference</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.preferences.map((pref, i) => (
                <span key={i}
                  className="flex items-center gap-1 border border-slate-300 bg-white px-3 py-2 rounded-xl text-[14px] text-black font-semibold shadow-sm"
                >
                  {pref === "Male" && <User size={14} />}
                  {pref === "Non Smoker" && <CigaretteOff size={14} />}
                  {pref === "No preference" && null}
                  {pref}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-semibold">Flatmates</div>
            <div className="flex gap-3 mt-2">
              {Array.from({ length: data.flatmates }).map((_, i) => (
                <span key={i} className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}


