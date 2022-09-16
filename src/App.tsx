import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

import HomeContainer from "./components/Home";
import AboutContainer from "./components/About";
import DayleeContainer from "./components/DayleePage";
import SpacestagramContainer from "./components/SpacestagramPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/daylee" element={<DayleeContainer />} />
          <Route path="/spacestagram" element={<SpacestagramContainer />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
