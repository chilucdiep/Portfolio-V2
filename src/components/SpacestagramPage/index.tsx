import GithubIcon from "../../images/GithubIcon.png";
import OpenLinkIcon from "../../images/OpenLinkIcon.svg";
import SpacestagramMockups from "../../images/SpacestagramMockup.svg";
import PomodoroCode from "../../images/PomodoroCode.svg";
import Pomodoro from "../../images/Pomodoro.svg";
import TodoCode from "../../images/TodoCode.svg";
import Todo from "../../images/Todo.svg";
import BillmateThumbnail from "../../images/BillmateThumbnail.svg";
import SpacestagramThumbnail from "../../images/SpacestagramThumbnail.svg";

import styles from "./SpacestagramPage.module.scss";
import globals from "../../App.module.scss";

export default function SpacestagramContainer() {
  return (
    <section className={styles.SpacestagramContainer}>
      <section className={styles.Hero}>
        <h1 className={globals.Title}>Spacestagram</h1>
        <p className={styles.Caption}>
          Spacestagram is a web app where space enthousiasts can browse through
          NASA’s astronomy pictures of the day and save their favorites.
        </p>
        <div className={styles.Mockups}>
          <img
            className={styles.DayleeDashboardImg}
            src={SpacestagramMockups}
            alt="Spacestagram App"
          />
        </div>
      </section>
      <section className={styles.ProjectContent}>
        <section className={styles.SideInfo}>
          <ul>
            <li>
              <a
                href="https://chilucdiep.github.io/Spacestagram/"
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
                href="https://github.com/chilucdiep/Spacestagram"
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
            <p>-</p>
          </div>
          <div>
            <h4>Tech Stack</h4>
            <p>HTML</p>
            <p>Scss</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>NASA’s API</p>
            <p>Figma</p>
          </div>
          <div>
            <h4>Timeline</h4>
            <p>1 week</p>
          </div>
        </section>
        <section className={styles.MainContent}>
          <div className={styles.ContentSection}>
            <h2>Project Brief</h2>
            <p>
              I was responsible for designing and building a web app where users
              can browse through NASA’s pictures, read about their context and
              information and save their favorites. Everyday, a new astronomy
              picture of the day is added to the feed page.
            </p>
            <h4>Goal</h4>
            <p>
              Build a web app that would allow space enthousiasts to explore and
              learn more about astronomy. For this project, my goal was to
              utilize clean code practices, a scalable file architecture and
              cutting-edge technologies such as custom hooks and routing using
              React Router V6.
            </p>
          </div>
          <div className={styles.ContentSection}>
            <h2>Some cool features</h2>
            <h4>Routing with React Router V6</h4>
            <p>
              The Spacestagram web app has a 3 pages naviguation. The Home page
              greets the users with some context on what Spacestagram is about
              and a CTA button to allow the users to start exploring the app.
            </p>
            <p>
              This button brings the users to the Feed page where the astronomy
              pictures are displayed in chronological order and a new one is
              added everyday. On this page, the users can also save their
              favorite pictures.
            </p>
            <p>
              When clicking on a picture, the users is brought the the Details
              page, where they can read about the picture’s context and
              information.
            </p>
            <div className={styles.FeaturesGrid}>
              <img src={PomodoroCode} alt="Pomodoro Code" />
              <img src={Pomodoro} alt="Pomodoro" />
            </div>
            <h4>Custom hooks</h4>
            <p>
              For this project, I built 2 custom hooks in order to handle more
              efficiently the pictures’ data. useFetchPictures allows me to
              easily access the pictures coming from the API inside of various
              components inside the app. The useLocalStorage allow the user’s
              favorite pictures to be saved inside of the local storage for a
              better user experience. The hook was mainly implemented to make
              the code cleaner and more scalable when using this functionality.
            </p>
            <h4>The Feed page component</h4>
            <p>
              This is an code snippet of one of the main components of the app.
              The Feed page component utilizes the useFetchPictures hook to
              display the astronomy pictures in chronological order as well as
              lazy loading functionality for better a app performance.
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
