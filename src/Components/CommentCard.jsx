import React from "react";

const CommentCard = ({ author, body, comment_id, votes, created_at }) => {
  console.log(author);

  return (
    <article>
      <ul>
        <li>
          <p>
            {comment_id} by {author} published{" "}
            {new Date(created_at).toLocaleString()}
          </p>
          <p>{body}</p>
          <p>Vote Count{votes}</p>
        </li>
      </ul>
    </article>
  );
};

export default CommentCard;
