import React from "react";
import { Card } from 'react-bootstrap';
import './relatedVideos.css'

const RelatedVideos = ({video, onVideoSelect}) => {
    return (
        <div className="pe-auto">
            <Card style={{ width: '18rem' }} onClick={() => onVideoSelect(video)} >
                <img id='img' 
                alt = 'thumbnail'
                src = {video.snippet.thumbnails.medium.url}/>
                <h4>{video.snippet.title}</h4>
            </Card>
        </div>
    )
}

export default RelatedVideos;