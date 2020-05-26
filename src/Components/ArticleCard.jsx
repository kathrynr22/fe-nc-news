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
      <h2>{title}</h2>
      <h2>{topic}</h2>
      <h3>
        {" "}
        by {author} published{created_at}
      </h3>
      <h3>Vote Count: {votes}</h3>
      <h3>Comment Count: {comment_count}</h3>
      <Link to={`/articles/${article_id}`}>Read the full article</Link>
    </article>
  );
};

export default ArticleCard;
