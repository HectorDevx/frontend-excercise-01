import React from "react";

import Header from "./organisms/Header";
import Hero from "./organisms/Hero";
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
        <TwoColumns />
        <ThreeColumns />
        <Footer />
        {/* 
        <Images />
        */}
      </main>
    </React.Fragment>
  );
}

export default App;
