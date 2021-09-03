import React from "react";
import styles from "./navbar.module.scss";

import Logo from "../../images/Logo.svg";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <img src={Logo} alt="Logo" className={styles.logo}></img>
      <div className={styles.navlinks}>
        <ul>
          <li>Work</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.sociallinks}>
        <ul>
          <li>In</li>
          <li>Git</li>
          <li>M</li>
        </ul>
      </div>
    </div>
  );
};
