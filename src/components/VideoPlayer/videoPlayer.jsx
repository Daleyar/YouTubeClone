import React from "react";
import './videoPlayer.css'

const VideoPlayer = ({ videoId, video }) => {
  if (!videoId) {
    return (
      <div>
        <div className="welcome">
          <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold"}}>Welcome to NewbTube</h1>
        </div>
        <div className="about">
          <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold"}}>Please use the searchbar to find a video of your liking!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="video-player">
      <div className="video-title">
      <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
      </div>
      <iframe className="responsive-iframe"
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}?`}
      />
      <div>
        <h4>{video.snippet.channelTitle}</h4>
        <p>{video.snippet.description}</p>
      </div>  
    </div>
  );
};
export default VideoPlayer;