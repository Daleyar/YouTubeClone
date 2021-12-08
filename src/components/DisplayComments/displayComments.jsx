import React from "react";
import { Card } from 'react-bootstrap';

const CommentsTable = ({comments , Like, DisLike}) => {
    if (!comments[0]) return(null);

    return (
        <div>
            <Card>
                <Card.Title>
                <h3>Comment Section: </h3>
                </Card.Title>
                    <table>
                        <tbody>
                            {comments.map((comment)=> {
                                return (
                                <tr key={comment.id}>
                                    <td>{comment.commentBody}</td>
                                    <td>{comment.likes}
                                        <button className='btn btn-dark btn-sm' 
                                        onClick={() => Like(comment)}>Like</button>
                                    </td>
                                    <td>{comment.dislikes}
                                        <button className='btn btn-dark btn-sm' 
                                        onClick={() => DisLike(comment)}>Dislike</button>
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