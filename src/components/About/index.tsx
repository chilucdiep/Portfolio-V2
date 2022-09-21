import styles from "./About.module.scss";
import globals from "../../App.module.scss";

import AboutImg from "../../images/AboutImage.png";
import Coveo from "../../images/Coveo.svg";
import Billmate from "../../images/Billmate.svg";
import ColoredByte from "../../images/ColoredByte.svg";
import Pratt from "../../images/Pratt.svg";
import Wave from "../../images/Wave.svg";
import MissionImg from "../../images/MissionImg.png";
import { TechnologiesList, ToolsList, SkillsList } from  './SkillsList'

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
            Montreal, Canada. I’m currently working as a Frontend Developer at Poka.
          </p>
          <p>
            From delivering insightful usage analytics to Coveo's clients as a UX Designer, 
            to impacting directly Poka's business metrics as a Frontend Developer working on the pricing plans & web admin, 
            I’m always looking for ways to improve the user experience by tackling interesting challenges.
          </p>
          <p>
            I spent 3 years as a Electrical/Mechanical Engineering Student at Polytechnique
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
        <ListComponent listType='Technologies' />
        <ListComponent listType='Tools' />
        <ListComponent listType='Skills' />
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
                <h4>Collaboration & Ownership</h4>
                <p>
                  I believe the feeling of ownership shared among team members
                  promotes a more proactive approach. Working as a team means
                  utilizing different people’s strenghts to create a solution
                  and have an impact.
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
                  Learning is my main focus. I love trying new things and
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

function ListComponent({ listType }: any) {
  let listMarkup;

  if (listType === 'Technologies') {
    listMarkup = TechnologiesList?.map(skill => (
      <li key={skill}>
        <p>{skill}</p>
      </li>
    ))
  }

  if (listType === 'Tools') {
    listMarkup = ToolsList?.map(skill => (
      <li key={skill}>
        <p>{skill}</p>
      </li>
    ))
  }

  if (listType === 'Skills') {
    listMarkup = SkillsList?.map(skill => (
      <li key={skill}>
        <p>{skill}</p>
      </li>
    ))
  }

  return (
    <div>
      <h4>{listType}</h4>
      <ul>
      {listMarkup}
      </ul>
    </div>
  )
}
