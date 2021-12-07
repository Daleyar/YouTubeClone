import React, {Component} from "react";
import youtube from './api/youtube'
import SearchBar from "./components/SearchBar/searchBar";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            video_id:'',
            selectedVideo:'',
            comments: [],
            
        }
    }
    
    handleSearch = async (searchTerm) => {
        const response = await youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 4,
            key: 'AIzaSyB1r_k732RGvq2htmK2tbqXeQXjvWYhkqs',
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
    

    render(){ 
        
        return(
            <div>
                <SearchBar handleSearch={this.handleSearch} />
                <VideoPlayer videoId={this.state.video_id}/>
                <RelatedVideos videos={this.state.videos}/>

            </div>
            
        )
        

    }
}

export default App; 