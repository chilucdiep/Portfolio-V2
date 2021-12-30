import React from "react";
import styles from "./Hero.module.scss";
import globals from "../../../App.module.scss";

import Button from "../../Global/Button";
import HeroImg from "../../../images/HeroImg.png";
import { MAIL_ICON } from "../../Global/Icons";

export default function Hero() {
  async function copyEmail() {
    const email = "chilucdiep@hotmail.com";

    try {
      await navigator.clipboard.writeText(email);
      alert("You copied " + email + " to your clipboard!");
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  }
  
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroText}>
        <h3>Oh hello! 👋</h3>
        <div className={styles.Typewriter}>
          <h1 className={globals.Title}>I'm Chi-Luc</h1>
          {/* <ul className="dynamic-txts">
              <li>
                <h1>YouTuber</h1>
              </li>
              <li>
                <h1>Designer</h1>
              </li>
              <li>
                <h1>Developer</h1>
              </li>
              <li>
                <h1>Freelancer</h1>
              </li>
            </ul> */}
        </div>
        <p>
          A <span>Front-End Developer</span> & <span>UX Designer</span> focused
          on creating amazing and accessible digital experiences for people️.
        </p>
        <div className={styles.Button}>
          <Button
            icon={MAIL_ICON}
            label="chilucdiep@hotmail.com"
            onClick={copyEmail}
          />
        </div>
      </div>
      <img src={HeroImg} alt="Hero Section" className={styles.HeroImg}></img>
    </div>
  );
}
