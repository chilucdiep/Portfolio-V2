import GithubIcon from "../../images/GithubIcon.png";
import OpenLinkIcon from "../../images/OpenLinkIcon.svg";
import DayleeDashboard from "../../images/DayleeDashboard.svg";
import DayleeLanding from "../../images/DayleeLanding.svg";
import DesignSystem from "../../images/DesignSystem.svg";
import TypoReturn from "../../images/TypoReturn.svg";
import TypoProps from "../../images/TypoProps.svg";
import TypoElement from "../../images/TypoElement.svg";
import TypoVariants from "../../images/TypoVariants.svg";
import PomodoroCode from "../../images/PomodoroCode.svg";
import Pomodoro from "../../images/Pomodoro.svg";
import TodoCode from "../../images/TodoCode.svg";
import Todo from "../../images/Todo.svg";
import BillmateThumbnail from "../../images/BillmateThumbnail.svg";
import SpacestagramThumbnail from "../../images/SpacestagramThumbnail.svg";

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
              <a
                href="https://daylee-web.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
                className={styles.Link}
              >
                <img
                  src={OpenLinkIcon}
                  alt="OpenLinkIcon"
                  className={styles.NavIcon}
                ></img>
                View live
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Daylee-Digital-Journal/daylee"
                rel="noreferrer"
                target="_blank"
                className={styles.Link}
              >
                {" "}
                <img
                  src={GithubIcon}
                  alt="GithubIcon"
                  className={styles.NavIcon}
                ></img>
                View github
              </a>
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
              I was responsible for designing and building the Daylee website
              and web app using React. This includes building a landing page and
              a dashboard with multiple productivity tools such as a pomodoro
              timer, habit tracker, to-do lists, and more.
            </p>
            <h4>Problem</h4>
            <p>
              Students, professionals or anyone trying to organize their life
              and schedule can currently either use analog methods, a multitude
              of productivity tools that scatter important information, or a
              very hard to learn software like Notion.
            </p>
            <h4>Goal</h4>
            <p>
              Provide an easy and intuitive way to balance work, projects,
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
            <h4>Typography Component</h4>
            <img
              src={TypoReturn}
              alt="Typo Return"
              className={styles.TypoReturn}
            />
            <div className={styles.TypoGrid}>
              <div>
                <p>Takes in props</p>
                <img src={TypoProps} alt="Typo Props" />
              </div>
              <div>
                <p>To define element type</p>
                <img src={TypoElement} alt="Typo Element" />
              </div>
              <div>
                <p>And the variants & styling</p>
                <img src={TypoVariants} alt="Typo Variants" />
              </div>
            </div>
          </div>
          <div className={styles.ContentSection}>
            <h2>Some cool features</h2>
            <h4>Pomodoro timer</h4>
            <p>
              The pomodoro timer is a time manaagement method that promotes
              focus time with its 25 minutes work interval followed by a 5
              minutes break. In addition of starting and pausing the timer, this
              feature also keeps track of the number of cycles/rounds completed
              paired with a goal of rounds to achieve.
            </p>
            <div className={styles.FeaturesGrid}>
              <img src={PomodoroCode} alt="Pomodoro Code" />
              <img src={Pomodoro} alt="Pomodoro" />
            </div>
            <h4>To-do list</h4>
            <p>
              The to-do list allows the user to plan their daily tasks with the
              option to reflect on the day for gratitude practice or
              introspection. This feature was implemented with the useRef hook
              to allow the user the option to add a to-do by pressing the
              “Enter” key. This gives the component a seemless user experience.
            </p>
            <div className={styles.FeaturesGrid}>
              <img src={TodoCode} alt="Todo Code" />
              <img src={Todo} alt="Todo" />
            </div>
          </div>
          <div className={styles.ContentSection}>
            <h2>Lessons learned & next steps</h2>
            <p>Section incoming... Since project is still on going :D</p>
          </div>
          <div className={styles.ContentSection}>
            <h2>Other projects</h2>
            <div className={styles.FeaturesGrid}>
              <a href="https://daylee-web.herokuapp.com/">
                <img src={BillmateThumbnail} alt="Billmate Thumbnail" />
              </a>
              <a href="https://chilucdiep.github.io/Spacestagram/">
                <img src={SpacestagramThumbnail} alt="Spacestagram Thumbnail" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
