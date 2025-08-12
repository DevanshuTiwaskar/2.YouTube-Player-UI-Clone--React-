import React from "react";
import { FiX } from "react-icons/fi";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineDownload,
  MdOutlineThumbUpOffAlt,
} from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiGraduationCap } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      {/* Sidebar container */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-60 bg-[#0f0f0f] p-2 border-r border-gray-800 
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 z-50 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end md:hidden mb-2">
          <button
            onClick={onClose}
            className="text-white p-2 rounded-full hover:bg-gray-800"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Main Section */}
        <SidebarItem icon={<MdHomeFilled size={22} />} text="Home" active />
        <SidebarItem icon={<SiYoutubeshorts size={22} />} text="Shorts" />
        <SidebarItem
          icon={<MdOutlineSubscriptions size={22} />}
          text="Subscriptions"
        />

        <hr className="border-gray-800 my-3" />

        {/* You Section */}
        <p className="px-3 py-1 text-sm text-gray-400">You</p>
        <SidebarItem icon={<MdOutlineHistory size={22} />} text="History" />
        <SidebarItem icon={<AiOutlinePlaySquare size={22} />} text="Playlists" />
        <SidebarItem
          icon={<MdOutlineVideoLibrary size={22} />}
          text="Your videos"
        />
        <SidebarItem icon={<PiGraduationCap size={22} />} text="Your courses" />
        <SidebarItem
          icon={<MdOutlineWatchLater size={22} />}
          text="Watch later"
        />
        <SidebarItem
          icon={<MdOutlineThumbUpOffAlt size={22} />}
          text="Liked videos"
        />
        <SidebarItem icon={<MdOutlineDownload size={22} />} text="Downloads" />

        <hr className="border-gray-800 my-3" />

        {/* Subscriptions */}
        <p className="px-3 py-1 text-sm text-gray-400">Subscriptions</p>
        <SubscriptionItem
          name="StudyIQ IAS"
          img="https://i.pravatar.cc/40?img=1"
        />
        <SubscriptionItem
          name="CNBC Awaaz"
          img="https://i.pravatar.cc/40?img=2"
        />
        <SubscriptionItem
          name="NDTV Profit"
          img="https://i.pravatar.cc/40?img=3"
        />
        <SubscriptionItem
          name="Sheryian Coding School"
          img="https://i.pravatar.cc/40?img=4"
        />
      </div>
    </>
  );
};

const SidebarItem = ({ icon, text, active }) => (
  <div
    className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer transition-colors
      ${active ? "bg-gray-800" : "hover:bg-gray-800"}`}
  >
    <span className="text-white">{icon}</span>
    <span className="text-white text-sm">{text}</span>
  </div>
);

const SubscriptionItem = ({ name, img }) => (
  <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">
    <img src={img} alt={name} className="w-6 h-6 rounded-full" />
    <span className="text-white text-sm">{name}</span>
  </div>
);

export default Sidebar;
