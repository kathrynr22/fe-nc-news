import React from "react";
import VoteHandler from "./VoteHandler";

const CommentCard = ({
  author,
  body,
  comment_id,
  votes,
  created_at,
  username,
  deleteComment,
}) => {
  console.log("inside comment card");
  console.log(author);
  console.log(username);

  // deleteTodo = (id) => {
  //   //console.log("delete button pressed");
  //   const todos = this.state.items.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     items: todos,
  //   });
  // };

  return (
    <article>
      <ul>
        <li>
          <p>
            {author} {new Date(created_at).toLocaleString()}
          </p>
          <p>{body}</p>
          <label>
            <button
              hidden={username !== author}
              onClick={(event) => {
                deleteComment(comment_id);
              }}
            >
              Delete Comment
            </button>
          </label>

          <VoteHandler votes={votes} comment_id={comment_id} />
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
