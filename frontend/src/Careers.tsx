import { ArrowRight, ChevronRight, Briefcase, GraduationCap, Users, Lightbulb, Rocket, Target } from 'lucide-react';
import './App.css';

export default function Careers() {
  return (
    <main className="min-h-screen bg-background pt-20">
      
      {/* Hero Section */}
      <section className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop text-left relative overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps text-white/90 tracking-widest uppercase mb-4 block">Join Our Team</span>
            <h1 className="font-headline-md text-4xl md:text-6xl text-white mb-6 leading-tight">Careers at Brillaris Global</h1>
            <h2 className="font-headline-sm text-2xl text-tertiary mb-8">Build Your Career. Create Your Impact.</h2>
            
            <div className="space-y-6 text-white/90 font-body-md text-lg leading-relaxed">
              <p>At Brillaris Global, we believe great technology is built by people who are curious, passionate, and willing to learn.</p>
              <p>We provide an environment where individuals can learn, contribute, take ownership, and grow while working on meaningful technology solutions.</p>
              <p>Whether you are an experienced professional, a fresh graduate, or someone beginning your technology journey, we believe there is always an opportunity to learn and create something valuable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-[#f4f4f4] px-margin-mobile md:px-margin-desktop">
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Why Join Brillaris Global?</span>
          <h2 className="font-headline-md text-3xl md:text-5xl text-black mb-16">Learn. Build. Grow.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "Real-World Experience", desc: "Work on practical projects and gain experience solving real-world problems." },
              { title: "Continuous Learning", desc: "Explore new technologies, tools, development practices, and ideas." },
              { title: "Ownership & Responsibility", desc: "Take responsibility for your work and contribute directly to project outcomes." },
              { title: "Collaborative Environment", desc: "Work with team members across different technical and functional areas." },
              { title: "Innovation", desc: "Experiment with ideas and explore better ways to build solutions." },
              { title: "Career Growth", desc: "Develop both technical and professional skills through continuous experience and learning." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-outline-variant/20 shadow-sm hover:border-tertiary hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-headline-sm text-xl text-black mb-4">{item.title}</h3>
                <p className="text-black font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Look For & Environment Split */}
      <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Who We Look For */}
          <div>
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Who We Look For</span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-black mb-6">People With Curiosity & Purpose</h2>
            <p className="text-black font-body-md text-lg mb-8">We look for individuals who are:</p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Curious and willing to learn", "Passionate about technology", "Creative problem solvers",
                "Responsible and dependable", "Comfortable working as a team", "Open to feedback",
                "Willing to take ownership", "Interested in continuous improvement"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-black font-body-md">
                  <div className="w-2 h-2 rounded-full bg-tertiary shrink-0"></div> {item}
                </li>
              ))}
            </ul>
            <p className="text-black font-headline-sm italic border-l-4 border-tertiary pl-4">
              Skills can be developed. Attitude, curiosity, and the willingness to learn make the difference.
            </p>
          </div>

          {/* Our Work Environment */}
          <div>
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Our Work Environment</span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-black mb-6">A Place to Learn and Contribute</h2>
            <p className="text-black font-body-md text-lg mb-10">We encourage a working environment where team members can:</p>
            
            <div className="space-y-6">
              {[
                { title: "Ask Questions", desc: "Learn through discussion and knowledge sharing." },
                { title: "Take Initiative", desc: "Bring forward ideas and take responsibility for meaningful tasks." },
                { title: "Work Together", desc: "Collaborate across roles to solve problems effectively." },
                { title: "Experiment & Learn", desc: "Try new approaches and learn from both success and failure." },
                { title: "Improve Continuously", desc: "Use feedback and experience to become better every day." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f4f4f4] p-6 rounded-lg border border-outline-variant/10">
                  <h4 className="font-headline-sm text-lg text-black mb-2">{item.title}</h4>
                  <p className="text-black font-body-md">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Areas You Can Grow In */}
      <section className="py-24 bg-tertiary px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-5xl mx-auto">
          <span className="font-label-caps text-label-caps text-white/80 tracking-widest uppercase mb-4 block">Areas You Can Grow In</span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-white mb-6">Explore. Learn. Build.</h2>
          <p className="text-white/90 font-body-md text-lg mb-12">Career opportunities at Brillaris Global can span areas such as:</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Software Development", "Web Development", "Mobile Application Development",
              "Backend Development", "Artificial Intelligence & Machine Learning", "Data & Analytics",
              "UI/UX & Product Design", "DevOps & Cloud", "Quality Assurance & Testing",
              "Product Management", "Project Management", "Business & Operations"
            ].map((tag, idx) => (
              <span key={idx} className="bg-white/10 backdrop-blur-sm text-white font-body-md px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-tertiary transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* For Students & Freshers */}
      <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop border-b border-outline-variant/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Students learning" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-left">
            <span className="font-label-caps text-label-caps text-black tracking-widest uppercase mb-4 block">For Students & Freshers</span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-black mb-6">Start With Learning. Grow Through Experience.</h2>
            <p className="text-black font-body-md text-lg mb-8">
              Brillaris Global provides opportunities for students and early-career professionals to gain exposure to real-world technology and development practices.
            </p>
            
            <p className="text-black font-headline-sm mb-4">You can build experience through:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Practical project work", "Technology learning", "Team collaboration", "Development tasks",
                "Research and experimentation", "Problem-solving", "Project ownership"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-black font-body-md">
                  <ChevronRight size={16} className="text-tertiary" /> {item}
                </li>
              ))}
            </ul>
            <div className="bg-[#f4f4f4] p-6 rounded-lg border-l-4 border-tertiary">
              <p className="text-black font-body-md italic">
                Our goal is to help emerging talent move from learning concepts to applying them in real-world situations.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Philosophy & Opportunities */}
      <section className="py-24 bg-[#f4f4f4] px-margin-mobile md:px-margin-desktop">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Philosophy */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Our Career Philosophy</span>
            <h2 className="font-headline-md text-3xl text-black mb-6">Grow With the Company</h2>
            <p className="text-black font-body-md mb-6">We believe career growth is a continuous journey.</p>
            <p className="text-black font-body-md mb-8">
              As Brillaris Global grows, we want our people to grow with it — developing stronger technical skills, taking greater responsibility, exploring new areas, and contributing to the company's future.
            </p>
            <p className="text-tertiary font-headline-sm text-xl italic">
              "Learn continuously. Build confidently. Take ownership. Grow together."
            </p>
          </div>

          {/* Opportunities */}
          <div className="bg-primary-container p-10 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-center">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Open Opportunities</span>
            <h2 className="font-headline-md text-3xl text-white mb-6">Find Your Next Opportunity</h2>
            <p className="text-white font-body-md mb-8">
              We are always interested in connecting with people who are passionate about technology, innovation, and creating meaningful solutions.
            </p>
            <h4 className="font-headline-sm text-xl text-white mb-4">Current Opportunities:</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Software Development", "Internships & Training", "Product Development", "Technology & Engineering", "Other Emerging Roles"].map((role, idx) => (
                <span key={idx} className="bg-white text-black text-sm px-4 py-2 rounded-md font-medium">{role}</span>
              ))}
            </div>
            <div className="border-t border-white/20 pt-6 mt-auto">
              <h4 className="font-headline-sm text-lg text-white mb-2">Don't See a Suitable Opening?</h4>
              <p className="text-white/90 font-body-md mb-6">You can still share your profile with us for future opportunities.</p>
              <button className="bg-tertiary text-white px-8 py-4 rounded font-label-caps uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-colors flex items-center gap-2">
                Join Brillaris Global <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-tertiary text-center border-t border-outline-variant/10">
        <h2 className="font-headline-md text-3xl md:text-5xl text-white italic leading-tight">
          Build Your Skills.<br className="hidden md:block" /> Build Real Solutions.<br className="hidden md:block" /> Build Your Future.
        </h2>
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
          <p>© 2026 Brillaris Global. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
