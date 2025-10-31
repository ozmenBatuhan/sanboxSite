import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Interaction from './components/Interaction';
import Footer from './components/Footer';
import './App.css'; // Özel font importları için

function App() {
  return (
    <div className="font-sans text-gray-900"> {/* Varsayılan font ve metin rengi */}
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Interaction />
      </main>
      <Footer />
    </div>
  );
}

export default App;