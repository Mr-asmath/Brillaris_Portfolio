import { CheckCircle2 } from 'lucide-react';
import './App.css';

export default function CompanyServices() {
  return (
    <main className="min-h-screen bg-background pt-20">
      
      {/* Hero Section */}
      <section className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop relative overflow-hidden border-b border-outline-variant/10 text-left">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Company Services</span>
            <h1 className="font-headline-md text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">Delivering Digital Excellence</h1>
            <p className="text-white/90 font-body-md text-lg leading-relaxed">
              We provide specialized digital solutions combining modern technologies with structured architectures to help organizations manage operations and connect with their audience.
            </p>
          </div>
        </div>
      </section>

      {/* SmartSportz Section */}
      <section className="py-24 bg-[#f4f4f4] px-margin-mobile md:px-margin-desktop border-b border-outline-variant/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center md:justify-start">
              <div className="w-full max-w-[320px] aspect-square bg-white rounded-3xl flex items-center justify-center border border-outline-variant/20 shadow-sm">
                <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80" alt="SmartSportz Logo" className="w-full h-full object-cover rounded-3xl opacity-90 mix-blend-multiply grayscale" />
              </div>
            </div>
            <div>
              <h2 className="font-headline-md text-4xl text-black mb-4">SmartSportz</h2>
              <h3 className="font-headline-sm text-2xl text-tertiary mb-6">Digital Sports Management Solution</h3>
              <p className="text-black font-body-md text-lg leading-relaxed">
                SmartSportz is a digital platform developed to support sports tournament and event management. The platform brings different tournament-related activities into a structured digital experience, helping organizers and participants manage sports events more efficiently.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10 mb-12">
            <h4 className="font-headline-sm text-xl text-black mb-6 border-b border-outline-variant/20 pb-4">Service Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["Sports Tournament Management", "Digital Event Management", "Participant Management", "Match & Competition Management", "Results & Information", "Responsive Web Experience"].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-0.5" size={20} />
                  <span className="text-black font-body-md">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-container p-8 rounded-xl border border-outline-variant/10">
            <span className="font-label-caps text-label-caps text-white tracking-widest uppercase mb-2 block">Our Approach</span>
            <p className="text-white font-body-md text-lg italic">
              We combine modern web technologies with structured application architecture to develop a scalable digital solution that can support sports organizations and tournament organizers.
            </p>
          </div>
        </div>
      </section>

      {/* Liyans Vastra Section */}
      <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center md:justify-start">
              <div className="w-full max-w-[320px] aspect-square bg-[#f4f4f4] rounded-3xl flex items-center justify-center border border-outline-variant/20 shadow-sm">
                <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80" alt="Liyans Vastra Logo" className="w-full h-full object-cover rounded-3xl opacity-90 mix-blend-multiply grayscale" />
              </div>
            </div>
            <div>
              <h2 className="font-headline-md text-4xl text-black mb-4">Liyans Vastra</h2>
              <h3 className="font-headline-sm text-2xl text-tertiary mb-6">E-Commerce Web Solution</h3>
              <p className="text-black font-body-md text-lg leading-relaxed">
                Liyans Vastra is an e-commerce web solution developed to provide a modern online shopping experience. The platform focuses on presenting products through a professional digital storefront while providing customers with a convenient way to browse and purchase products online.
              </p>
            </div>
          </div>
          
          <div className="bg-[#f4f4f4] p-10 rounded-xl shadow-sm border border-outline-variant/10 mb-12">
            <h4 className="font-headline-sm text-xl text-black mb-6 border-b border-outline-variant/20 pb-4">Service Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["E-Commerce Development", "Product Browsing", "Online Shopping Experience", "Cart Management", "Responsive Web Design", "Modern User Interface", "Web Deployment"].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-0.5" size={20} />
                  <span className="text-black font-body-md">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-tertiary p-8 rounded-xl border border-outline-variant/10">
            <span className="font-label-caps text-label-caps text-white/80 tracking-widest uppercase mb-2 block">Our Approach</span>
            <p className="text-white font-body-md text-lg italic">
              We focus on combining business requirements, user experience, responsive design, and modern web technologies to create a digital commerce solution aligned with the client's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-primary-container px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Our Service Philosophy</span>
          <h2 className="font-headline-md text-3xl md:text-5xl text-white leading-tight">
            Understand the Business.<br/>Build the Experience.<br/>Deliver the Solution.
          </h2>
        </div>
      </section>

      {/* Footer */}
            {/* Footer */}
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
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
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
          <p>© 2026 Brillaris Global. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}



