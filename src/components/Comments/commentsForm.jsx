import React, { Component } from 'react';
import './commentsForm.css'


class CommentsForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        video_id: '',
        comments: '',
      }
  }
  handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let comment = {
      videoID: this.props.videoId,
      commentBody : this.state.comments
    }
    
    console.log(comment)
    this.props.addComment(comment);
    this.setState({
      video_id: '',
      comments: ''
    });
  }
  render() { 
    if (!this.props.videoId) return (null)
    return (
      <div>
        <form className='commentBox' onSubmit={this.handleSubmit} >
            <input className="input" placeholder= "  Add a comment..." name="comments" type="text" onChange={this.handleChange} value={this.state.comments}/>
            <button className="createButton" type='submit'>Add</button>
        </form>
      </div>
    );
  }
}
 
export default CommentsForm;