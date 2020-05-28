import React from "react";
import VoteHandler from "./VoteHandler";

const CommentCard = ({
  author,
  body,
  comment_id,
  votes,
  created_at,
  username,
}) => {
  console.log("inside comment card");
  console.log(author);
  console.log(username);

  return (
    <article>
      <ul>
        <li>
          <p>
            {author} {new Date(created_at).toLocaleString()}
          </p>
          <p>{body}</p>
          <label>
            <button hidden={username !== author}>Delete Comment</button>
          </label>

          <VoteHandler votes={votes} comment_id={comment_id} />
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
