import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="logo text-glow-hover nav-brand">
        Brillaris Global
      </Link>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item text-glow-hover">
          Home
        </Link>
        <div className="nav-item nav-dropdown-trigger text-glow-hover" style={{ cursor: 'pointer', position: 'relative' }}>
          Company <ChevronDown size={14} />
          <div className="dropdown-menu">
            <Link to="/about">About Us</Link>
            <Link to="/leadership">Leadership</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>
        <Link to="/company-services" className="nav-item text-glow-hover">
          Services
        </Link>
        <Link to="/services" className="nav-item text-glow-hover">
          Solutions
        </Link>
        <Link to="/opportunities" className="nav-item text-glow-hover">
          Opportunities
        </Link>
      </div>

      <div className="desktop-only" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/signin" style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--tertiary)', color: 'var(--tertiary)', borderRadius: '0.25rem', textDecoration: 'none', backgroundColor: 'transparent' }} className="hover:bg-tertiary/10 transition-colors">
          Sign In
        </Link>
        <button className="contact-btn btn-glow-hover">
          Join Elite
        </button>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}


