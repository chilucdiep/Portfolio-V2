import React from "react";
import styles from "./App.module.scss";

import HomeContainer from "./components/home";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <div className={styles.Container}>
        <Navbar />
        <HomeContainer />
      </div>
    </>
  );
}
