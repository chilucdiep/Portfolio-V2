import React from "react";
import styles from "./About.module.scss";
import globals from "../../App.module.scss";

import AboutImg from "../../images/AboutImg.png";
import Coveo from "../../images/Coveo.svg";
import Billmate from "../../images/Billmate.svg";
import ColoredByte from "../../images/ColoredByte.svg";
import Pratt from "../../images/Pratt.svg";
import Wave from "../../images/Wave.svg";
import MissionImg from "../../images/MissionImg.png";

export default function AboutContainer() {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.Hero}>
        <h1 className={globals.Title}>A quick blurb about me</h1>
        <p>
          I am a driven, curious and detail-oriented front-end developer with
          experience in startups environment. 🚀
        </p>
      </div>
      <div className={styles.Journey}>
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
            From helping businesses manage their sales through Billmate's software, to making
            scheduling and journaling more accessible with Daylee, I’m always
            looking for ways to help people by tackling interesting
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
      <div className={styles.SkillGrid}>
        <div className={styles.Technologies}>
          <h4>Technologies</h4>
          <ul>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS/Scss</p>
            </li>
            <li>
              <p>JavaScript/TypeScript</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Redux & Redux-Saga</p>
            </li>
            <li>
              <p>Next.js</p>
            </li>
            <li>
              <p>Material UI</p>
            </li>
            <li>
              <p>Liquid</p>
            </li>
          </ul>
        </div>
        <div className={styles.Tools}>
          <h4>Tools</h4>
          <ul>
            <li>
              <p>Figma</p>
            </li>
            <li>
              <p>Adobe XD</p>
            </li>
            <li>
              <p>Git</p>
            </li>
            <li>
              <p>Github</p>
            </li>
            <li>
              <p>VS Code</p>
            </li>
            <li>
              <p>Shopify</p>
            </li>
          </ul>
        </div>
        <div className={styles.Skills}>
          <h4>Skills</h4>
          <ul>
            <li>
              <p>Responsive design</p>
            </li>
            <li>
              <p>Clean code & best pratices</p>
            </li>
            <li>
              <p>Design systems</p>
            </li>
            <li>
              <p>Algorithms & data structures</p>
            </li>
            <li>
              <p>Accessibility</p>
            </li>
            <li>
              <p>Prototyping</p>
            </li>
            <li>
              <p>Design Thinking</p>
            </li>
            <li>
              <p>Project management</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Experience}>
        <h2>I create products for your business needs.</h2>
        <div className={styles.LogoGrid}>
          <img src={Coveo} alt="Coveo Logo" />
          <img src={Billmate} alt="Billmate Logo" className={styles.Smaller} />
          <img src={ColoredByte} alt="ColoredByte Logo" />
          <img src={Pratt} alt="Pratt Logo" className={styles.Smaller} />
        </div>
        <img src={Wave} alt="Wave Separation" />
      </div>
      <div className={styles.Mission}>
        <h3>What is important to me</h3>
        <h2>My mission is to <span>empower people</span> through user-centered software</h2>
        <div className={styles.Description}>
          <div className={styles.Text}>
            <p className={styles.Caption}>
              I strive to create engaging user experiences that can help people
              and I love creating products that provide solutions to real world
              problems. Here are some of the things that help me thrive:
            </p>
            <ul>
              <li>
                <h4>Collaboration & Ownership</h4>
                <p>
                  Utilizing different people’s strenghts to create a solution
                  and have an impact. Ownership promotes a proactive and
                  committed behavior.
                </p>
              </li>
              <li>
                <h4>Diversity & Open-mindedness</h4>
                <p>
                  To me, diversity means the sharing of unique experiences,
                  backgrounds and different point of views to bring new
                  perspectives and constant growth.
                </p>
              </li>
              <li>
                <h4>Growth Mindset </h4>
                <p>
                  Learning is my primary goal. I love trying new things and
                  taking on interesting challenges. I also believe that
                  mentorship, feedback and transparency is essential for growth.
                </p>
              </li>
            </ul>
          </div>
          <img src={MissionImg} alt="Pratt Logo" className={styles.Smaller} />
        </div>
      </div>
    </div>
  );
}
