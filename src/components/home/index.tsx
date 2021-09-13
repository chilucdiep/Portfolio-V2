import React, { useState } from "react";
import styles from "./Home.module.scss";
import globals from "../../App.module.scss";

import HeroImg from "../../images/HeroImg.png";
import BillmateLogo from "../../images/BillmateLogo.svg";
import PortfolioV1Logo from "../../images/PortfolioV1Logo.svg";
import { MAIL_ICON, ARROW_ICON } from "../Global/Icons";
import Button from "../Global/Button";
import Daylee from "../Daylee";
import Billmate from "../Billmate";
import Shoppies from "../Shoppies";
import Portfolio from "../Portfolio";

export default function HomeContainer() {
  const [workType, setWorkType] = useState("featured");

  const FeaturedSelectedClasses = (workType === 'featured') ? styles.Selected : null;
  const OtherSelectedClasses = (workType === 'other') ? styles.Selected : null;

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
            A <span>Front-End Developer</span> & <span>UX Designer</span>{" "}
            focused on creating amazing and accessible digital experiences for
            people️.
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
      <div className={styles.WorkContainer} id='work'>
        <h1>Selected Work</h1>
        <div className={styles.Filters}>
          <button
            className={`${FeaturedSelectedClasses} ${styles.FilterButton}`}
            onClick={() => setWorkType("featured")}
          >
            Featured
          </button>
          <button
            className={`${OtherSelectedClasses} ${styles.FilterButton}`}
            onClick={() => setWorkType("other")}
          >
            Other
          </button>
        </div>
        <div className={styles.Works}>
          {workType === "featured" ? (
            <>
              <div className={styles.Left}>
                <div className={styles.WorkText}>
                  <h3>A productivity app</h3>
                  <h2>Daylee</h2>
                  <p>
                    Daylee is a productivity web app where users can utilize
                    various tools and widgets such as habit trackers and bullet
                    journaling to organize their schedule and life. For this
                    project, I created the design system and built the entire
                    front-end design. <strong>**Under Construction**</strong>
                  </p>
                  <a
                    href="https://www.figma.com/file/BH6GRyC4CYVTOO4zrqESCs/Productivity-Board?node-id=0%3A1"
                    target="_blank"
                  >
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <a
                    href="https://www.figma.com/file/BH6GRyC4CYVTOO4zrqESCs/Productivity-Board?node-id=0%3A1"
                    target="_blank"
                  >
                    {/* <img src={Daylee} alt="Arrow Icon" /> */}
                    <Daylee />
                  </a>
                </div>
              </div>
              <div className={styles.Right}>
                <div className={styles.WorkText}>
                  <h3>A client management software</h3>
                  <h2>Billmate</h2>
                  <p>
                    Billmate is an all-in-one platform that helps small
                    businesses manage their clients and operate their day-to-day
                    activities. As part of my internship, I created the entire
                    company website, from wireframing and mockups to
                    development. I also built various main features of the web
                    app.
                  </p>
                  <a href="https://billmate.io/" target="_blank">
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <a href="https://billmate.io/" target="_blank">
                    <div className={styles.LogoContainer}>
                      <img
                        src={BillmateLogo}
                        alt="Arrow Icon"
                        className={styles.BillmateLogo}
                      />
                      <Billmate />
                    </div>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.Left}>
                <div className={styles.WorkText}>
                  <h3>A movie app</h3>
                  <h2>Shoppies</h2>
                  <p>
                    Daylee is a productivity web app where users can utilize
                    various tools and widgets such as habit trackers and bullet
                    journaling to organize their schedule and life. For this
                    project, I created the design system and built the entire
                    front-end design.
                  </p>
                  <a
                    href="https://chilucdiep.github.io/ShopifyChallenge/"
                    target="_blank"
                  >
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <a
                    href="https://chilucdiep.github.io/ShopifyChallenge/"
                    target="_blank"
                  >
                    <Shoppies />
                  </a>
                </div>
              </div>
              <div className={styles.Right}>
                <div className={styles.WorkText}>
                  <h3>My first website ever!</h3>
                  <h2>Portfolio V1</h2>
                  <p>
                    Billmate is an all-in-one platform that helps small
                    businesses manage their clients and operate their day-to-day
                    activities. As part of my internship, I created the entire
                    company website, from wireframing and mockups to
                    development. I also built various main features of the web
                    app.
                  </p>
                  <a href="https://chilucdiep.github.io/Portfolio/" target="_blank">
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <a href="https://chilucdiep.github.io/Portfolio/" target="_blank">
                    <div className={styles.LogoContainer}>
                      <img
                        src={PortfolioV1Logo}
                        alt="Arrow Icon"
                        className={styles.PortfolioV1Logo}
                      />
                      <Portfolio />
                    </div>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
