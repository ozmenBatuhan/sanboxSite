import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Interaction from "./components/Interaction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Interaction />
      <Footer />
    </div>
  );
}
