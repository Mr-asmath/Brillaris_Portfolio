import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import About2 from './About2';
import Leadership from './Leadership';
import Careers from './Careers';
import CompanyProducts from './CompanyProducts';
import CompanyServices from './CompanyServices';
import Services from './Services';
import Opportunities from './Opportunities';
import JobDetail from './JobDetail';
import JobApply from './JobApply';
import SignIn from './SignIn';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company-products" element={<CompanyProducts />} />
        <Route path="/company-services" element={<CompanyServices />} />
        <Route path="/services" element={<Services />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/apply" element={<JobApply />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </BrowserRouter>
  );
}

export default App;
