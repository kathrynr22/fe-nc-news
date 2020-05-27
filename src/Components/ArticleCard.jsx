import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  author,
  title,
  article_id,
  topic,
  created_at,
  votes,
  comment_count,
}) => {
  return (
    <article>
      <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
      <h2>{title}</h2>

      <h3>
        {" "}
        by {author} published on {""}
        {new Date(created_at).toLocaleString()}
      </h3>
      <h3>Vote Count: {votes}</h3>
      <h3>Comment Count: {comment_count}</h3>
      <Link to={`/articles/${article_id}`}>
        Click here to read the full article
      </Link>
    </article>
  );
};

export default ArticleCard;
