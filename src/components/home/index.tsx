import React from "react";
import styles from "./Home.module.scss";
import globals from "../../App.module.scss";

import HeroImg from "../../images/HeroImg.png";
import Daylee from "../../images/DayleeThumbnail.svg";
import Billmate from "../../images/BillmateThumbnail.svg";
import { MAIL_ICON, ARROW_ICON } from "../Global/Icons";
import Button from "../Global/Button";

export default function HomeContainer() {
  async function copyEmail() {
    const email = "chilucdiep@hotmail.com";

    try {
      await navigator.clipboard.writeText(email);
      alert("Copied email to clipboard: " + email);
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <div className={styles.HomeContainer}>
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
            A <span>Software Developer</span> & <span>UX Designer</span> focused
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
      <div className={styles.WorkContainer}>
        <h1>Selected Work</h1>
        <div className={styles.Filters}>
          <button className={styles.FilterButton}>Featured</button>
          <button className={styles.FilterButton}>All</button>
        </div>
        <div className={styles.Works}>
          <div className={styles.Left}>
            <div className={styles.WorkText}>
              <h3>A productivity app</h3>
              <h2>Daylee</h2>
              <p>
                Daylee is a productivity web app where users can utilize various
                tools and widgets such as habit trackers and bullet journaling
                to organize their schedule and life.
              </p>
              <Button icon={ARROW_ICON} label="View Project" />
            </div>
            <div className={styles.WorkImg}>
              <img src={Daylee} alt="Arrow Icon" />
            </div>
          </div>
          <div className={styles.Right}>
            <div className={styles.WorkText}>
              <h3>A client management software</h3>
              <h2>Billmate</h2>
              <p>
                Billmate is a productivity web app where users can utilize
                various tools and widgets such as habit trackers and bullet
                journaling to organize their schedule and life.
              </p>
              <Button icon={ARROW_ICON} label="View Project" />
            </div>
            <div className={styles.WorkImg}>
              <img src={Billmate} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
