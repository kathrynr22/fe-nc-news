import React from "react";
import { Link } from "@reach/router";

const ErrorHandler = () => {
  return (
    <section>
      <h3>
        Sorry something went wrong. To go to the home page, click{" "}
        <Link to="/">here</Link>
      </h3>
    </section>
  );
};

export default ErrorHandler;
