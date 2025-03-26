import './App.css';

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

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainHero/>
     <OurServices/>
     <HeartHero/>
     <EcoFriendlyCleaning/>
     <StepsSection/>
     <Reviews/>
     <FAQ/>
     <EstimateBanner/>
     <Footer/>

    </div>
  );
}

export default App;
