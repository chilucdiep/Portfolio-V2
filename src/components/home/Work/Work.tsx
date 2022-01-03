import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./Work.module.scss";

import Button from "../../Global/Button";
import BillmateLogo from "../../../images/BillmateLogo.svg";
import PortfolioV1Logo from "../../../images/PortfolioV1Logo.svg";
import { ARROW_ICON } from "../../Global/Icons";
import Daylee from "../../Daylee";
import Billmate from "../../Billmate";
import Shoppies from "../../Shoppies";
import Portfolio from "../../Portfolio";
// import { ArrowLeft } from "@material-ui/icons";

export default function Work() {
  const [featuredWork, setFeaturedWork] = useState(true);
  const transition = useTransition(featuredWork, {
    from: { y: 200, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  const FeaturedSelectedClasses = featuredWork ? styles.Selected : null;
  const OtherSelectedClasses = !featuredWork ? styles.Selected : null;

  console.log(featuredWork);

  return (
    <div className={styles.WorkContainer} id="work">
      <h1>Selected Work</h1>
      <div className={styles.Filters}>
        <button
          className={`${FeaturedSelectedClasses} ${styles.FilterButton}`}
          onClick={() => setFeaturedWork(true)}
        >
          Featured
        </button>
        <button
          className={`${OtherSelectedClasses} ${styles.FilterButton}`}
          onClick={() => setFeaturedWork(false)}
        >
          Other
        </button>
      </div>
      <div className={styles.Works}>
        {transition((style, item) =>
          item ? (
            <animated.div style={style}>
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
                  <p>
                    TypeScript, React, Next.js, Scss,
                    <a
                      href="https://www.figma.com/file/BH6GRyC4CYVTOO4zrqESCs/Productivity-Board?node-id=0%3A1"
                      target="_blank"
                      style={{ color: "#6773FF" }}
                    >
                      <strong> Figma</strong>
                    </a>
                  </p>
                  <a href="https://daylee-web.herokuapp.com/" target="_blank">
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <div className={styles.Overlay}></div>
                  <a href="https://daylee-web.herokuapp.com/" target="_blank">
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
                  <p>TypeScript, React, Redux-Saga, Next.js, Scss, Figma</p>
                  <a href="https://billmate.io/" target="_blank">
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <div className={styles.Overlay}></div>
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
            </animated.div>
          ) : (
            <animated.div style={style}>
              <div className={styles.Left}>
                <div className={styles.WorkText}>
                  <h3>A movie app</h3>
                  <h2>Shoppies</h2>
                  <p>
                    The Shoppies is movie awards app where users can search for
                    a movie, read its information and add/remove 5 movie
                    nominations. For this fun challenge, I fetched the OMDB’s
                    API to display the movies posters and information.
                  </p>
                  <p>React, Scss, Figma</p>
                  <a
                    href="https://chilucdiep.github.io/ShopifyChallenge/"
                    target="_blank"
                  >
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <div className={styles.Overlay}></div>
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
                    This is the first website I ever built after discovering web
                    development and UX design. I am really proud of this project
                    because this is where I first learned to use Figma HTML &
                    CSS. This portfolio displays some of my older projects.
                  </p>
                  <p>JavaScript, HTML, Scss, Figma</p>
                  <a
                    href="https://chilucdiep.github.io/Portfolio/"
                    target="_blank"
                  >
                    <Button icon={ARROW_ICON} label="View Project" />
                  </a>
                </div>
                <div className={styles.WorkImg}>
                  <a
                    href="https://chilucdiep.github.io/Portfolio/"
                    target="_blank"
                  >
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
            </animated.div>
          )
        )}
      </div>
    </div>
  );
}
