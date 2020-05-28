import React from "react";
import { Link } from "@reach/router";

const ErrorHandler = ({ err }) => {
  //const msg = err.response.data.msg;
  console.log("inside error");
  console.log(err);
  const error = err ? err : "oops something went wrong";
  return (
    <section>
      <h3>{error}</h3>
    </section>
  );
};

export default ErrorHandler;
