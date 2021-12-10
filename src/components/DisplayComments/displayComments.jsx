import React from "react";
import CreateReplies from "../Replies/replies";
import './comments.css'

const CommentsTable = ({comments , Like, DisLike, reply}) => {
    if (!comments[0]) return(null);

    const listOfReplies = (props) => {
        return(
            props.replies.map((replylist) => {
                return(
                    <div>
                    {replylist.replyBody}
                    </div>
                )}
        ));
    }
        
    return (
        <div className="comment-box">
            <div>
                <div className="commentTitle">
                <h3>Comment Section: </h3>
                </div>
                    <div>
                        {comments.map((comment, id) => {
                            return (
                                <div>
                                <div className="comment"><b>Comment:</b> {comment.commentBody}</div>
                                <div className="reply"><b>Replies:</b> {listOfReplies(comment)}</div>
                                <div className="likes"><b>{comment.likes}</b> <button className="likeButton" onClick={() => Like(comment)}>Like</button></div>
                                <div className="dislikes"><b>{comment.dislikes}</b><button className="dislikeButton" onClick={() => DisLike(comment)}>Dislike</button></div>
                                <div className="replySection"><CreateReplies comment={comment._id} addReply={reply}/></div>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </div>
    )
}
export default CommentsTable;