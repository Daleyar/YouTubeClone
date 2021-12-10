import React from "react";
import RelatedVideos from "../RelatedVideos/relatedVideos";
import './relatedVideoList.css'

const RelatedVideoList = ({ videos, onVideoSelect }) => {
    if(!videos[0]) return (null)
    const listOfVideos = videos.map((video, id) => <RelatedVideos onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return(
        <center>
        <div className='vidWrap'>
            <h1>Related Videos</h1> 
            {listOfVideos}
        </div>
        </center>
    )
}

export default RelatedVideoList;