import { ArrowRight, Box, Shield, Briefcase, PlayCircle, Quote, Cpu, Globe, TrendingUp, BookOpen, Users, Lightbulb, ShieldCheck, Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="hero-tag">
            <span className="hero-tag-dot"></span>
            <span className="hero-tag-text">TECHNOLOGY Â· INNOVATION</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="hero-title">
            Building Solutions.<br/>
            Creating Impact.<br/>
            <em>Shaping the Future.</em>
          </motion.h1>
          
          <motion.div variants={fadeUp}>
            <p className="hero-subtitle" style={{ color: '#FFFFFF', opacity: 0.9 }}>
              Strategic guidance and robust technology solutions to navigate complexity,<br />drive sustainable growth, and architect the institutions of tomorrow.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-actions">
            <button className="btn-primary">
              EXPLORE PRODUCTS
            </button>
            <button className="btn-outline" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#FFFFFF' }}>
              VIEW CAPABILITIES
            </button>
          </motion.div>
        </motion.div>

      </section>

      {/* 1b. Stats Section (Brillaris Global at a Glance) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)' }}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Brillaris Global at a <em>Glance</em></h2>
          </motion.div>
          
          <motion.div 
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="stat-item">
              <h3>2025</h3>
              <p>FOUNDED</p>
            </motion.div>
            <motion.div variants={fadeUp} className="stat-item">
              <h3>10+</h3>
              <p>TEAM MEMBERS</p>
            </motion.div>
            <motion.div variants={fadeUp} className="stat-item">
              <h3>2+</h3>
              <p>LIVE / DELIVERED PROJECTS</p>
            </motion.div>
            <motion.div variants={fadeUp} className="stat-item">
              <h3>3+</h3>
              <p>PROJECTS IN DEVELOPMENT & PIPELINE</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Ecosystem Grid (Three Highlight Cards) */}
      <section className="ecosystem-section">
        <div className="ecosystem-container">
          <motion.div 
            className="ecosystem-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Card 01 */}
            <motion.div variants={fadeUp} className="grid-cell">
              <div className="grid-cell-bar"></div>
              <Box className="grid-cell-icon" size={32} />
              <div className="grid-cell-status">PRODUCT DEVELOPMENT</div>
              <h3>Our Products</h3>
              <p>Innovative digital products designed to solve practical problems and create lasting value.</p>
              <a href="#" className="grid-cell-link text-glow-hover">
                View Products <ArrowRight size={14} />
              </a>
            </motion.div>
            {/* Card 02 */}
            <motion.div variants={fadeUp} className="grid-cell">
              <div className="grid-cell-bar"></div>
              <Cpu className="grid-cell-icon" size={32} />
              <div className="grid-cell-status">TECHNOLOGY</div>
              <h3>Our Capabilities</h3>
              <p>Technology expertise across software development, AI, mobile, backend, infrastructure, and DevOps.</p>
              <a href="#" className="grid-cell-link text-glow-hover">
                View Capabilities <ArrowRight size={14} />
              </a>
            </motion.div>
            {/* Card 03 */}
            <motion.div variants={fadeUp} className="grid-cell">
              <div className="grid-cell-bar"></div>
              <Briefcase className="grid-cell-icon" size={32} />
              <div className="grid-cell-status">CLIENT SOLUTIONS</div>
              <h3>Client Solutions</h3>
              <p>Custom technology solutions developed around real business requirements and user needs.</p>
              <a href="#" className="grid-cell-link text-glow-hover">
                View Solutions <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* 3. Company Statement / Quote Section */}
      <section className="vision-banner">
        <motion.div 
          className="vision-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="vision-quote">"We believe technology becomes meaningful when it solves real problems, creates new possibilities, and improves the way people and businesses live, work, and grow."</h2>
          <a href="#" className="grid-cell-link text-glow-hover" style={{ marginTop: '1.5rem', color: 'var(--background)' }}>
            Discover Our Vision <ArrowRight size={14} />
          </a>
        </motion.div>
      </section>

      {/* 3b. Why Join Us Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3rem', fontWeight: 'normal', color: 'var(--on-surface)' }}>Why Brillaris Global</h2>
          </motion.div>
          
          <div className="why-brillaris-grid">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="why-brillaris-item">
              <div className="why-brillaris-icon-wrapper">
                <Globe className="why-brillaris-icon" size={24} />
              </div>
              <h3>Global Perspective</h3>
              <p>Deep understanding of nuanced international markets and cross-border dynamics.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="why-brillaris-item">
              <div className="why-brillaris-icon-wrapper">
                <TrendingUp className="why-brillaris-icon" size={24} />
              </div>
              <h3>Strategic Thinking</h3>
              <p>Forward-looking approaches that anticipate market shifts and capitalize on emerging trends.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="why-brillaris-item">
              <div className="why-brillaris-icon-wrapper">
                <Lightbulb className="why-brillaris-icon" size={24} />
              </div>
              <h3>Innovation</h3>
              <p>Integrating advanced methodologies and technologies into traditional business models.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="why-brillaris-item">
              <div className="why-brillaris-icon-wrapper">
                <ShieldCheck className="why-brillaris-icon" size={24} />
              </div>
              <h3>Trust</h3>
              <p>Built on unwavering integrity, transparency, and a commitment to our clients' success.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="why-brillaris-item">
              <div className="why-brillaris-icon-wrapper">
                <Users className="why-brillaris-icon" size={24} />
              </div>
              <h3>People First</h3>
              <p>Fostering collaborative partnerships and investing in world-class talent.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="why-brillaris-item">
              <div className="why-brillaris-icon-wrapper">
                <Flag className="why-brillaris-icon" size={24} />
              </div>
              <h3>Impact</h3>
              <p>Dedicated to delivering measurable, sustainable results that drive enterprise value.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2b. Vision & Mission Section (Moved here) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory)', color: 'var(--primary-container)', position: 'relative', overflow: 'hidden', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'radial-gradient(var(--primary-container) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="vision-mission-grid">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.5rem', fontWeight: 'normal', color: 'var(--tertiary)', marginBottom: '1.5rem' }}>Our Vision</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.6', opacity: 0.8 }}>
                To architect the future of global enterprise, creating a seamlessly connected business ecosystem where innovation thrives without borders, and opportunity is accessible to forward-thinking organizations worldwide.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.5rem', fontWeight: 'normal', color: 'var(--tertiary)', marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.6', opacity: 0.8 }}>
                We empower businesses to scale sustainably through strategic insights, operational excellence, and an unparalleled network of global partners, delivering measurable impact and long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3c. Culture Section (Replacing Video Section) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-container)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3rem', fontWeight: 'normal', lineHeight: '1.2', marginBottom: '1.5rem', color: '#FFFFFF' }}>
                A Culture Built<br/>Around People
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '2rem' }}>
                We believe that our greatest asset is our intellectual capital. Brillaris Global fosters an environment where exceptional talent is recognized, nurtured, and empowered to make a decisive impact on the world stage.
              </p>
              <a href="#" className="grid-cell-link text-glow-hover" style={{ color: 'var(--tertiary)' }}>
                DISCOVER OUR VALUES <ArrowRight size={14} />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '8px' }}>
                <img src="/discovery-image.webp" alt="Culture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Products / Solutions Showcase */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="product-label" style={{ display: 'block', marginBottom: '1rem' }}>OUR PRODUCTS & SOLUTIONS</span>
            <h2>Ideas Turning Into <em>Real Solutions</em></h2>
            <p>From applications already delivered to solutions currently in development, Brillaris Global continues to transform ideas and real-world problems into practical digital products.</p>
          </motion.div>
          
          <motion.div 
            className="product-grid" 
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/*
            <motion.div variants={fadeUp} className="product-card">
              <div className="product-image-placeholder"></div>
              <div className="product-info">
                <span className="product-label">LIVE Â· MONITORING</span>
                <h4>SmartSportz</h4>
                <p>Sports-focused digital platform designed to simplify sports management and connected experiences.</p>
                <a href="#" className="grid-cell-link text-glow-hover" style={{ marginTop: '1rem' }}>View Details <ArrowRight size={14} /></a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="product-card">
              <div className="product-image-placeholder"></div>
              <div className="product-info">
                <span className="product-label">DELIVERED Â· MONITORING</span>
                <h4>Liyans Vastra</h4>
                <p>Digital solution developed to support a modern retail and customer experience.</p>
                <a href="#" className="grid-cell-link text-glow-hover" style={{ marginTop: '1rem' }}>View Details <ArrowRight size={14} /></a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="product-card">
              <div className="product-image-placeholder"></div>
              <div className="product-info">
                <span className="product-label">IN DEVELOPMENT</span>
                <h4>SafeReach</h4>
                <p>School-focused platform designed around safety, communication, and coordination.</p>
                <a href="#" className="grid-cell-link text-glow-hover" style={{ marginTop: '1rem' }}>View Details <ArrowRight size={14} /></a>
              </div>
            </motion.div>
            */}            {/* Hidden per request
            <motion.div variants={fadeUp} className="product-card">
              <div className="product-image-placeholder"></div>
              <div className="product-info">
                <span className="product-label">UPCOMING</span>
                <h4>MealMap</h4>
                <p>An upcoming digital solution focused on making meal and food-related experiences more organized and useful.</p>
                <a href="#" className="grid-cell-link text-glow-hover" style={{ marginTop: '1rem' }}>View Details <ArrowRight size={14} /></a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="product-card">
              <div className="product-image-placeholder"></div>
              <div className="product-info">
                <span className="product-label">UPCOMING</span>
                <h4>AI Queue Management</h4>
                <p>An upcoming AI-powered solution focused on improving queue management and reducing waiting experiences.</p>
                <a href="#" className="grid-cell-link text-glow-hover" style={{ marginTop: '1rem' }}>View Details <ArrowRight size={14} /></a>
              </div>
            </motion.div>
            */}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '4rem' }}
          >
             <Link to="/services" className="btn-outline inline-flex items-center">EXPLORE ALL PRODUCTS <ArrowRight size={14} className="ml-2" /></Link>
          </motion.div>
        </div>
      </section>



      {/* 8. Testimonial / CEO Philosophy */}
      <section className="section-padding" style={{ backgroundColor: 'var(--tertiary)' }}>
        <div className="container">
          <motion.div 
            className="testimonial-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.div variants={fadeUp} className="testimonial-content" style={{ margin: '0 auto', maxWidth: '800px', color: '#FFFFFF' }}>
              <Quote size={32} className="quote-icon" style={{ margin: '0 auto 1.5rem auto', color: '#FFFFFF' }} />
              <p className="quote-text" style={{ color: '#FFFFFF' }}>
                "We are not just building software; we are building solutions that create meaningful possibilities. Brillaris is committed to exploring, creating, and pushing the boundaries of what's possible."
              </p>
              <h4 className="quote-author" style={{ lineHeight: '1.6', color: 'var(--primary-container)' }}>
                NITHIYA PALANIVEL<br/>
                <span style={{ color: 'var(--primary-container)', opacity: 0.8 }}>CEO & FOUNDER, BRILLARIS GLOBAL</span>
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8b. Latest Insights (from design) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}
          >
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3rem', fontWeight: 'normal', color: 'var(--on-surface)', margin: 0 }}>Latest Insights</h2>
            <a href="#" className="grid-cell-link text-glow-hover" style={{ color: 'var(--tertiary)', fontSize: '1rem', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'inherit', fontWeight: 'bold' }}>
              View All <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px' }} />
            </a>
          </motion.div>
          
          <motion.div 
            className="insight-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="insight-card">
              <div className="insight-image-placeholder"></div>
              <div className="insight-info">
                <span className="insight-label">BUSINESS INSIGHTS</span>
                <h4>Navigating Geopolitical Shifts in Global Supply Chains</h4>
                <p>Strategies for building resilient operational frameworks in uncertain times.</p>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div variants={fadeUp} className="insight-card">
              <div className="insight-image-placeholder"></div>
              <div className="insight-info">
                <span className="insight-label">INDUSTRY TRENDS</span>
                <h4>The Future of AI Integration in Enterprise Finance</h4>
                <p>How machine learning is reshaping risk assessment and capital allocation.</p>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div variants={fadeUp} className="insight-card">
              <div className="insight-image-placeholder"></div>
              <div className="insight-info">
                <span className="insight-label">LEADERSHIP PERSPECTIVES</span>
                <h4>Cultivating Agile Leadership Teams</h4>
                <p>Preparing executive boards to manage rapid technological change.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA Banner */}
      <section className="cta-banner">
        <motion.div 
          className="container" 
          style={{ textAlign: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 style={{ color: 'var(--on-surface)' }}>Have an Idea Worth Building?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.125rem', color: 'var(--on-surface-variant)' }}>Let's turn your idea, challenge, or opportunity into a meaningful technology solution.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <button className="btn-primary" style={{ backgroundColor: 'var(--tertiary)', color: '#FFFFFF' }}>
              CONTACT US
            </button>
            <button className="btn-outline" style={{ borderColor: 'var(--primary-container)', color: 'var(--primary-container)' }}>
              EXPLORE OUR SERVICES
            </button>
          </div>
        </motion.div>
      </section>

      {/* 10. Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#FFFFFF', marginBottom: '1.5rem', fontWeight: 'normal', letterSpacing: '-0.02em' }}>Brillaris Global</h3>
            <p>Building technology for a smarter future.</p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <a href="#">SafeReach</a>
            <a href="#">SmartSportz</a>
            <a href="#">Liyans Vastra</a>
            <a href="#">MealMap</a>
            <a href="#">AI Queue Management</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Newsroom</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Compliance</a>
            
            <h4 style={{ marginTop: '2rem' }}>Social</h4>
            <a href="#">LinkedIn</a>
            <a href="#">Other official social channels</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>Â© 2026 Brillaris Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

