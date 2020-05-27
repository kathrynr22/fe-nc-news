import React from "react";
import VoteHandler from "./VoteHandler";

const CommentCard = ({ author, body, comment_id, votes, created_at }) => {
  console.log(author);

  return (
    <article>
      <ul>
        <li>
          <p>
            {author} {new Date(created_at).toLocaleString()}
          </p>
          <p>{body}</p>

          <VoteHandler votes={votes} comment_id={comment_id} />
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
