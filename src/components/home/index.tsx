import React from "react";
import styles from "./home.module.scss";

import HeroImg from "../../images/HeroImg.png";

export default function HomeContainer() {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.Hero}>
        <div className={styles.HeroText}>
          <h3>Oh hello! 👋 </h3>
          <h1 className="title">I'm Chi-Luc</h1>
          <p className="caption">
            A <span>Software Developer</span> & <span>UX Designer</span> focused on creating amazing and
            accessible digital experiences for people️.
          </p>
          <button>chilucdiep@hotmail.com</button>
        </div>
        <img src={HeroImg} alt="Hero Image" className={styles.HeroImg}></img>
      </div>
    </div>
  );
}
