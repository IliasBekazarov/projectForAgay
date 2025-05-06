import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Testimonials from './pages/Testimonials/Testimonials';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Myschool from './pages/MySchool/Myschool';

import './styles/App.css';
import './i18n';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path='/gallery' element={Gallery}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/myschool" element={<Myschool />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
