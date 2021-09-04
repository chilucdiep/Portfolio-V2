import React from "react";
import styles from "./App.module.scss";

import HomeContainer from "./components/Home";
import Navbar from "./components/Navbar";

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
