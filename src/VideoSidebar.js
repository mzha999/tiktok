import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({likes, shares, messages}) => {
  const [like, setLike] = useState(false);
  
  return (
    <div className="video_sidebar">
      <div className="videoSidebar_button" >
        {like ? (
          <FavoriteIcon fontSize="large" onClick={()=> {setLike(false)}}/>
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={()=> {setLike(true)}}/>
        )}
        <p>{likes}</p>
      </div>
      <div className="videoSidebar_button">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
