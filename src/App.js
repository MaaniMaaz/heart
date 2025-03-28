import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import OurServices from './OurServices';
import EcoFriendlyCleaning from './EcoFriendly';
import FAQ from './FAQ';
import Footer from './Footer';
import HeartHero from "./HeartHero";
import Navbar from './NavHero';
import Reviews from './Reviews';
import StepsSection from './Steps';
import EstimateBanner from './EstimateBanner';
import MainHero from './MainHero';
import Services from "./Services/Services"
import Contact from "./Contact/Contact"
import About from "./About/AboutUs"

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={
        <> 
     <MainHero/>
     <OurServices/>
     <HeartHero/>
     <EcoFriendlyCleaning/>
     <StepsSection/>
     <Reviews/>
     <FAQ/>
     <EstimateBanner/>
     </>
      }/>
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
    
     </Routes>
     <Footer/>
     </Router>

    </div>
  );
}

export default App;
