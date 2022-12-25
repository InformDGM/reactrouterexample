import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const NavLink = (restprops) => (
  <Link
    {...restprops}
    // Which is passed to the link
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "green" : "grey",
        },
      };
    }}
  />
);
const Active = () => (
  <div>
    <h2>Active</h2>
    <li>
      <NavLink to="/active">Active Link</NavLink>
    </li>
  </div>
);

const InActive = () => (
  <div>
    <h2>In Active</h2>
    <li>
      <NavLink to="/Inactive">In Active Link</NavLink>
    </li>
  </div>
);

const ActiveLink = (restprops) => {
  return (
    <>
      <h1>Active Links Example</h1>
      <ul></ul>
      {restprops.children}
      <Active path="/active" />
      <InActive path="inactive" />
      <Outlet />
    </>
  );
};

export default ActiveLink;
