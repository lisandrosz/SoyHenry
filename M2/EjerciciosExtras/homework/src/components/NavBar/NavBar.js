import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../logoHenry.png";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <NavLink exact to="/">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </NavLink>

        <NavLink exact to={"/"}>
          Home
        </NavLink>

        <NavLink exact to={"/filter/posts"}>
          Posts
        </NavLink>
      </div>
      <nav>
        <ul className="list">
          <li className="list-item"></li>
          <li className="list-item"></li>
        </ul>
      </nav>
    </header>
  );
}
