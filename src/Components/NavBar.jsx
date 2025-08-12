import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import {  useNavigate } from "react-router";

const Navbar = ({ onMenuClick }) => {

    const navigate = useNavigate();

  

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] border-b border-gray-800">
      {/* Left: Menu & Logo */}
      <div className="flex items-center gap-4">
        {/* Menu Button — only show on mobile */}
<button
  onClick={onMenuClick}
  className="block md:hidden p-2 text-white"
>
  {/* Your menu icon */}
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

        <div className="flex items-center gap-1 cursor-pointer">
          <img
          onClick={() => navigate('/') }
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube"
            className="h-5 invert"
          />
          <span className="text-gray-400 text-[10px]">IN</span>
        </div>
      </div>

      {/* Middle: Search (Desktop) */}
      <div className="hidden md:flex items-center w-1/2 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-[#121212] border border-gray-700 text-white rounded-l-full outline-none"
        />
        <button
          className="bg-[#222] px-4 py-2 border border-gray-700 rounded-r-full"
          aria-label="Search"
        >
          <FiSearch className="text-white text-lg" />
        </button>
        <button
          className="ml-2 p-2 rounded-full bg-[#181818] hover:bg-[#222]"
          aria-label="Voice Search"
        >
          <IoMdMic className="text-white text-xl" />
        </button>
      </div>

      {/* Middle: Search (Mobile) */}
      <div className="flex md:hidden items-center gap-3 text-white text-xl">
        <FiSearch className="cursor-pointer" aria-label="Search" />
        <IoMdMic className="cursor-pointer" aria-label="Voice Search" />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 text-white text-2xl">
        <MdOutlineVideoCall className="cursor-pointer hidden sm:block" />
        <div className="relative cursor-pointer hidden sm:block">
          <FaRegBell />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
            9+
          </span>
        </div>
        <img
          src="https://via.placeholder.com/32"
          alt="User"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
