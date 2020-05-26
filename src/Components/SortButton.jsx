import React from "react";

const SortButton = (props) => {
  return (
    <div className="sort-dropdown">
      <select defaultValue="Sort" onChange={props.handleSort}>
        <option disabled value="Sort">
          Sort
        </option>
        <option value="created_at">Date</option>
        <option value="comment_count">Number of Comments</option>
        <option value="votes">Votes</option>
        <option value="topic">Topic</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="article_id">Article_id</option>
      </select>
    </div>
  );
};

export default SortButton;
