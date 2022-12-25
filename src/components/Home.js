import React from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>Router Tutorial</h1>
      <p>
        <b>Installation </b>
        npm install react-router-dom
      </p>
      <ol>
        <li>Add Browser Router and Configure Routes</li>
        <li>Routes</li>
        <li>Route</li>
        <li>404 Route Setup - "/*"</li>
        <li>Link - set url for the components </li>
        <li>Outlet - Renders Child component selected</li>
        <li>Nested Routes setup</li>
        <li>URL Params - /:param</li>
        <li>Embedded Routers</li>
        <li>Animated Routers</li>
      </ol>
    </div>
  );
};

export default Home;
