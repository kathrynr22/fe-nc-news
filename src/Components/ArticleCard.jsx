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
      <h2 className="topic-header">
        {topic.charAt(0).toUpperCase() + topic.slice(1)}
      </h2>
      <h2 className="title">{title}</h2>
      <p>
        {" "}
        by {author} published on {""}
        {new Date(created_at).toLocaleString()}
      </p>
      Vote Count: {votes}
      <p>Comment Count: {comment_count}</p>
      <Link to={`/articles/${article_id}`} className="readmore">
        Read more
      </Link>
    </article>
  );
};

export default ArticleCard;
