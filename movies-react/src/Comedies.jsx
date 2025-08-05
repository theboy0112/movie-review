import React from "react";
import { Link } from "react-router-dom";

function Comedies() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link className="application" to="/application">
            HOME
          </Link>
        </li>
      </ul>
      <h1 style={{ fontSize: "200px" }}>404</h1>
      <h2>Page not found</h2>
    </div>
  );
}
export default Comedies;
