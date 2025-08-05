import React from "react";
import { Link } from "react-router-dom";
import "./CSS/App.css";
import wfmt from "./assets/wfmt.png";
import { useState,useEffect } from "react";
function Homepage() {
  const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);
  
  return (
    <div>
      <h2>
        <img src={wfmt} />
      </h2>
      <div className="home-container">
        <ul>
          <li>
            <Link className="homee" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="signup" to="/signup">
              SIGNUP
            </Link>
          </li>
          <li>
            <Link className="login" to="/login">
              LOGIN
            </Link>
          </li>
          <li>
            <Link className="about" to="/about">
              ABOUT
            </Link>
          </li>   
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
