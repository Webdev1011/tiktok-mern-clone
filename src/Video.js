import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        className="video__player"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>

      <VideoFooter />
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
