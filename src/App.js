import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NestedRoutes from "./components/NestedRoutes";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Account from "./components/Account";
import ActiveLink from "./components/ActiveLink";

function App() {
  return (
    <div className="wrapper">
      <h1>React Router Examples</h1>
      <div
        style={{
          display: "flex",
          background: "grey",
          padding: "10px 0 10px 40px",
          fontSize: "25px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <Link to="/">Home</Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link to="/about">About</Link>{" "}
        </div>
        <div style={{ margin: "10px" }}>
          <Link to="/contact">Contact</Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link to="/nested">Nested Routes</Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link to="/404">404 Error Page</Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link to="/activelink">Active Link</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/nested" element={<NestedRoutes />}>
          <Route path="/nested/account" element={<Account />} />
          <Route path="/nested/profile" element={<Profile />} />
        </Route>
        <Route path="/activelink" element={<ActiveLink />} />
      </Routes>
    </div>
  );
}

export default App;
