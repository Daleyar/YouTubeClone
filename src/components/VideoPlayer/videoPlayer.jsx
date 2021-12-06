import React from "react";
import './videoPlayer.css'

const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }

  return (
    <div className="video-player">
      <iframe className="responsive-iframe"
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};
export default VideoPlayer;