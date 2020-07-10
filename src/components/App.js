import React from "react";

import Header from "./organisms/Header";
import Hero from "./organisms/Hero";
import Images from "./Images";
import Footer from "./organisms/Footer";
import TwoColumns from "./Two-columns";
import ThreeColumns from "./Three-columns";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main>
        <Header />
        <Hero />
        <Images />
        <TwoColumns />
        <ThreeColumns />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
