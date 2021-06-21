import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navLinkContainer">
      <NavLink className="navLink" exact activeClassName="navLinkActive" to="/">
        Weather
      </NavLink>{" "}
      <NavLink className="navLink" activeClassName="navLinkActive" to="/search">
        Recipe
      </NavLink>
    </div>
  );
};

export default Nav;
