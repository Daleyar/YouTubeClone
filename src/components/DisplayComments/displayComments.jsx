import React from "react";
import { Card } from 'react-bootstrap';
import CreateReplies from "../Replies/replies";

const CommentsTable = ({comments , Like, DisLike, reply}) => {
    if (!comments[0]) return(null);

    const listOfReplies = (props) => {
        return(
            props.replies.map((replylist) => {
                return(
                    replylist.replyBody
                )}
        ));
    }
        
    return (
        <div>
            <Card>
                <Card.Title>
                <h3>Comment Section: </h3>
                </Card.Title>
                    <table>
                        <tbody>
                            {comments.map((comment, id) => {
                                return (
                                <tr key={comment.id}>
                                    <td>{comment.commentBody}</td>
                                    <td>{listOfReplies(comment)}
            
                                    </td>
                                    <td>{comment.likes}
                                        <button className='btn btn-dark btn-sm' 
                                        onClick={() => Like(comment)}>Like</button>
                                    </td>
                                    <td>{comment.dislikes}
                                        <button className='btn btn-dark btn-sm' 
                                        onClick={() => DisLike(comment)}>Dislike</button>
                                    </td>
                                    <td></td>
                                    <td>
                                       <CreateReplies comment={comment._id} addReply={reply}/>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </Card>
        </div>
    )
}
export default CommentsTable;