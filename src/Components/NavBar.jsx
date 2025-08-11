import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] border-b border-gray-800">
      {/* Left - Menu & Logo */}
      <div className="flex items-center gap-4">
        <FiMenu className="text-white text-2xl cursor-pointer" />
        <div className="flex items-center gap-1 cursor-pointer">
        <img
  src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
  alt="YouTube"
  className="h-5 invert"
/>


          <span className="text-gray-400 text-[10px]">IN</span>
        </div>
      </div>

      {/* Middle - Search */}
      <div className="flex items-center w-1/2 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-[#121212] border border-gray-700 text-white rounded-l-full outline-none"
        />
        <button className="bg-[#222] px-4 py-2 border border-gray-700 rounded-r-full">
          🔍
        </button>
        <button className="ml-2 p-2 rounded-full bg-[#181818] hover:bg-[#222]">
          <IoMdMic className="text-white text-xl" />
        </button>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-4 text-white text-2xl">
        <MdOutlineVideoCall className="cursor-pointer" />
        <div className="relative cursor-pointer">
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
