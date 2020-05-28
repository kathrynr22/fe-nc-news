import React from "react";
import { Link } from "@reach/router";

const ErrorHandler = ({ err }) => {
  //const msg = err.response.data.msg;

  const error = err ? err : "Oops something went wrong...";
  return (
    <section>
      <h3>{error}</h3>
      <h3>
        To return to the home page click <Link to="/">here</Link>
      </h3>
    </section>
  );
};

export default ErrorHandler;
