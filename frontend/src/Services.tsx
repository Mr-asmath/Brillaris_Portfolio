import { ArrowRight, Cpu, MonitorSmartphone, Activity, GraduationCap, Rocket, Briefcase, Building, Globe, TrendingUp, RefreshCcw, Monitor, Users, Handshake, Store, Trophy } from 'lucide-react';
import './App.css';

export default function Services() {
  return (
    <main className="min-h-screen bg-background pt-20">
      
      {/* Existing Hero Section */}
      <section className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop relative overflow-hidden border-b border-outline-variant/10 text-left">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Solutions</span>
            <h1 className="font-headline-md text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">Empowering Businesses, Teams &amp; Individuals Through Technology</h1>
            
            <div className="space-y-6 text-white/90 font-body-md text-lg leading-relaxed">
              <p>At Brillaris Global, we provide technology and professional services that help businesses, organizations, students, and individuals build, improve, and grow through technology.</p>
              <p>Our services cover the complete journey from learning and planning to development, deployment, and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Core Solutions) */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-[40px] md:text-[48px] mb-4 text-[#092E2A]">Core Solutions</h2>
            <div className="w-12 h-0.5 bg-tertiary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 01 */}
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all">
              <Building className="text-tertiary mb-6" size={32} />
              <h3 className="font-headline-md text-[24px] mb-4 border-b border-gray-200 pb-4 text-[#092E2A]">Business Consulting</h3>
              <p className="text-[#092E2A]/70 mb-6 flex-grow font-body-md">
                  Transformative strategies designed to optimize operations, mitigate global risks, and drive sustainable growth across complex enterprise structures.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 text-sm text-[#092E2A]/80 font-body-md">
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Organizational Design</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Change Management</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Process Optimization</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Risk &amp; Compliance</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Strategy Execution</div>
              </div>
              <a className="inline-flex items-center font-label-caps text-label-caps text-tertiary hover:text-[#092E2A] transition-colors gap-2 mt-auto" href="#">
                  Explore Service <ArrowRight size={16} />
              </a>
            </div>

            {/* Service 02 */}
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all">
              <Cpu className="text-tertiary mb-6" size={32} />
              <h3 className="font-headline-md text-[24px] mb-4 border-b border-gray-200 pb-4 text-[#092E2A]">Technology Solutions</h3>
              <p className="text-[#092E2A]/70 mb-6 flex-grow font-body-md">
                  Deploying advanced digital architectures and AI-driven platforms to future-proof core business systems and accelerate digital transformation.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 text-sm text-[#092E2A]/80 font-body-md">
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Digital Transformation</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Enterprise Architecture</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Cloud Strategy</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Data Analytics &amp; AI</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Cybersecurity</div>
              </div>
              <a className="inline-flex items-center font-label-caps text-label-caps text-tertiary hover:text-[#092E2A] transition-colors gap-2 mt-auto" href="#">
                  Explore Service <ArrowRight size={16} />
              </a>
            </div>

            {/* Service 03 */}
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all">
              <Globe className="text-tertiary mb-6" size={32} />
              <h3 className="font-headline-md text-[24px] mb-4 border-b border-gray-200 pb-4 text-[#092E2A]">Global Business Services</h3>
              <p className="text-[#092E2A]/70 mb-6 flex-grow font-body-md">
                  Establishing scalable, high-performance global service centers to centralize operations, reduce costs, and elevate service quality worldwide.
              </p>
              <div className="grid grid-cols-1 gap-2 mb-8 text-sm text-[#092E2A]/80 font-body-md">
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Shared Services Setup</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> BPO Strategy</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Global Sourcing</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Service Delivery Model</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 bg-tertiary mr-3 block"></span> Continuous Improvement</div>
              </div>
              <a className="inline-flex items-center font-label-caps text-label-caps text-tertiary hover:text-[#092E2A] transition-colors gap-2 mt-auto" href="#">
                  Explore Service <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-[#F8F7F2] border-t border-gray-200">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-[40px] mb-4 text-[#092E2A]">Core Capabilities</h2>
            <div className="w-12 h-0.5 bg-tertiary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <TrendingUp className="text-tertiary" size={28} />
              </div>
              <h3 className="font-label-caps text-label-caps text-[#092E2A]">Strategy</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <RefreshCcw className="text-tertiary" size={28} />
              </div>
              <h3 className="font-label-caps text-label-caps text-[#092E2A]">Transformation</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <MonitorSmartphone className="text-tertiary" size={28} />
              </div>
              <h3 className="font-label-caps text-label-caps text-[#092E2A]">Technology</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Activity className="text-tertiary" size={28} />
              </div>
              <h3 className="font-label-caps text-label-caps text-[#092E2A]">Growth</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Users className="text-tertiary" size={28} />
              </div>
              <h3 className="font-label-caps text-label-caps text-[#092E2A]">People</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Handshake className="text-tertiary" size={28} />
              </div>
              <h3 className="font-label-caps text-label-caps text-[#092E2A]">Partnerships</h3>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="font-display-lg text-[40px] mb-4 text-[#092E2A]">Experience Across Industries</h2>
              <p className="font-body-md text-[#092E2A]/70 max-w-lg">
                  Deep sector knowledge applied globally to solve specific market challenges.
              </p>
            </div>
            <a className="hidden md:inline-flex items-center font-label-caps text-label-caps text-tertiary hover:text-[#092E2A] transition-colors gap-2" href="#">
                View All Industries <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[200px] cursor-pointer group hover:-translate-y-1 transition-all">
              <Monitor className="text-tertiary mb-6 transition-colors" size={32} />
              <div>
                <h3 className="font-headline-md text-[20px] mb-2 text-[#092E2A]">Technology</h3>
                <div className="w-0 h-[1px] bg-tertiary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[200px] cursor-pointer group hover:-translate-y-1 transition-all">
              <GraduationCap className="text-tertiary mb-6 transition-colors" size={32} />
              <div>
                <h3 className="font-headline-md text-[20px] mb-2 text-[#092E2A]">Education</h3>
                <div className="w-0 h-[1px] bg-tertiary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[200px] cursor-pointer group hover:-translate-y-1 transition-all">
              <Store className="text-tertiary mb-6 transition-colors" size={32} />
              <div>
                <h3 className="font-headline-md text-[20px] mb-2 text-[#092E2A]">Retail</h3>
                <div className="w-0 h-[1px] bg-tertiary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[200px] cursor-pointer group hover:-translate-y-1 transition-all">
              <Trophy className="text-tertiary mb-6 transition-colors" size={32} />
              <div>
                <h3 className="font-headline-md text-[20px] mb-2 text-[#092E2A]">Sports</h3>
                <div className="w-0 h-[1px] bg-tertiary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[200px] cursor-pointer group hover:-translate-y-1 transition-all">
              <Briefcase className="text-tertiary mb-6 transition-colors" size={32} />
              <div>
                <h3 className="font-headline-md text-[20px] mb-2 text-[#092E2A]">Professional Services</h3>
                <div className="w-0 h-[1px] bg-tertiary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="bg-[#F8F7F2] p-8 rounded-lg border border-gray-100 flex flex-col justify-between min-h-[200px] cursor-pointer group hover:-translate-y-1 transition-all">
              <Rocket className="text-tertiary mb-6 transition-colors" size={32} />
              <div>
                <h3 className="font-headline-md text-[20px] mb-2 text-[#092E2A]">Emerging Businesses</h3>
                <div className="w-0 h-[1px] bg-tertiary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          <a className="md:hidden mt-8 inline-flex items-center font-label-caps text-label-caps text-tertiary hover:text-[#092E2A] transition-colors gap-2" href="#">
              View All Industries <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#092E2A] text-center" id="contact">
        <div className="max-w-3xl mx-auto px-margin-mobile">
          <h2 className="font-display-lg text-[40px] md:text-[56px] text-white mb-6">
              Have A Business Challenge?
          </h2>
          <p className="font-body-lg text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Connect with our global strategy team to explore tailored solutions for your enterprise.
          </p>
          <a className="inline-flex items-center justify-center font-label-caps text-label-caps bg-tertiary text-[#412d00] px-10 py-5 rounded hover:bg-white hover:text-[#092E2A] transition-colors gap-2 font-bold uppercase tracking-widest text-sm" href="#">
              Talk To Our Team
          </a>
        </div>
      </section>

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
          <p>Â© 2026 Brillaris Global. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
