import React, { useState } from "react";
import styles from "./App.module.scss";

import HomeContainer from "./components/Home";
import AboutContainer from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <div className={styles.Container}>
        <Navbar setPage={setPage} />
        {page === `home` ? <HomeContainer /> : null}
        {page === `about` ? <AboutContainer /> : null}
        <Footer />
      </div>
    </>
  );
}
