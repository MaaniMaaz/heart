import React from 'react';
import Header from './components/Header';
import './index.css'; // Make sure Tailwind is connected
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
