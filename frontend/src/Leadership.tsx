import './App.css';

export default function Leadership() {
  const leaders = [
    {
      name: "Nithiya Palanivel",
      title: "Founder & CEO",
      desc: "Provides the overall vision and strategic direction of Brillaris Global, guiding the company’s growth, innovation, organizational development, and long-term goals.",
      focus: ["Vision & Strategy", "Business Growth", "Innovation", "Organizational Development", "Long-Term Direction"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1AU46T2ZqKeL0c2np35mdqjLl7B1AqL7cE-17483DV-5JbtyFtjvBVpgG_wHVlMvmTtlH24hgXRPk7ovjfKtsB7QCYSn_mxGCGje1nTmdiuB2iBPFETTmzBFue_-WFzI9z9YIkmlrB6r7P_pV0PSLEfQLA-J6KRyu_aureFYufCkQbpXSdA8UMYt5n7jbR-ENB68cmf4FpWeSGH99pM-pyT6wfZigxr5mhQ0I1W0czYe5iaGOiNaW"
    },
    {
      name: "Palanivel",
      title: "Co-Founder",
      desc: "Supports the strategic development and organizational growth of Brillaris Global while contributing to the company’s foundation, planning, and future direction.",
      focus: ["Strategic Development", "Business Planning", "Organizational Growth", "Coordination", "Company Development"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp3517eTQs_nFXk39Sn8F9G1FvjI_TYR2mfVHcMbcoCMrihiaP0y_IjwxKImk5TYsXRvJz-ncw0_ZqaQWSZHeyEi3hMEK7ttDBfZjQzVt-3TN0R2tB2ei-8Sd6znLRZnSQlBO9-VkvBLEhGEsxEyCEklumOaVEybfhwHjqLPVZBGTlu31E-RO-qrjPpGnHFLAqYKCnh9WODp8E5DuzF7XYAH3p3R5_JSCMHqxiCKWifQPFzWaPD5Sq"
    },
    {
      name: "Prathap A",
      title: "HR & Administration",
      desc: "Responsible for supporting people, administration, internal coordination, and organizational processes that help the company operate effectively.",
      focus: ["Human Resources", "Administration", "Team Coordination", "Internal Processes", "Employee Support"],
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mohamed Asmathulla G",
      title: "Head of Product & Service Development",
      desc: "Leads the development of technology products and services, coordinating product planning, development activities, technical execution, and continuous improvement.",
      focus: ["Product Development", "Service Development", "Project Coordination", "Technical Planning", "Product Improvement"],
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop relative overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="font-label-caps text-label-caps text-white/90 tracking-widest uppercase mb-4 block">Leadership</span>
            <h1 className="font-headline-md text-4xl md:text-5xl text-white mb-6 leading-tight">Guiding Brillaris Global Forward</h1>
            <h2 className="font-headline-sm text-2xl text-tertiary mb-8">Leadership With Purpose</h2>
            <p className="text-white/90 font-body-md text-lg leading-relaxed max-w-3xl">
              At Brillaris Global, leadership is built on vision, responsibility, collaboration, and continuous growth. Our leadership team works together to establish the company's direction, strengthen its capabilities, support its people, and build meaningful technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="py-24 bg-[#f4f4f4] px-margin-mobile md:px-margin-desktop">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {leaders.map((leader, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-10 md:gap-16 group bg-white p-8 md:p-12 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              
              {/* Image Side */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="w-48 h-56 mx-auto sm:w-56 sm:h-72 md:w-full md:h-80 overflow-hidden rounded-lg bg-surface border border-outline-variant/10">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={leader.img} alt={leader.name} />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <h3 className="font-headline-md text-3xl text-black mb-2">{leader.name}</h3>
                <p className="font-label-caps text-label-caps text-tertiary mb-6">{leader.title}</p>
                <p className="text-black font-body-md text-lg mb-8 leading-relaxed">
                  {leader.desc}
                </p>
                
                <div className="bg-[#f8f9fa] p-6 rounded-lg border border-outline-variant/10">
                  <h4 className="font-headline-sm text-lg text-black mb-4 border-b border-outline-variant/20 pb-2">Leadership Focus</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {leader.focus.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-black font-body-md text-sm">
                        <span className="text-tertiary text-lg">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* How We Lead */}
      <section className="py-24 bg-[#f4f4f4] px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-label-caps text-label-caps text-black tracking-widest uppercase mb-4 block">How We Lead</span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-black mb-8">One Team. One Direction. Shared Responsibility.</h2>
          <p className="text-black font-body-md text-lg mb-12 max-w-2xl mx-auto">
            Our leadership structure brings together different areas of expertise to support the company's growth.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
              <span className="text-tertiary font-bold text-lg block mb-2">Vision</span>
              <span className="text-black font-body-md">Establishing the direction and long-term goals.</span>
            </div>
            <div className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
              <span className="text-tertiary font-bold text-lg block mb-2">People</span>
              <span className="text-black font-body-md">Building and supporting a strong team.</span>
            </div>
            <div className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
              <span className="text-tertiary font-bold text-lg block mb-2">Products</span>
              <span className="text-black font-body-md">Turning ideas into meaningful solutions.</span>
            </div>
            <div className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
              <span className="text-tertiary font-bold text-lg block mb-2">Technology</span>
              <span className="text-black font-body-md">Building reliable and scalable systems.</span>
            </div>
            <div className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
              <span className="text-tertiary font-bold text-lg block mb-2">Operations</span>
              <span className="text-black font-body-md">Maintaining efficient development and deployment.</span>
            </div>
            <div className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
              <span className="text-tertiary font-bold text-lg block mb-2">Growth</span>
              <span className="text-black font-body-md">Continuously learning, improving, and expanding.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Building Today */}
      <section className="py-24 bg-tertiary px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-headline-sm text-3xl md:text-4xl text-white mb-6">Building Today. Shaping Tomorrow.</h3>
          <p className="text-white/90 font-body-md text-lg max-w-2xl mx-auto">
            Together, our leadership team works toward building a strong, innovative, and continuously evolving organization.
          </p>
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
          <p>© 2026 Brillaris Global. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
