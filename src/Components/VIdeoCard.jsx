import React from "react";
import { useNavigate } from "react-router";

const VideoCard = ({ video }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id}`, { state: { video } });
  };


  return (
    <div onClick={handleClick} className="bg-black rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
          {video.duration}
        </span>
      </div>

      {/* Details */}
      <div className="flex mt-3 px-2 pb-4">
        {/* Channel avatar */}
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className="w-9 h-9 rounded-full mr-3"
        />

        {/* Video info */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-sm line-clamp-2">
            {video.title}
          </h3>
          <p className="text-gray-400 text-xs mt-1">{video.channelName}</p>
          <p className="text-gray-400 text-xs">
            {video.views} • {video.uploaded}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
