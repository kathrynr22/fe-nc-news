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
