import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Main</Link>
    </li>
    <li className={window.location.pathname === "/Search" ? "active" : ""}>
      <Link to="/Search">Search</Link>
    </li>
    <li className={window.location.pathname === "/Saved" ? "active" : ""}>
      <Link to="/Saved">Saved</Link>
    </li>
  </ul>;

export default Navpills;
