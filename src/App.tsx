import React from "react";
import styles from "./App.module.scss";

import HomeContainer from "./components/Home";
import AboutContainer from "./components/About";
import Navbar from "./components/Navbar";

export default function App() {
  console.log(window.location.pathname)
  return (
    <>
      <div className={styles.Container}>
        <Navbar />
        {window.location.pathname === `/about` ? <AboutContainer /> : <HomeContainer />}
      </div>
    </>
  );
}
