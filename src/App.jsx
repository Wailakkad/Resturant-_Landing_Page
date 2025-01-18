import Navbar from './components/Navbar/Navbar.jsx';
import Contact from './components/contats/Contact.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './utils/ScroolTop/ScroolTop.jsx';
import { Routes, Route } from 'react-router-dom';

import './index.css'

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
