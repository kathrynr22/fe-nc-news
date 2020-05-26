import React from "react";

const SortButton = (props) => {
  return (
    <div className="search-box">
      <select defaultValue="Sort" onChange={props.handleSort}>
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortButton;
