"use client"
import { Menu, Heart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-white flex items-center justify-between px-12 py-4 shadow-[0_3px_12px_0_rgba(255,125,40,0.10)] relative z-10">
        {/* Logo */}
        <div className="flex items-center select-none font-black tracking-tight">
          <span className="text-3xl text-black">mansio.</span>
          <span className="text-3xl text-orange-500">ai</span>
        </div>
        {/* Right menu */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-1 text-[#FF7900] font-medium text-lg">
            <Search size={22} />
            Discover
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-900 font-medium text-lg">
            <Heart size={22} />
            Likes
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-900 font-medium text-lg">
            <User size={22} />
            Matches
          </a>
          <button className="bg-gray-100 p-2 ml-2 shadow border border-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </nav>
      
    </>
  );
}


