import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import Logo from "../../images/Logo.svg";
import GithubIcon from "../../images/GithubIcon.png";
import LinkedinIcon from "../../images/LinkedinIcon.png";
import { MAIL_ICON } from "../Global/Icons";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.Logo}></img>
      </Link>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a href='/#work'>
              Work
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className={styles.SocialLinks}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/chi-luc-diep/" target="_blank">
              <img
                src={LinkedinIcon}
                alt="Github"
                className={styles.NavIcon}
              ></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/chilucdiep" target="_blank">
              <img
                src={GithubIcon}
                alt="Github"
                className={styles.NavIcon}
              ></img>
            </a>
          </li>
          <li>
            <a href="mailto:chilucdiep@hotmail.com">{MAIL_ICON}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
