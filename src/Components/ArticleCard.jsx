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
    <li className="article-card">
      <h2 className="topic-header">
        {topic.charAt(0).toUpperCase() + topic.slice(1)}
      </h2>
      <h2 className="title">{title}</h2>
      <p>
        {" "}
        by {author} {""}
        {new Date(created_at).toLocaleString()}
      </p>
      {votes} votes
      <p> 🗣{comment_count} comments</p>
      <Link to={`/articles/${article_id}`} className="readmore">
        Read more
      </Link>
    </li>
  );
};

export default ArticleCard;
