import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import ParallaxShowcase from './components/ParallaxShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ToolsGrid />
        <ParallaxShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
