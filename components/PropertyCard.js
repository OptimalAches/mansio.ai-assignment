"use client"
import { motion } from "framer-motion";

export default function PropertyCard({ data, style, ...rest }) {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-3xl mx-auto relative z-0"
      style={style}
      {...rest}
    >
      {/* Image and Overlay */}
      <div className="flex gap-6">
        <div className="w-1/2">
          <div className="aspect-video rounded-2xl overflow-hidden mb-3 relative bg-gray-200">
            {/* Placeholder */}
            <img src={data.image} alt="property" className="object-cover w-full h-full" />
            {/* Carousel dots - just a static visual for now */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="w-2 h-2 rounded-full bg-gray-200" />
              <span className="w-2 h-2 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <div>
            <h2 className="font-bold text-xl">{data.bhk} Flat in HSR Layout</h2>
            <p className="text-xs text-gray-600">BM Mystic Greens, Sector 2, HSR Layout, Bangalore</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="font-semibold text-gray-700">Rent</div>
              <div>{data.rent}</div>
              <div className="font-semibold text-gray-700 mt-2">Security Deposit</div>
              <div>{data.deposit}</div>
              <div className="font-semibold text-gray-700 mt-2">Extra</div>
              <div>{data.extra}</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700">Accommodation Type</div>
              <div>{data.type}</div>
              <div className="font-semibold text-gray-700 mt-2">Room Type</div>
              <div>{data.roomType}</div>
              <div className="font-semibold text-gray-700 mt-2">Availability</div>
              <div>{data.availability}</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">Desired Flatmate Preference</div>
            <div className="flex gap-2 flex-wrap">
              {data.preferences.map((pref, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                >
                  {pref}
                </span>
              ))}
            </div>
            <div className="mt-2">
              <div className="font-semibold text-gray-700">Flatmates</div>
              <div className="flex gap-1">
                {Array.from({ length: data.flatmates }).map((_, i) => (
                  <span key={i} className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
