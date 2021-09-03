import { useState, useEffect } from "react";
import styles from "./navbar.module.scss";

import Logo from "../../images/Logo.svg";

export default function Navbar() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth)

    if (window.innerWidth < 900) {
        setIsMobileView(true);
    }
  })

  return (
    <div className={styles.Navbar}>
      <img src={Logo} alt="Logo" className={styles.Logo}></img>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className={isMobileView ? styles.Hidden : styles.SocialLinks}>
        <ul>
          <li>In</li>
          <li>Git</li>
          <li>M</li>
        </ul>
      </div>
    </div>
  );
}
