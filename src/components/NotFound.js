import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1> 404 Error</h1>
      <p>
        Please check your search query to find what you are looking for or the
        resources you are looking for are no longer available.
      </p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
