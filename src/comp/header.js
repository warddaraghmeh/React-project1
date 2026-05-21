import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <header className="hide-when-mobile">
        <Link to="/">
          <h1>Web Basics</h1>
        </Link>
        <button
          className="theme-btn"
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign-in
              </NavLink>
            </li>
          )}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign-up
              </NavLink>
            </li>
          )}
          {user && (
            <li
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("User signed out successfully");
                  })
                  .catch((error) => {
                    console.error("Error signing out: ", error);
                  });
              }}
              className="main-list"
            >
              <NavLink className="main-link">Sign-Out</NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
                About
              </NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/profile">
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </header>

      <header style={{ backgroundColor: "gray" }} className="show-when-mobile">
        <h1>Web Basics</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/">Full Course</Link>
              </li>
              <li>
                <NavLink to="/javascript">Crash Course</NavLink>
              </li>
              <li>
                <a href="/">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/">Full Course</a>
              </li>
              <li>
                <a href="/">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="/">project 1</a>
                  </li>
                  <li>
                    <a href="/">project 2</a>
                  </li>
                  <li>
                    <a href="/">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="/">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
