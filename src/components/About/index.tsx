import styles from "./About.module.scss";
import globals from "../../App.module.scss";

import AboutImg from "../../images/AboutImage.png";
import Coveo from "../../images/Coveo.svg";
import Billmate from "../../images/Billmate.svg";
import ColoredByte from "../../images/ColoredByte.svg";
import Pratt from "../../images/Pratt.svg";
import Wave from "../../images/Wave.svg";
import MissionImg from "../../images/MissionImg.png";
import { TechnologiesList, ToolsList, SkillsList } from "./SkillsList";

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
          <img src={AboutImg} alt="Profile About" />
        </div>
        <div className={styles.AboutText}>
          <h3>As a passionate self-taught</h3>
          <h2>My journey in tech</h2>
          <p>
            My name is Chi-Luc and I am a Software Developer based in 📍
            Montreal, Canada. I’m currently at{" "}
            <a
              href="https://www.poka.io"
              target="_blank"
              style={{ color: "#6773FF" }}
              rel="noreferrer"
            >
              <strong>Poka</strong>
            </a>{" "}
            where I have a direct impact on the business' metrics as a Frontend
            Developer working on the pricing plans & web admin.
          </p>
          <p>
            Previously, I worked as a UX Designer at{" "}
            <a
              href="https://www.coveo.com"
              target="_blank"
              style={{ color: "#6773FF" }}
              rel="noreferrer"
            >
              <strong>Coveo</strong>
            </a>{" "}
            where I delivered usage analytics solutions to Coveo's clients. From
            revamping a master component in the design system, to designing a
            Data Health feature, I’m always looking for ways to improve the user
            experience by tackling interesting challenges.
          </p>
          <p>
            I spent 3 years as a Electrical/Mechanical Engineering Student at
            Polytechnique Montreal. Driven by curiosity, I discovered the
            ✨magic✨ of web development and went on the path of self-study with
            the help of amazing mentors, internships and online ressources.
          </p>
        </div>
      </div>
      <div className={styles.SkillGrid}>
        <ListComponent listType="Technologies" />
        <ListComponent listType="Tools" />
        <ListComponent listType="Skills" />
      </div>
      <div className={styles.Experience}>
        <h2>I create products that have an impact.</h2>
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
        <h2>
          My mission is to <span>empower people</span> through user-centered
          software
        </h2>
        <div className={styles.Description}>
          <div className={styles.Text}>
            <p className={styles.Caption}>
              I strive to create engaging user experiences that can help people
              and I love creating products that provide solutions to real world
              problems. Here are some of the things that help me thrive:
            </p>
            <ul>
              <li>
                <h4>Team work makes dream work</h4>
                <p>
                  I deeply value collaboration, clear & transparent
                  communication and good team chemistry as they allow me to
                  thrive in my work. To me, Working as a team means utilizing
                  different people’s strenghts to create a solution and have an
                  impact.
                </p>
              </li>
              <li>
                <h4>Quality & Attention to detail</h4>
                <p>
                  I care about the user experience as much as the developer
                  experience. It is important for me to create maintainable and
                  scalable code, As a Frontend developer, this pairs well with
                  my modern CSS skills and a strong understanding of UX
                  fundamentals.
                </p>
              </li>
              <li>
                <h4>Growth mindset </h4>
                <p>
                  I am driven, curious and a fast learner. I love trying new
                  things and challenging myself to keep growing and learning. I
                  also believe that mentorship, feedback and transparency is
                  essential for growth.
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

function ListComponent({ listType }: any) {
  let listMarkup;

  if (listType === "Technologies") {
    listMarkup = TechnologiesList?.map((skill) => (
      <li key={skill}>
        <p>{skill}</p>
      </li>
    ));
  }

  if (listType === "Tools") {
    listMarkup = ToolsList?.map((skill) => (
      <li key={skill}>
        <p>{skill}</p>
      </li>
    ));
  }

  if (listType === "Skills") {
    listMarkup = SkillsList?.map((skill) => (
      <li key={skill}>
        <p>{skill}</p>
      </li>
    ));
  }

  return (
    <div>
      <h4>{listType}</h4>
      <ul>{listMarkup}</ul>
    </div>
  );
}
