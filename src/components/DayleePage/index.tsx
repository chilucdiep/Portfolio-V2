import styles from "./DayleePage.module.scss";
import globals from "../../App.module.scss";

export default function AboutContainer() {
  return (
    <section className={styles.DayleeContainer}>
      <section className={styles.Hero}>
        <h1 className={globals.Title}>Daylee</h1>
        <p>
          The productivity web app where users can utilize various tools and
          widgets such as habit trackers and bullet journaling to organize their
          schedule and life.
        </p>
      </section>
    </section>
  );
}
