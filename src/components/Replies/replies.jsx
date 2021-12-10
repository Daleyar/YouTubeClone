import React, { Component } from 'react';
import './replies.css'

class CreateReplies extends Component {
    constructor(props) {
        super(props);
        this.state = {
          replies: [],
        }
    }

    componentDidMount(){
      console.log(this.props)
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
      });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      let reply = {
        commentID: this.props.comment,
        replyBody: this.state.replies
      }

      this.props.addReply(reply)
      this.setState({
        commentId: '',
        replies: '',
      });
    }
    render() { 
      return (
        <div>
          <form className='replyBox' onSubmit={this.handleSubmit}>
              <input className="replyInput" placeholder= "  Add a Reply..." name="replies" type="text" onChange={this.handleChange} value={this.state.replies}/>
              <button className="replyButton" type='submit'>Add</button>
          </form>
        </div>
      );
    }
}
   
  export default CreateReplies;