import React, { useEffect, useState } from "react";
import VideoCard from "./VIdeoCard";

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/futurama/episodes") // Example free API
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.slice(0, 12).map((item) => ({
          title: item.title,
          thumbnail: item?.writers?.length
            ? `https://picsum.photos/300/200?random=${Math.random()}`
            : "https://via.placeholder.com/300x200",
          channel: "Sample Channel",
          views: Math.floor(Math.random() * 1000) + "K",
          uploaded: "1 day ago",
        }));
        setVideos(mappedData);
      });
  }, []);

  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-[#0f0f0f]">
  {videos.map((video, index) => (
    <VideoCard key={index} video={video} />
  ))}
</div>

  );
};

export default VideoGrid;
