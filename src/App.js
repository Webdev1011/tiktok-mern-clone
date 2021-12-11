import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          messages={333}
          likes={111}
          shares={222}
          channel="web_dev"
          description="MERN stack clone"
          song="99 Problems but REACT aint one"
        />
        <Video
          url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          messages={999}
          likes={235}
          shares={665}
          channel="web_dev"
          description="MERN stack clone"
          song="99 Problems but REACT aint one"
        />
      </div>
      {/* app container */}
      {/* videos */}
      {/* <Video/> */}
    </div>
  );
}

export default App;
