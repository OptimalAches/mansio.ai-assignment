"use client"
// import { MapPin, Home, BedDouble, CalendarDays, IndianRupee, Shield, Coins, Snowflake, Tv, Droplets, Dumbbell, Utensils, User, CigaretteOff } from "lucide-react";

// export default function PropertyCard({ data }) {
//   return (
//     <div className="w-full max-w-[900px] rounded-[32px] bg-white shadow-[0_16px_48px_0_rgba(255,125,40,0.16)] p-0 flex flex-col overflow-hidden relative">
//       {/* Top Row: Image and details */}
//       <div className="flex w-full">
//         {/* Property Image */}
//         <div className="p-8 pb-0">
//           <div className="w-[200px] h-[140px] bg-gray-100 rounded-2xl overflow-hidden shadow">
//             <img src={data.image} alt="property" className="w-full h-full object-cover" />
//           </div>
//         </div>
//         {/* Right Side - Location & Address */}
//         <div className="flex flex-col flex-1 px-4 pt-8">
//           <div className="flex items-center gap-2 mb-1">
//             <MapPin size={18} className="text-orange-500" />
//             <span className="font-bold text-2xl">{data.bhk} Flat in HSR Layout</span>
//           </div>
//           <div className="text-gray-400 text-[15px] font-medium mb-2">{data.address}</div>
//           {/* Accommodation and Room type */}
//           <div className="flex gap-4 text-[15px] mb-2">
//             <span className="flex items-center gap-1 text-gray-700"><Home size={16} /> {data.type}</span>
//             <span className="flex items-center gap-1 text-gray-700"><BedDouble size={16} /> {data.roomType}</span>
//             <span className="flex items-center gap-1 text-gray-700"><CalendarDays size={16} /> Available {data.availability}</span>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-[1px] bg-[#FFF7F3] mt-5 mb-0" />

//       {/* Info Grid: Rent, Deposit, Extra | Amenities | Flatmate Preference */}
//       <div className="flex w-full px-8 py-5 gap-6">
//         {/* Rent, Deposit, Extra */}
//         <div className="flex flex-col gap-2 min-w-[160px]">
//           <div className="bg-[#FFF7F3] p-3 rounded-xl flex items-center gap-2">
//             <IndianRupee size={17} className="text-orange-500" />
//             <div>
//               <div className="text-[13px] text-gray-400">Rent</div>
//               <div className="font-bold text-[16px]">{data.rent}</div>
//             </div>
//           </div>
//           <div className="bg-[#FFF7F3] p-3 rounded-xl flex items-center gap-2">
//             <Shield size={17} className="text-orange-500" />
//             <div>
//               <div className="text-[13px] text-gray-400">Deposit</div>
//               <div className="font-bold text-[16px]">{data.deposit}</div>
//             </div>
//           </div>
//           <div className="bg-[#FFF7F3] p-3 rounded-xl flex items-center gap-2">
//             <Coins size={17} className="text-orange-500" />
//             <div>
//               <div className="text-[13px] text-gray-400">Extra</div>
//               <div className="font-bold text-[16px]">{data.extra}</div>
//             </div>
//           </div>
//         </div>
//         {/* Amenities */}
//         <div className="flex-1 flex flex-col gap-3">
//           <div className="grid grid-cols-2 gap-x-6 gap-y-1">
//             {/* Room Amenities */}
//             <div>
//               <div className="text-[13px] text-gray-500 mb-1 font-semibold flex items-center gap-1">
//                 <Snowflake size={14} className="text-orange-400" /> Room Amenities
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {data.roomAmenities.map((am, i) => (
//                   <span key={i} className="bg-orange-50 text-orange-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200 font-medium">
//                     {am === "AC" && <Snowflake size={13}/>}
//                     {am}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {/* Flat Amenities */}
//             <div>
//               <div className="text-[13px] text-gray-500 mb-1 font-semibold flex items-center gap-1">
//                 <Tv size={14} className="text-orange-400" /> Flat Amenities
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {data.flatAmenities.map((am, i) => (
//                   <span key={i} className="bg-orange-50 text-orange-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200 font-medium">
//                     {am === "TV" && <Tv size={13}/>}
//                     {am === "RO" && <Droplets size={13}/>}
//                     {am}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {/* Society Amenities */}
//             <div>
//               <div className="text-[13px] text-gray-500 mb-1 font-semibold flex items-center gap-1">
//                 <Dumbbell size={14} className="text-orange-400" /> Society Amenities
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {data.societyAmenities.map((am, i) => (
//                   <span key={i} className="bg-orange-50 text-orange-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200 font-medium">
//                     {am === "Pool" && <Droplets size={13}/>}
//                     {am}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Flatmate Preference and Flatmates */}
//         <div className="flex flex-col gap-3 min-w-[200px]">
//           <div>
//             <div className="text-[13px] text-gray-500 mb-1 font-semibold">Desired Flatmate Preference</div>
//             <div className="flex flex-wrap gap-2">
//               {data.preferences.map((pref, i) => (
//                 <span key={i}
//                   className="flex items-center gap-1 border border-orange-300 bg-orange-50 px-3 py-1 rounded-full text-[12px] text-[#FF7900] font-semibold"
//                 >
//                   {pref === "Male" && <User size={13}/>}
//                   {pref === "Non Smoker" && <CigaretteOff size={13}/>}
//                   {pref === "No preference" && null}
//                   {pref}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Flatmates */}
//           <div className="flex items-center gap-2 mt-2">
//             <span className="text-[13px] text-gray-500 font-semibold">Flatmates</span>
//             {Array.from({ length: data.flatmates }).map((_, i) => (
//               <span key={i} className="w-7 h-7 rounded-full bg-orange-500 border-2 border-white" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { MapPin, Home, BedDouble, CalendarDays, IndianRupee, Shield, Coins, Snowflake, Tv, Droplets, Dumbbell, Utensils, User, CigaretteOff } from "lucide-react";

export default function PropertyCard({ data }) {
  return (
    <div className="w-full max-w-[1150px] rounded-[36px] bg-white shadow-[0_18px_60px_0_rgba(255,125,40,0.13)] mx-auto overflow-hidden p-0 flex flex-col relative border-0">
      {/* Top: Image and address/details */}
      <div className="flex flex-row items-start p-6 pb-0 gap-6">
        {/* Property Image */}
        <div className="w-[220px] h-[130px] bg-[#F4F4F4] rounded-2xl overflow-hidden flex items-center justify-center">
          <img src={data.image} alt="property" className="w-full h-full object-cover" />
        </div>
        {/* Address and Details */}
        <div className="flex flex-col justify-between flex-1">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={17} className="text-orange-500" />
            <span className="font-extrabold text-2xl leading-tight">{data.bhk} Flat in HSR Layout</span>
          </div>
          <div className="text-gray-400 text-[15px] font-medium mb-1">{data.address}</div>
          <div className="flex items-center gap-5 text-[15px] mb-1">
            <span className="flex items-center gap-1 text-gray-700 font-medium"><Home size={15} /> {data.type}</span>
            <span className="flex items-center gap-1 text-gray-700 font-medium"><BedDouble size={15} /> {data.roomType}</span>
            <span className="flex items-center gap-1 text-gray-700 font-medium"><CalendarDays size={15} /> {data.availability}</span>
          </div>
        </div>
      </div>

      {/* Info Row - tighter and more compact */}
      <div className="flex flex-row px-6 pt-5 pb-5 gap-5 w-full">
        {/* Rent, Deposit, Extra */}
        <div className="flex flex-col gap-2 w-[140px]">
          <div className="bg-[#FFF7F3] p-3 rounded-2xl flex flex-col items-start gap-1 min-h-[54px]">
            <div className="flex items-center gap-1 text-orange-500 font-bold text-[15px]">
              <IndianRupee size={15} />
              <span>Rent</span>
            </div>
            <div className="text-[18px] font-black text-gray-800">{data.rent}</div>
          </div>
          <div className="bg-[#FFF7F3] p-3 rounded-2xl flex flex-col items-start gap-1 min-h-[54px]">
            <div className="flex items-center gap-1 text-orange-500 font-bold text-[15px]">
              <Shield size={14} />
              <span>Deposit</span>
            </div>
            <div className="text-[18px] font-black text-gray-800">{data.deposit}</div>
          </div>
          <div className="bg-[#FFF7F3] p-3 rounded-2xl flex flex-col items-start gap-1 min-h-[54px]">
            <div className="flex items-center gap-1 text-orange-500 font-bold text-[15px]">
              <Coins size={14} />
              <span>Extra</span>
            </div>
            <div className="text-[18px] font-black text-gray-800">{data.extra}</div>
          </div>
        </div>
        {/* Amenities - more compact */}
        <div className="flex-1 flex flex-col justify-between gap-1">
          <div className="grid grid-cols-3 gap-x-3 gap-y-1">
            {/* Room Amenities */}
            <div>
              <div className="text-xs text-gray-500 mb-1 font-semibold flex items-center gap-1">Room Amenities</div>
              <div className="flex flex-wrap gap-1">
                {data.roomAmenities.map((am, i) => (
                  <span key={i} className="bg-orange-50 text-orange-500 text-[11px] px-3 py-0.5 rounded-full flex items-center gap-1 border border-orange-200 font-medium">
                    {am === "AC" && <Snowflake size={11}/>}
                    {am === "Wardrobe" && <Home size={11}/>}
                    {am === "Study Table" && <Tv size={11}/>}
                    {am}
                  </span>
                ))}
              </div>
            </div>
            {/* Flat Amenities */}
            <div>
              <div className="text-xs text-gray-500 mb-1 font-semibold flex items-center gap-1">Flat Amenities</div>
              <div className="flex flex-wrap gap-1">
                {data.flatAmenities.map((am, i) => (
                  <span key={i} className="bg-orange-50 text-orange-500 text-[11px] px-3 py-0.5 rounded-full flex items-center gap-1 border border-orange-200 font-medium">
                    {am === "TV" && <Tv size={11}/>}
                    {am === "RO" && <Droplets size={11}/>}
                    {am}
                  </span>
                ))}
              </div>
            </div>
            {/* Society Amenities */}
            <div>
              <div className="text-xs text-gray-500 mb-1 font-semibold flex items-center gap-1">Society Amenities</div>
              <div className="flex flex-wrap gap-1">
                {data.societyAmenities.map((am, i) => (
                  <span key={i} className="bg-orange-50 text-orange-500 text-[11px] px-3 py-0.5 rounded-full flex items-center gap-1 border border-orange-200 font-medium">
                    {am === "Pool" && <Droplets size={11}/>}
                    {am}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Flatmate Preference and Flatmates */}
        <div className="flex flex-col gap-2 min-w-[175px]">
          <div>
            <div className="text-xs text-gray-500 mb-1 font-semibold">Flatmate Preference</div>
            <div className="flex flex-wrap gap-1">
              {data.preferences.map((pref, i) => (
                <span key={i}
                  className="flex items-center gap-1 border border-orange-300 bg-white px-3 py-0.5 rounded-full text-[12px] text-[#FF7900] font-semibold shadow-sm"
                >
                  {pref === "Male" && <User size={12}/>}
                  {pref === "Non Smoker" && <CigaretteOff size={12}/>}
                  {pref === "No preference" && null}
                  {pref}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-xs text-gray-500 font-semibold">Flatmates</span>
            {Array.from({ length: data.flatmates }).map((_, i) => (
              <span key={i} className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


