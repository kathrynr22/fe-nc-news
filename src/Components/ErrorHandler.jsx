import React from "react";
import { Link } from "@reach/router";

const ErrorHandler = ({ msg }) => {
  const err = msg ? msg : "Oops something went wrong...";
  return (
    <section>
      <h3>{err}</h3>
      <h3>
        To return to the home page click <Link to="/">here</Link>
      </h3>
    </section>
  );
};

export default ErrorHandler;
