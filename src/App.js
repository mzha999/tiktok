import axios from "./axios";
import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
      
    }
    fetchPosts();
  }, []);
  return (
    <div className="app">
      <div className="app_videos">
      {videos.map((video, index)  => 
        (<Video
          key={index}
          url={video.url}
          channel={video.channel}
          description={video.description}
          shares={video.shares}
          song={video.song}
          likes={video.likes}
          messages={video.messages}
        />)
        )}
      </div>
    </div>
  );
}

export default App;
