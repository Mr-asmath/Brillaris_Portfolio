import { CheckCircle2 } from 'lucide-react';
import './App.css';

export default function CompanyProducts() {
  return (
    <main className="min-h-screen bg-background pt-20">
      
      {/* Hero Section */}
      <section className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop relative overflow-hidden border-b border-outline-variant/10 text-left">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Company Products</span>
            <h1 className="font-headline-md text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">Building Products That Solve Real Problems</h1>
            
            <div className="space-y-6 text-white/90 font-body-md text-lg leading-relaxed">
              <p>At Brillaris Global, we develop technology products with a clear purpose — identifying real-world challenges and creating practical digital solutions around them.</p>
              <p>Our products are designed with a focus on usability, innovation, scalability, and meaningful impact. From understanding user needs to continuous improvement, we focus on building products that can evolve with changing requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SafeReach Section */}
      <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center md:justify-start">
              <div className="w-full max-w-[320px] aspect-square bg-[#f4f4f4] rounded-3xl flex items-center justify-center border border-outline-variant/20 shadow-sm">
                {/* SafeReach Logo Placeholder */}
                <img src="https://images.unsplash.com/photo-1546410531-bea5aad104ea?auto=format&fit=crop&w=600&q=80" alt="SafeReach Logo" className="w-full h-full object-cover rounded-3xl opacity-90 mix-blend-multiply grayscale" />
              </div>
            </div>
            <div>
              <h2 className="font-headline-md text-4xl text-black mb-4">SafeReach</h2>
              <h3 className="font-headline-sm text-2xl text-tertiary mb-6">A Smarter Approach to School Safety</h3>
              <div className="space-y-6 text-black font-body-md text-lg leading-relaxed">
                <p>SafeReach is a digital solution focused on improving school safety, communication, and coordination between key members of the school community.</p>
                <p>The product is designed to bring important safety-related interactions into a connected digital environment, helping create a more organized and responsive approach to school safety.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f4f4f4] p-10 rounded-xl shadow-sm border border-outline-variant/10 mb-16">
            <h4 className="font-headline-sm text-xl text-black mb-6 border-b border-outline-variant/20 pb-4">Focus Areas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["School Safety", "Communication", "Coordination", "Student Support", "Digital Management"].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-0.5" size={20} />
                  <span className="text-black font-body-md">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-tertiary p-10 rounded-xl border border-outline-variant/10 text-center">
            <p className="text-white font-headline-sm text-2xl italic leading-relaxed">
              "Making School Safety More Connected, Responsive, and Accessible."
            </p>
          </div>
        </div>
      </section>

      {/* Full Footer */}
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
