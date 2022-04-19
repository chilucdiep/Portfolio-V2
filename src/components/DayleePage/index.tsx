import { Link } from "react-router-dom";

import GithubIcon from "../../images/GithubIcon.png";
import DayleeDashboard from "../../images/DayleeDashboard.svg";
import DayleeLanding from "../../images/DayleeLanding.svg";
import DesignSystem from "../../images/DesignSystem.svg";

import styles from "./DayleePage.module.scss";
import globals from "../../App.module.scss";

export default function AboutContainer() {
  return (
    <section className={styles.DayleeContainer}>
      <section className={styles.Hero}>
        <h1 className={globals.Title}>Daylee</h1>
        <p className={styles.Caption}>
          The productivity web app where users can utilize various tools and
          widgets such as habit trackers and bullet journaling to organize their
          schedule and life.
        </p>
        <div className={styles.Mockups}>
          <img
            className={styles.DayleeDashboardImg}
            src={DayleeDashboard}
            alt="Daylee Dashboard"
          />
          <img src={DayleeLanding} alt="Daylee DayleeLanding" />
        </div>
      </section>
      <section className={styles.ProjectContent}>
        <section className={styles.SideInfo}>
          <ul>
            <li>
              <Link to="/about" className={styles.Link}>
                <img
                  src={GithubIcon}
                  alt="Github"
                  className={styles.NavIcon}
                ></img>
                View live
              </Link>
            </li>
            <li>
              <Link to="/about">
                {" "}
                <img
                  src={GithubIcon}
                  alt="Github"
                  className={styles.NavIcon}
                ></img>
                View github
              </Link>
            </li>
          </ul>
          <div>
            <h4>Role</h4>
            <p>Front-End Developer</p>
            <p>Product Designer</p>
          </div>
          <div>
            <h4>Team</h4>
            <p>Back-End Developer</p>
          </div>
          <div>
            <h4>Tech Stack</h4>
            <p>HTML</p>
            <p>Scss</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Next.js</p>
            <p>GraphQL</p>
            <p>Figma</p>
          </div>
          <div>
            <h4>Timeline</h4>
            <p>On going</p>
          </div>
        </section>
        <section className={styles.MainContent}>
          <div className={styles.ContentSection}>
            <h2>Project Brief</h2>
            <p>
              I was responsible for designing and building the company website
              including the Home, About, Pricing, Contact pages using React, as
              well as setting-up the internationalization of the website with
              i18next for better accesibility.
            </p>
            <h4>Problem</h4>
            <p>
              Students, professionals or anyone trying to organize their life
              and schedule can currently use analog methods, a multitude of
              productivity tools that scatter important information, or a very
              hard software like Notion.
            </p>
            <h4>Goal</h4>
            <p>
              Provide an easy and intuitive way to balancing work, projects,
              social life and personal growth in a all-in-one solution.
            </p>
          </div>
          <div className={styles.ContentSection}>
            <h2>Design system</h2>
            <p>
              For better consistency throughout the app and a better developer
              experience, I created and implemented the Daylee’s design system
              and component library. This design system lay down the rules to
              follow when it comes to typography, color, buttons, input,
              branding, and more.
            </p>
            <img src={DesignSystem} alt="Design System" />
            <p>
              Here is a simple example of a flexible, re-usable, easy to use
              component of the design system I implemented.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
