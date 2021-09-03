import React from "react";
import "./App.scss";

import HomeContainer from "./components/home";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <HomeContainer />
    </>
  );
}

