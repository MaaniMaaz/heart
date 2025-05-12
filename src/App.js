// src/App.js (updated with HomeEditor component)
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
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import About from "./About/AboutUs";
import TeamSection from './TeamSection';
import ServicesEditor from './components/Admin/ServicesEditor';

// Import the blog pages
import BlogListing from '../src/Blog/BlogListing';
import Blog from '../src/Blog/Blog';

//Admin imports
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import Login from './components/Admin/Login';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import DashboardLayout from './components/Admin/DashboardLayout';
import Dashboard from './components/Admin/Dashboard';
import HomeEditor from './components/Admin/HomeEditor';
import AboutEditor from './components/Admin/AboutEditor';
import ContactEditor from './components/Admin/ContactEditor';
import FooterEditor from './components/Admin/FooterEditor';
import BlogEditor from './components/Admin/BlogEditor';
import BlogPostEditor from './components/Admin/BlogPostEditor';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <div className="App">
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path='/' element={
                <>
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
                </>
              }/>
              <Route path='/services' element={
                <>
                  <Navbar/>
                  <Services/>
                  <Footer/>
                </>
              } />
              <Route path='/contact' element={
                <>
                  <Navbar/>
                  <Contact/>
                  <Footer/>
                </>
              } />
              <Route path='/about' element={
                <>
                  <Navbar/>
                  <About/>
                  <Footer/>
                </>
              } />
              
              {/* Blog routes */}
              <Route path='/blog' element={
                <>
                  <Navbar/>
                  <BlogListing />
                  <Footer/>
                </>
              } />
              <Route path='/blog/:blogId' element={
                <>
                  <Navbar/>
                  <Blog />
                  <Footer/>
                </>
              } />

              {/* Admin Auth Route */}
              <Route path='/protected' element={<Login />} />

              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path='/admin' element={<DashboardLayout />}>
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='home' element={<HomeEditor />} />
                  <Route path='about' element={<AboutEditor />} />
                  <Route path='services' element={<ServicesEditor />} />
                  <Route path='contact' element={<ContactEditor />} />
                  <Route path='footer' element={<FooterEditor />} />
                  <Route path='blog' element={<BlogEditor />} />
                  <Route path='blog-post/:blogId' element={<BlogPostEditor />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;