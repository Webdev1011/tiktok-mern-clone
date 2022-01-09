import axios from "../axios";
import React, { useEffect, useState } from "react";
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
      <div className="app__videos">
        {videos.map((video) => {
          <Video
            url={video.url}
            messages={video.messages}
            likes={video.likes}
            shares={video.shares}
            channel={video.channel}
            description={video.description}
            song={video.song}
          />;
        })}
      </div>
      {/* app container */}
      {/* videos */}
      {/* <Video/> */}
    </div>
  );
}

export default App;
