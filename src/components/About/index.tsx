import React from "react";
import styles from "./About.module.scss";

import AboutImg from "../../images/AboutImg.png";

export default function AboutContainer() {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.Hero}>
        <h1 className="title">A quick blurb about me</h1>
        <p className="caption">
          I am a driven, curious and detail-oriented front-end developer with
          experience in startups environment. 🚀
        </p>
      </div>
      <div className={styles.Experience}>
        <div className={styles.AboutImg}>
          <img src={AboutImg} alt="Profile Image" />
        </div>
        <div className={styles.AboutText}>
          <h3>As a passionate self-taught</h3>
          <h2>My journey in tech</h2>
          <p>
            My name is Chi-Luc and I am a Software Developer based in 📍
            Montreal, Canada. I’m currently a UX Designer Intern at Coveo.
          </p>
          <p>
            From helping businesses manage sales through Billmate, to making
            scheduling and journaling more accessible with Daylee, I’m always
            looking for ways to empower people by tackling interesting
            challenges.
          </p>
          <p>
            I spent the last 3 years developing my problem solving and design
            skills as a Mechanical Engineering Student at Polytechnique
            Montreal. Driven by curiosity, I discovered the magic of web
            development and went on the path of self-study with the help of
            amazing mentors and online ressources.
          </p>
          <p>
            In my free time, you can find me reading, weightlifting and solving
            problems through Jiu-Jitsu and bouldering.
          </p>
        </div>
      </div>
      <div className={styles.Mission}></div>
    </div>
  );
}
