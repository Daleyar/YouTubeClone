import React, {Component} from "react";
import youtube from './api/youtube'
import apiKey from "./api/apikey";
import RelatedVideoList from "./components/RelatedVideoList/relatedVideoList";
import SearchBar from "./components/SearchBar/searchBar";
import VideoPlayer from "./components/VideoPlayer/videoPlayer";
import axios from "axios";
import CommentsForm from "./components/Comments/commentsForm";
import CommentsTable from "./components/DisplayComments/displayComments";


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
        this.getCommentsById(this.state.video_id)
    }

    onVideoSelect = (video) => {
        console.log(video)
        this.setState({ 
          selectedVideo: video,
          video_id : video.id.videoId
        });
        this.getCommentsById(this.state.video_id)
    }
    
    getCommentsById = async (video_id) => {
        console.log(video_id)
        let response = await axios.get(`http://localhost:5000/api/comments/${video_id}`)
        this.setState({
            comments : response.data
        })
        console.log(this.state.comments)
    }
    
    addComment = async (comment) =>{
        await axios.post('http://localhost:5000/api/comments', comment)
        .then(response => this.setState({
            comments: [...this.state.comments, response.data]
        }))
        console.log(this.state.comments)
    }

    addLike = async (commentID, likes) => {
        likes += 1
        await axios.patch(`http://localhost:5000/api/comments/${commentID}`, likes)
        this.getCommentsById(this.state.video_id)
    }
      
    render(){ 
        return(
            <div>
                <SearchBar handleSearch={this.handleSearch} />
                <VideoPlayer videoId={this.state.video_id}/>
                <RelatedVideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                <CommentsForm videoId={this.state.video_id} addComment={this.addComment} />
                <CommentsTable comments={this.state.comments} Like={this.addLike} DisLike={this.addDislike}/>
            </div>
            
        )
        

    }
}

export default App; 