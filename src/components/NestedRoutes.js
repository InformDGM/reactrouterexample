import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedRoutes = () => {
  return (
    <div>
      <h1>Example for Nested Routes</h1>
      <ol>
        <li>
          <Link to="/nested/account">Account</Link>
        </li>
        <li>
          <Link to="/nested/profile">Profile</Link>
        </li>
      </ol>
      <Outlet />
    </div>
  );
};

export default NestedRoutes;
