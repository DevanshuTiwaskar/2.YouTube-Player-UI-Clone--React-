import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="w-full max-w-[360px] cursor-pointer">
      {/* Thumbnail with duration */}
      <div className="relative w-full">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>

      {/* Video Info */}
      <div className="flex mt-3 gap-3">
        {/* Channel Avatar */}
        <img
          src={video.avatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full"
        />

        {/* Title & Channel Info */}
        <div className="flex flex-col">
          <h3 className="text-white font-medium text-sm leading-snug line-clamp-2">
            {video.title}
          </h3>
          <p className="text-gray-400 text-xs">{video.channel}</p>
          <p className="text-gray-400 text-xs">
            {video.views} • {video.uploaded}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
