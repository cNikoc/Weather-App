import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className = { styles.nav }>
      {/* <h1 className={styles.h1}>Cristian Nicolás <b>CASTAGNETTO</b></h1> */}
      <NavLink className = { styles.navLink } to = "/home" exact>🚪</NavLink>
      <NavLink className = { styles.navLink } to = "/aboutMe">🙋‍♂️</NavLink>
    </nav>
  );
};

export default Nav;