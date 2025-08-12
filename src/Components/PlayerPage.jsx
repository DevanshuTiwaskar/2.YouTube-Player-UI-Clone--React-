import React from "react";
import VideoCard from "./VIdeoCard";
import { useLocation, useNavigate, useParams } from "react-router";

const PlayerPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const video = location.state?.video;

  // Dummy suggested videos (replace with API later)
  const suggestedVideos = [
 {
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    duration: "3:26:52",
    title: "Learn JavaScript - Full Course for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "8.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    duration: "48:05",
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "5.3M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Q33KBiDriJY/hqdefault.jpg",
    duration: "6:43:02",
    title: "Full Stack Web Development Bootcamp",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.7M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Q33KBiDriJY"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/3PHXvlpOkf4/hqdefault.jpg",
    duration: "6:31:22",
    title: "Python for Beginners - Learn Python in 6 Hours",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/FazgJVnrVuI/hqdefault.jpg",
    duration: "1:40:12",
    title: "React JS Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "2.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/FazgJVnrVuI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    duration: "1:48:00",
    title: "React JS Tutorial for Beginners",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "3.4M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
    duration: "1:12:35",
    title: "JavaScript Programming - Full Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/jS4aFq5-91M"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Z1RJmh_OqeA/hqdefault.jpg",
    duration: "2:22:00",
    title: "Node.js Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "1.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Z1RJmh_OqeA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
    duration: "2:20:00",
    title: "HTML Full Course - Build a Website Tutorial",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "6.3M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
    duration: "1:10:00",
    title: "HTML Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.2M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
    duration: "40:31",
    title: "CSS Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.8M",
    uploaded: "5 years ago",
    videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
    duration: "3:26:24",
    title: "React JS Full Course 2023",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "1.2M",
    uploaded: "8 months ago",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg",
    duration: "3:23:12",
    title: "React Native Crash Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "980K",
    uploaded: "1 year ago",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg",
    duration: "2:55:15",
    title: "Docker Tutorial for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.5M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    duration: "4:13",
    title: "Gangnam Style",
    channel: "officialpsy",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLT-h9LthxyoUb_x2uZ8J6ko7rkqHgRgYzxTkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9B",
    uploaded: "10 years ago",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
  },
   {
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    duration: "3:26:52",
    title: "Learn JavaScript - Full Course for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "8.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    duration: "48:05",
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "5.3M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Q33KBiDriJY/hqdefault.jpg",
    duration: "6:43:02",
    title: "Full Stack Web Development Bootcamp",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.7M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Q33KBiDriJY"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/3PHXvlpOkf4/hqdefault.jpg",
    duration: "6:31:22",
    title: "Python for Beginners - Learn Python in 6 Hours",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/FazgJVnrVuI/hqdefault.jpg",
    duration: "1:40:12",
    title: "React JS Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "2.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/FazgJVnrVuI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    duration: "1:48:00",
    title: "React JS Tutorial for Beginners",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "3.4M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
    duration: "1:12:35",
    title: "JavaScript Programming - Full Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/jS4aFq5-91M"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Z1RJmh_OqeA/hqdefault.jpg",
    duration: "2:22:00",
    title: "Node.js Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "1.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Z1RJmh_OqeA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
    duration: "2:20:00",
    title: "HTML Full Course - Build a Website Tutorial",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "6.3M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
    duration: "1:10:00",
    title: "HTML Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.2M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
    duration: "40:31",
    title: "CSS Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.8M",
    uploaded: "5 years ago",
    videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
    duration: "3:26:24",
    title: "React JS Full Course 2023",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "1.2M",
    uploaded: "8 months ago",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg",
    duration: "3:23:12",
    title: "React Native Crash Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "980K",
    uploaded: "1 year ago",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg",
    duration: "2:55:15",
    title: "Docker Tutorial for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.5M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    duration: "4:13",
    title: "Gangnam Style",
    channel: "officialpsy",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLT-h9LthxyoUb_x2uZ8J6ko7rkqHgRgYzxTkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9B",
    uploaded: "10 years ago",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
  },
   {
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    duration: "3:26:52",
    title: "Learn JavaScript - Full Course for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "8.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    duration: "48:05",
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "5.3M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Q33KBiDriJY/hqdefault.jpg",
    duration: "6:43:02",
    title: "Full Stack Web Development Bootcamp",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.7M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Q33KBiDriJY"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/3PHXvlpOkf4/hqdefault.jpg",
    duration: "6:31:22",
    title: "Python for Beginners - Learn Python in 6 Hours",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/FazgJVnrVuI/hqdefault.jpg",
    duration: "1:40:12",
    title: "React JS Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "2.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/FazgJVnrVuI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    duration: "1:48:00",
    title: "React JS Tutorial for Beginners",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "3.4M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
    duration: "1:12:35",
    title: "JavaScript Programming - Full Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/jS4aFq5-91M"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Z1RJmh_OqeA/hqdefault.jpg",
    duration: "2:22:00",
    title: "Node.js Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "1.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Z1RJmh_OqeA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
    duration: "2:20:00",
    title: "HTML Full Course - Build a Website Tutorial",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "6.3M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
    duration: "1:10:00",
    title: "HTML Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.2M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
    duration: "40:31",
    title: "CSS Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.8M",
    uploaded: "5 years ago",
    videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
    duration: "3:26:24",
    title: "React JS Full Course 2023",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "1.2M",
    uploaded: "8 months ago",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg",
    duration: "3:23:12",
    title: "React Native Crash Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "980K",
    uploaded: "1 year ago",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg",
    duration: "2:55:15",
    title: "Docker Tutorial for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.5M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    duration: "4:13",
    title: "Gangnam Style",
    channel: "officialpsy",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLT-h9LthxyoUb_x2uZ8J6ko7rkqHgRgYzxTkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9B",
    uploaded: "10 years ago",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
  },
   {
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    duration: "3:26:52",
    title: "Learn JavaScript - Full Course for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "8.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    duration: "48:05",
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "5.3M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Q33KBiDriJY/hqdefault.jpg",
    duration: "6:43:02",
    title: "Full Stack Web Development Bootcamp",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.7M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Q33KBiDriJY"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/3PHXvlpOkf4/hqdefault.jpg",
    duration: "6:31:22",
    title: "Python for Beginners - Learn Python in 6 Hours",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/3PHXvlpOkf4"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/FazgJVnrVuI/hqdefault.jpg",
    duration: "1:40:12",
    title: "React JS Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "2.1M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/FazgJVnrVuI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    duration: "1:48:00",
    title: "React JS Tutorial for Beginners",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "3.4M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
    duration: "1:12:35",
    title: "JavaScript Programming - Full Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/jS4aFq5-91M"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Z1RJmh_OqeA/hqdefault.jpg",
    duration: "2:22:00",
    title: "Node.js Crash Course",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "1.9M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/Z1RJmh_OqeA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
    duration: "2:20:00",
    title: "HTML Full Course - Build a Website Tutorial",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "6.3M",
    uploaded: "3 years ago",
    videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
    duration: "1:10:00",
    title: "HTML Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.2M",
    uploaded: "4 years ago",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
    duration: "40:31",
    title: "CSS Crash Course For Absolute Beginners",
    channel: "Traversy Media",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLSAq3yAgQ2VN_dGicIGmH4Lel5t6j5sM4PtkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "3.8M",
    uploaded: "5 years ago",
    videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
    duration: "3:26:24",
    title: "React JS Full Course 2023",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "1.2M",
    uploaded: "8 months ago",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg",
    duration: "3:23:12",
    title: "React Native Crash Course",
    channel: "Programming with Mosh",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLTKk0yTyF3gXy9zWzE7Hlx0a7x4iZst9mC_Hg=s88-c-k-c0x00ffffff-no-rj",
    views: "980K",
    uploaded: "1 year ago",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg",
    duration: "2:55:15",
    title: "Docker Tutorial for Beginners",
    channel: "freeCodeCamp.org",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLRAvbqC6fQ0EjUuMEoMrfZdAEmnRNHWdgUMkw=s88-c-k-c0x00ffffff-no-rj",
    views: "2.5M",
    uploaded: "2 years ago",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE"
  },
  {
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    duration: "4:13",
    title: "Gangnam Style",
    channel: "officialpsy",
    channelAvatar: "https://yt3.ggpht.com/ytc/AKedOLT-h9LthxyoUb_x2uZ8J6ko7rkqHgRgYzxTkQ=s88-c-k-c0x00ffffff-no-rj",
    views: "4.9B",
    uploaded: "10 years ago",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
  }
  ];

  if (!video) {
    return <div className="text-white">Video not found.</div>;
  }

  return (
<div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1">
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 text-white mb-3 hover:text-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </button>

    {/* Video iframe */}
    <div className="aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={video.videoUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mt-3">{video.title}</h1>
    <p className="text-gray-400 text-sm">
      {video.views} • {video.uploaded}
    </p>

    {/* Channel Info + Buttons */}
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mt-4 pb-4 border-b border-gray-700 gap-3">
      <div className="flex items-center gap-3">
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{video.channelName}</p>
          <p className="text-gray-400 text-sm">21K subscribers</p>
        </div>
        <button className="ml-0 sm:ml-4 bg-white text-black px-4 py-1 rounded-full font-semibold">
          Subscribe
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-gray-800 px-4 py-1 rounded-full">👍 37K</button>
        <button className="bg-gray-800 px-4 py-1 rounded-full">👎</button>
        <button className="bg-gray-800 px-4 py-1 rounded-full">Share</button>
      </div>
    </div>

    {/* Description */}
    <div className="mt-4 bg-gray-800 p-3 rounded-lg">
      <p>{video.description || "No description provided."}</p>
    </div>

    {/* Comments */}
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <div className="flex gap-3 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="bg-transparent border-b border-gray-600 flex-1 outline-none"
        />
      </div>

      {/* Dummy comments */}
      <div className="flex gap-3 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">John Doe</p>
          <p className="text-gray-400 text-sm">
            Amazing performance! Truly legendary.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Music Lover</p>
          <p className="text-gray-400 text-sm">
            I grew up listening to this, timeless classic.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right: Suggested Videos */}
  <div className="w-full lg:w-80 flex flex-col gap-4">
    {suggestedVideos.map((v) => (
      <VideoCard key={v.id} video={v} />
    ))}
  </div>
</div>

  );
};

export default PlayerPage;
