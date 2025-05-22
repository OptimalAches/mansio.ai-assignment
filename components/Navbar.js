"use client"
import { Menu, Heart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white flex items-center justify-between px-8 py-3 shadow rounded-t-2xl z-10 relative">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-black">m</span>
        <span className="text-2xl font-extrabold text-orange-500">mansio.ai</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-1 text-orange-500 font-semibold">
          <Search size={18} />
          Discover
        </a>
        <a href="#" className="flex items-center gap-1 text-black font-semibold">
          <Heart size={18} />
          Likes
        </a>
        <a href="#" className="flex items-center gap-1 text-black font-semibold">
          <User size={18} />
          Matches
        </a>
        <button className="rounded-full bg-gray-100 p-2">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
