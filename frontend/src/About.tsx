export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/50 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl7MKFmYZRV2SNF883t18YvVP9JZT0wP4w0132QPjSIrLZ_9Tf6sD8FLxpQ8HcvHmsaRVozML9lxkhmH-zN59kCzSZl7Km_HkKE94GS7zwwQ-e_4-rxpzR2ZXbdptmcolgMMk2_kwHTp0HRUiNXumgfWTGvARXjCL6RuZgsL5T5NCkCB4UzYHzVqcHML5xB6YJNTYNKmVljc_E8VVtWVl2VHUznMr7i3-jBjKqdNlnChXuesIHaUJv')" }}
          ></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mt-20">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-4xl mx-auto">
            Driven By Vision.<br/>
            <span className="text-tertiary">Defined By Impact.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Brillaris Global brings together vision, people, technology and strategic opportunity to build meaningful long-term impact.
          </p>
        </div>
      </section>
      
      {/* Intro Quote */}
      <section className="py-24 bg-tertiary px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/10">
        <div className="max-w-4xl mx-auto space-y-8 text-white/90 font-body-md text-xl md:text-2xl leading-relaxed italic">
          <p>"Brillaris Global is a technology and innovation company focused on transforming ideas into practical digital solutions.</p>
          <p>Founded in 2025, we bring together technology, creativity, and education to develop products, applications, and services that solve real-world problems.</p>
          <p>We believe great technology is not only about writing code. It is about understanding people, identifying meaningful problems, designing better experiences, and building solutions that create lasting value."</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 md:py-32 bg-inverse-surface text-background px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 relative">
            <div className="aspect-[4/5] relative rounded overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVEHVLy49KqTdUc9ovPF-M4D3pouhWOYl3J1jChcP3Blt2fnEMWsAfRe7qfBm4dRkgXOGgE-AGJIm5-0BNmYP2q4C95cQmEMLvTFdvSRfRylR8Ay4mvzwrJ2HJkenwFoFyIBFg7LO7GH23uV22PPdjimTajvcskXs-t08yKkYHZ_vbSoNedXJcQaargfklinhUVWwdG-Y0U-zRK3jLo89GnpF0A_AhnopA3ckiyaN_BkmAiFQizHs6" alt="Close up architectural detail" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0">
            <span className="font-label-caps text-label-caps text-on-tertiary-fixed-variant tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="font-headline-md text-headline-md text-background mb-8">Where Vision Meets Execution</h2>
            <div className="space-y-6 text-inverse-on-surface font-body-md text-lg">
              <p>
                Founded on the principle that true value is created at the intersection of strategic foresight and disciplined execution, Brillaris Global has evolved into a premier advisory firm for the modern era.
              </p>
              <p>
                We navigate complex global markets, identifying opportunities that others miss. Our approach is deeply analytical yet profoundly human, recognizing that behind every data point is a relationship, a community, and a potential legacy.
              </p>
              <p>
                Through rigorous methodology and an unparalleled network of executive partners, we transform ambitious goals into sustainable realities, setting new benchmarks for institutional excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-inverse-surface text-background py-32 px-margin-mobile md:px-margin-desktop flex flex-col justify-center border-t border-outline-variant/20 md:border-t-0">
          <div className="max-w-xl ml-auto md:mr-12">
            <span className="font-label-caps text-label-caps text-on-tertiary-fixed-variant tracking-widest uppercase mb-6 block">Our Vision</span>
            <p className="font-headline-sm text-headline-sm md:text-[40px] md:leading-[1.3] text-background font-medium">
              To build a globally connected ecosystem where businesses, people and opportunities grow together.
            </p>
          </div>
        </div>
        <div className="bg-primary-container text-on-surface py-32 px-margin-mobile md:px-margin-desktop flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-xl mr-auto md:ml-12 relative z-10">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-6 block">Our Mission</span>
            <p className="font-headline-sm text-headline-sm md:text-[40px] md:leading-[1.3] text-on-surface font-medium">
              To deliver innovative, reliable and human-centered solutions that create measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32 bg-[#f4f4f4] text-black px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">What We Do</span>
            <h2 className="font-headline-md text-headline-md text-black max-w-3xl mx-auto">Building Across Technology, Creativity & Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Technology & Software</h3>
              <p className="text-black/80 font-body-md">We design and develop modern web, mobile, and software applications for businesses, organizations, and users.</p>
            </div>
            <div className="bg-white border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Digital Products</h3>
              <p className="text-black/80 font-body-md">We create our own technology products focused on solving specific problems and improving everyday experiences.</p>
            </div>
            <div className="bg-white border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">AI & Automation</h3>
              <p className="text-black/80 font-body-md">We explore artificial intelligence, machine learning, intelligent automation, and data-driven solutions to improve efficiency and decision-making.</p>
            </div>
            <div className="bg-white border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Creative Technology</h3>
              <p className="text-black/80 font-body-md">We combine technology with creativity to develop engaging digital experiences and innovative solutions.</p>
            </div>
            <div className="bg-white border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Educational Innovation</h3>
              <p className="text-black/80 font-body-md">We explore technology-driven approaches that support learning, educational experiences, and accessible digital resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-primary-container text-center px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-6 block">Philosophy</span>
          <h2 className="font-headline-md text-4xl md:text-5xl text-on-surface mb-10 leading-tight">
            We Don't Just Build Projects.<br/>We Build Possibilities.
          </h2>
          <div className="text-on-surface-variant font-body-md text-lg space-y-6 text-left md:text-center">
            <p>A project can be completed. A product can continue to evolve.</p>
            <p>At Brillaris Global, we are developing a product-oriented mindset where technology solutions are designed with long-term value in mind.</p>
            <p>We look beyond delivering software and focus on:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mt-8">
              <li className="flex items-center gap-3"><span className="text-tertiary">•</span> Solving meaningful problems</li>
              <li className="flex items-center gap-3"><span className="text-tertiary">•</span> Creating better user experiences</li>
              <li className="flex items-center gap-3"><span className="text-tertiary">•</span> Building reusable technology</li>
              <li className="flex items-center gap-3"><span className="text-tertiary">•</span> Improving products continuously</li>
              <li className="flex items-center gap-3"><span className="text-tertiary">•</span> Creating scalable solutions</li>
              <li className="flex items-center gap-3"><span className="text-tertiary">•</span> Exploring sustainable business opportunities</li>
            </ul>
            <p className="mt-8 pt-8 border-t border-white/10 text-tertiary text-xl italic text-center">
              Our goal is to transform promising ideas into solutions that can grow beyond their first implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Philosophy</span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-black mb-6">Engineering With a Purpose</h2>
          <p className="text-black font-body-md text-lg mb-10 max-w-2xl mx-auto">We continuously develop our capabilities across modern technologies and engineering practices.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Web App Dev', 'Mobile App Dev', 'AI & Machine Learning', 'Data & Analytics', 'Backend Systems', 'APIs & Integrations', 'Cloud & DevOps', 'Automation', 'Real-Time Communication', 'Database Systems'].map((t, i) => (
              <span key={i} className="bg-tertiary text-white font-body-md px-5 py-2 border border-outline-variant/20 rounded">{t}</span>
            ))}
          </div>
          <p className="text-tertiary font-headline-sm text-xl italic max-w-3xl mx-auto">"Technology changes continuously. So do we. We believe continuous learning is an essential part of building better technology."</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-tertiary text-white px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-black tracking-widest uppercase mb-4 block">Philosophy</span>
          <h2 className="font-headline-md text-3xl md:text-4xl text-white mb-8">Technology Is Only the Beginning</h2>
          <p className="text-white/90 font-body-md text-lg mb-10">We believe the future belongs to organizations that are willing to learn, adapt, experiment, and build. We are defined by our willingness to discover what can be built tomorrow.</p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 text-white font-headline-sm text-xl italic">
            <span>We build with purpose.</span>
            <span className="hidden md:inline text-white/50">•</span>
            <span>We innovate with curiosity.</span>
            <span className="hidden md:inline text-white/50">•</span>
            <span>We grow through learning.</span>
            <span className="hidden md:inline text-white/50">•</span>
            <span>We create for impact.</span>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32 bg-white px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Core Principles</span>
            <h2 className="font-headline-md text-headline-md text-black">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f4f4f4] border border-outline-variant/20 p-10 hover:border-tertiary/30 transition-all duration-300 group">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-black mb-4">Integrity</h3>
              <p className="text-black font-body-md max-w-lg">Uncompromising ethical standards and transparency in every interaction, building absolute trust with our partners.</p>
            </div>
            <div className="bg-[#f4f4f4] border border-outline-variant/20 p-10 hover:border-tertiary/30 transition-all duration-300 group">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-black mb-4">Innovation</h3>
              <p className="text-black font-body-md">Pioneering forward-thinking solutions to complex global challenges.</p>
            </div>
            <div className="bg-[#f4f4f4] border border-outline-variant/20 p-10 hover:border-tertiary/30 transition-all duration-300 group">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">military_tech</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-black mb-4">Excellence</h3>
              <p className="text-black font-body-md">A relentless pursuit of superior quality and institutional rigor.</p>
            </div>
            <div className="bg-[#f4f4f4] border border-outline-variant/20 p-10 hover:border-tertiary/30 transition-all duration-300 group">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-black mb-4">Collaboration</h3>
              <p className="text-black font-body-md">Fostering synergistic partnerships across disciplines and borders.</p>
            </div>
            <div className="bg-[#f4f4f4] border border-outline-variant/20 p-10 hover:border-tertiary/30 transition-all duration-300 group">
              <div className="text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-black mb-4">People First</h3>
              <p className="text-black font-body-md">Investing in the growth, well-being, and potential of our human capital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-[#f4f4f4] text-black px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Our Approach</span>
            <h2 className="font-headline-md text-headline-md text-black">From Idea to Impact</h2>
            <p className="text-black/80 font-body-md mt-4 max-w-2xl mx-auto">We follow a structured approach to transform ideas into reliable solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Understand", desc: "We first understand the problem, users, requirements, and expected outcome." },
              { title: "Research", desc: "We study existing solutions, technologies, challenges, and opportunities." },
              { title: "Plan", desc: "We define the scope, architecture, technologies, priorities, and development direction." },
              { title: "Build", desc: "We develop the solution using suitable technologies and engineering practices." },
              { title: "Test", desc: "We continuously test functionality, performance, usability, security, and reliability." },
              { title: "Deploy", desc: "We prepare and deploy solutions for real-world usage." },
              { title: "Monitor", desc: "We observe performance, identify issues, and respond to changing requirements." },
              { title: "Evolve", desc: "We continuously improve products and solutions based on feedback, technology, and real-world needs." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-outline-variant/10 p-8 hover:border-tertiary/30 transition-all shadow-sm">
                <div className="text-tertiary font-label-caps mb-4">0{idx + 1}</div>
                <h3 className="font-headline-sm text-xl text-black mb-3">{step.title}</h3>
                <p className="text-black/80 font-body-md text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-primary-container px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-20 md:flex justify-between items-end pb-8">
            <div className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Leadership With Purpose</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Guiding Brillaris Global Forward</h2>
              <p className="text-on-surface-variant font-body-md text-lg">Brillaris Global is guided by leaders who believe in continuous learning, meaningful innovation, and building technology that creates real value.</p>
            </div>
            <a className="hidden md:inline-flex items-center gap-2 text-tertiary font-label-caps hover:text-tertiary-fixed-dim transition-colors mt-4 md:mt-0" href="/leadership">
              View All Executives <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col sm:flex-row gap-8 group text-center sm:text-left items-center sm:items-stretch">
              <div className="w-48 h-56 sm:w-56 sm:h-72 shrink-0 overflow-hidden rounded bg-surface border border-outline-variant/10">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1AU46T2ZqKeL0c2np35mdqjLl7B1AqL7cE-17483DV-5JbtyFtjvBVpgG_wHVlMvmTtlH24hgXRPk7ovjfKtsB7QCYSn_mxGCGje1nTmdiuB2iBPFETTmzBFue_-WFzI9z9YIkmlrB6r7P_pV0PSLEfQLA-J6KRyu_aureFYufCkQbpXSdA8UMYt5n7jbR-ENB68cmf4FpWeSGH99pM-pyT6wfZigxr5mhQ0I1W0czYe5iaGOiNaW" alt="Nithiya Palanivel" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Nithiya Palanivel</h3>
                <p className="font-label-caps text-label-caps text-tertiary mb-6">Founder & CEO</p>
                <p className="text-on-surface-variant font-body-md mb-8">
                  Provides the overall vision and strategic direction for Brillaris Global, leading the organization toward sustainable growth, innovation, and long-term impact.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 group text-center sm:text-left items-center sm:items-stretch">
              <div className="w-48 h-56 sm:w-56 sm:h-72 shrink-0 overflow-hidden rounded bg-surface border border-outline-variant/10">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp3517eTQs_nFXk39Sn8F9G1FvjI_TYR2mfVHcMbcoCMrihiaP0y_IjwxKImk5TYsXRvJz-ncw0_ZqaQWSZHeyEi3hMEK7ttDBfZjQzVt-3TN0R2tB2ei-8Sd6znLRZnSQlBO9-VkvBLEhGEsxEyCEklumOaVEybfhwHjqLPVZBGTlu31E-RO-qrjPpGnHFLAqYKCnh9WODp8E5DuzF7XYAH3p3R5_JSCMHqxiCKWifQPFzWaPD5Sq" alt="Palanivel" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Palanivel</h3>
                <p className="font-label-caps text-label-caps text-tertiary mb-6">Co-Founder</p>
                <p className="text-on-surface-variant font-body-md mb-8">
                  Supports the company's strategic development and organizational growth, helping shape its direction and strengthen its foundation for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 md:py-32 overflow-hidden bg-[#f4f4f4]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 text-center">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Our Journey</span>
          <h2 className="font-headline-md text-headline-md text-black">From Ideas to Innovation</h2>
        </div>
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop relative py-8">
          {/* Central Line for Desktop */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-px bg-outline-variant/30"></div>

          <div className="space-y-12 relative z-10">
            {[
              { year: "2025", title: "The Beginning", desc: "Brillaris Global was founded with a vision to bring technology, creativity, and education together to create meaningful solutions.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
              { year: "Build", title: "Building the Foundation", desc: "We began by developing our technical capabilities, establishing our working processes, and gaining experience through real-world technology initiatives.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
              { year: "Grow", title: "Growing Through Experience", desc: "As our capabilities expanded, we took on increasingly complex challenges, strengthening our expertise in software development, AI, automation, and digital solutions.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
              { year: "Expand", title: "Expanding Our Capabilities", desc: "We continued building a stronger technology foundation while improving our development practices, collaboration, testing, and deployment.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
              { year: "Product", title: "From Projects to Products", desc: "Our direction gradually evolved toward developing products and reusable technologies designed to address broader and recurring problems.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80" },
              { year: "Explore", title: "Exploring New Possibilities", desc: "We continue researching emerging technologies, identifying real-world challenges, and exploring opportunities where technology can create meaningful value.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
              { year: "Future", title: "The Next Chapter", desc: "Brillaris Global is focused on building a stronger ecosystem around technology products, digital services, AI, automation, education, and innovation.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" }
            ].map((milestone, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} relative w-full`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface border-2 border-tertiary z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

                {/* Card Container - Guaranteed same size */}
                <div className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:max-w-none md:w-5/12 h-[240px] md:h-[260px] relative group rounded-xl overflow-hidden flex flex-col justify-end p-6 border border-outline-variant/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Image Background */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url('${milestone.img}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 group-hover:to-transparent transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-2">
                    <span className="inline-block px-3 py-1 bg-tertiary/20 backdrop-blur-sm border border-tertiary/50 rounded-full font-label-caps text-xs text-tertiary mb-1">{milestone.year}</span>
                    <h4 className="font-headline-sm text-xl text-white leading-tight">{milestone.title}</h4>
                    <p className="text-white/90 font-body-md text-sm leading-relaxed opacity-90 line-clamp-3">{milestone.desc}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brillaris Today */}
      <section className="py-24 md:py-32 bg-white px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="w-full md:w-5/12 text-left">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">Brillaris Today</span>
            <h2 className="font-headline-md text-3xl md:text-5xl text-black mb-6 leading-tight">Building the Next Generation of Solutions</h2>
            <p className="text-black font-body-md text-lg mb-10">Today, Brillaris Global is developing beyond the traditional software-project model.</p>
            <p className="text-tertiary font-headline-sm text-2xl italic border-l-4 border-tertiary pl-6 py-2">"Build useful technology. Create meaningful products. Solve real problems. Make an impact."</p>
          </div>
          
          {/* Right Side */}
          <div className="w-full md:w-7/12">
            <div className="bg-tertiary rounded-xl p-8 md:p-10 text-left w-full border border-outline-variant/10 shadow-lg">
              <h3 className="font-headline-sm text-xl text-white mb-6 border-b border-white/20 pb-4">Capabilities Built Around:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Technology Products</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Software Development</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> AI & Intelligent Systems</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Digital Transformation</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Automation</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Technology Services</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Educational Technology</li>
                <li className="flex items-center gap-3 text-white/90 font-body-md"><span className="text-white text-lg">•</span> Creative Technology</li>
              </ul>
            </div>
          </div>
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
            <a href="/leadership">SafeReach</a>
            <a href="/leadership">SmartSportz</a>
            <a href="/leadership">Liyans Vastra</a>
            <a href="/leadership">MealMap</a>
            <a href="/leadership">AI Queue Management</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="/leadership">About</a>
            <a href="/leadership">Careers</a>
            <a href="/leadership">Newsroom</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="/leadership">Privacy Policy</a>
            <a href="/leadership">Terms of Service</a>
            <a href="/leadership">Compliance</a>
            
            <h4 style={{ marginTop: '2rem' }}>Social</h4>
            <a href="/leadership">LinkedIn</a>
            <a href="/leadership">Other official social channels</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Brillaris Global. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}






