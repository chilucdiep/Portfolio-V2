import styles from "./Footer.module.scss";

import GithubIcon from "../../images/GithubIcon.png";
import LinkedinIcon from "../../images/LinkedinIcon.png";
import { MAIL_ICON } from "../Global/Icons";

export default function Footer() {
  return (
    <div className={styles.Footer}>
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
      <p>Designed and built by me :)</p>
    </div>
  );
}
