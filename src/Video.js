import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url, channel, description, song, likes, messages, shares}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        src={url}
        className="video_player"
        ref={videoRef}
        loop
        onClick={handleClick}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar shares={shares} likes={likes} messages={messages} />
    </div>
  );
};

export default Video;
