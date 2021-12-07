import React, {Component} from "react";
import youtube from './api/youtube'
import apiKey from "./api/apikey";
import RelatedVideoList from "./components/RelatedVideoList/relatedVideoList";
import SearchBar from "./components/SearchBar/searchBar";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            video_id:'',
            selectedVideo:'',
            comments: []
        }
    }
    
    handleSearch = async (searchTerm) => {
        const response = await youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 4,
            key: apiKey,
            q: searchTerm,
          }
        })
        console.log(response.data.items);
        this.setState({
          videos: response.data.items,
          video_id: response.data.items[0].id.videoId,
          selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        console.log(video)
        this.setState({ 
          selectedVideo: video,
          video_id : video.id.videoId
        });
      }
    
    render(){ 
        return(
            <div>
                <SearchBar handleSearch={this.handleSearch} />
                <VideoPlayer videoId={this.state.video_id}/>
                <RelatedVideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        )

    }
}

export default App; 