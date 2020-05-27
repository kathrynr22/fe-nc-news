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
      </select>
      <select defaultValue="order" onChange={props.handleOrder}>
        <option disabled value="Order">
          Order
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortButton;
