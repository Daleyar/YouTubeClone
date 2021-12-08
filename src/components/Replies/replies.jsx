import React, { Component } from 'react';

class CreateReplies extends Component {
    constructor(props) {
        super(props);
        this.state = {
          commentId: '',
          replies: '',
        }
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
      });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      let reply = {
        commentBody : this.state.comments,
        replies: this.state.replies
      }
      console.log(reply)
      this.props.addReply(reply);
      this.setState({
        commentId: '',
        replies: '',
      });
    }
    render() { 
      return (
        <div>
          <form className='replyBox' onSubmit={this.handleSubmit} >
              <input placeholder= "New Reply" name="replies" type="text" onChange={this.handleChange} value={this.state.replies}/>
              <button type='submit'>Add</button>
          </form>
        </div>
      );
    }
  }
   
  export default CreateReplies;