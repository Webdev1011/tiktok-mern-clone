import React from "react";
import "./Video.css";
function Video() {
  return (
    <div className="video">
      <video
        loop
        className="video__player"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      {/* <video
        loop
        className="video__player"
        src="http://techslides.com/demos/sample-videos/small.mp4"
      ></video> */}
      {/* https://youtu.be/nWwpyclIEu4 */}

      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
