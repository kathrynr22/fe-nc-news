import React from "react";

const OrderButton = (props) => {
  return (
    <div className="order-box">
      <select defaultValue="Order" onChange={props.handleOrder}>
        <option disabled value="Order">
          Order
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default OrderButton;
