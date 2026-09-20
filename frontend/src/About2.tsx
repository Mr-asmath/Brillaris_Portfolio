import { motion } from 'framer-motion';

export default function About2() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main>
      {/* 01. About Us - Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/70 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-40" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" }}
          ></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mt-20">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-6 block">01. About Us</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 max-w-5xl mx-auto">
            Building Ideas Into<br/>
            <span className="text-tertiary">Meaningful Solutions.</span>
          </h1>
          <div className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed space-y-4">
            <p>Brillaris Global is a technology and innovation company focused on transforming ideas into practical digital solutions.</p>
            <p>Founded in 2025, we bring together technology, creativity, and education to develop products, applications, and services that solve real-world problems.</p>
            <p>We believe great technology is not only about writing code. It is about understanding people, identifying meaningful problems, designing better experiences, and building solutions that create lasting value.</p>
          </div>
        </div>
      </section>
      
      {/* 02. Who We Are */}
      <section className="py-24 md:py-32 bg-inverse-surface text-background px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 relative">
            <div className="aspect-[4/5] relative rounded overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-surface-container flex items-center justify-center p-8 text-center">
                <h3 className="font-headline-md text-3xl text-tertiary">"Innovation becomes valuable when it creates meaningful impact."</h3>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0">
            <span className="font-label-caps text-label-caps text-on-tertiary-fixed-variant tracking-widest uppercase mb-4 block">02. Who We Are</span>
            <h2 className="font-headline-md text-headline-md text-background mb-8">Technology With Purpose</h2>
            <div className="space-y-6 text-inverse-on-surface font-body-md text-lg">
              <p>Brillaris Global is built around a simple belief: Innovation becomes valuable when it creates meaningful impact.</p>
              <p>We work across software development, digital products, artificial intelligence, automation, creative technology, and educational initiatives.</p>
              <p>Our approach combines technical capability, creative thinking, continuous learning, and practical problem-solving to turn concepts into usable solutions.</p>
              <p>From an early-stage idea to a deployed product, we focus on building technology that is useful, scalable, and designed for real needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. What We Do */}
      <section className="py-24 md:py-32 bg-surface px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">03. What We Do</span>
            <h2 className="font-headline-md text-headline-md text-on-surface max-w-3xl mx-auto">Building Across Technology, Creativity & Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Technology & Software</h3>
              <p className="text-on-surface-variant font-body-md">We design and develop modern web, mobile, and software applications for businesses, organizations, and users.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Digital Products</h3>
              <p className="text-on-surface-variant font-body-md">We create our own technology products focused on solving specific problems and improving everyday experiences.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">AI & Automation</h3>
              <p className="text-on-surface-variant font-body-md">We explore artificial intelligence, machine learning, intelligent automation, and data-driven solutions to improve efficiency and decision-making.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300 md:col-span-1 md:col-start-1">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Creative Technology</h3>
              <p className="text-on-surface-variant font-body-md">We combine technology with creativity to develop engaging digital experiences and innovative solutions.</p>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-10 hover:border-tertiary/30 transition-all duration-300 md:col-span-2">
              <h3 className="font-headline-sm text-headline-sm text-tertiary mb-4">Educational Innovation</h3>
              <p className="text-on-surface-variant font-body-md">We explore technology-driven approaches that support learning, educational experiences, and accessible digital resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Our Approach */}
      <section className="py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">04. Our Approach</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">From Idea to Impact</h2>
            <p className="text-on-surface-variant font-body-md mt-4 max-w-2xl mx-auto">We follow a structured approach to transform ideas into reliable solutions.</p>
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
              <div key={idx} className="bg-surface border border-outline-variant/10 p-8 hover:border-tertiary/30 transition-all">
                <div className="text-tertiary font-label-caps mb-4">0{idx + 1}</div>
                <h3 className="font-headline-sm text-xl text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant font-body-md text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Our Product Mindset */}
      <section className="py-24 md:py-32 bg-primary-container text-center px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-6 block">05. Our Product Mindset</span>
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
            <p className="mt-8 pt-8 border-t border-white/10 text-tertiary text-xl italic">
              Our goal is to transform promising ideas into solutions that can grow beyond their first implementation.
            </p>
          </div>
        </div>
      </section>

      {/* 06 & 07. Vision & Mission Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-inverse-surface text-background py-32 px-margin-mobile md:px-margin-desktop flex flex-col justify-center border-t border-outline-variant/20 md:border-t-0">
          <div className="max-w-xl ml-auto md:mr-12">
            <span className="font-label-caps text-label-caps text-on-tertiary-fixed-variant tracking-widest uppercase mb-6 block">06. Our Vision</span>
            <h3 className="text-2xl text-tertiary mb-6 font-headline-md">A Future Where Innovation Creates Meaningful Possibilities</h3>
            <p className="font-body-md text-lg text-inverse-on-surface mb-6">
              To build an innovative ecosystem where technology, creativity, and education come together to create meaningful solutions, empower businesses and individuals, and contribute to a smarter and more connected future.
            </p>
            <p className="font-body-md text-inverse-on-surface">
              We envision Brillaris Global growing into an organization that develops impactful products, provides valuable technology services, encourages innovation, and creates opportunities for people to learn and build.
            </p>
          </div>
        </div>
        <div className="bg-surface-container-low text-on-surface py-32 px-margin-mobile md:px-margin-desktop flex flex-col justify-center relative">
          <div className="max-w-xl mr-auto md:ml-12">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-6 block">07. Our Mission</span>
            <h3 className="text-2xl text-on-surface mb-8 font-headline-md">Build. Empower. Innovate. Create. Educate. Grow.</h3>
            <ul className="space-y-6">
              {[
                { t: "Build", d: "Develop reliable and meaningful digital solutions." },
                { t: "Empower", d: "Help businesses, organizations, and individuals use technology more effectively." },
                { t: "Innovate", d: "Explore emerging technologies and new approaches to solve problems." },
                { t: "Create", d: "Transform ideas into products, experiences, and services." },
                { t: "Educate", d: "Support learning, knowledge sharing, and technology-driven education." },
                { t: "Grow", d: "Build a continuously learning organization that creates long-term value." }
              ].map((item, i) => (
                <li key={i}>
                  <strong className="text-tertiary block font-headline-sm text-lg mb-1">{item.t}</strong>
                  <span className="text-on-surface-variant font-body-md text-sm">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 08. Problems We Want to Solve */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">08. Problems We Want to Solve</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Technology Should Solve Real Problems</h2>
            <p className="text-on-surface-variant font-body-md mt-4">We focus our thinking on problems that affect people, organizations, and everyday experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Challenges", desc: "Helping organizations improve processes, productivity, and digital capabilities." },
              { title: "Education", desc: "Creating technology that can support better learning experiences and accessibility." },
              { title: "Safety & Communication", desc: "Developing solutions that help people and organizations communicate and respond more effectively." },
              { title: "Everyday Experiences", desc: "Building applications that make common activities simpler, smarter, and more convenient." },
              { title: "Operational Challenges", desc: "Using software, automation, data, and intelligent systems to improve how organizations operate." }
            ].map((p, i) => (
              <div key={i} className="bg-surface-container-low p-8 border border-outline-variant/10">
                <h3 className="font-headline-sm text-xl text-tertiary mb-3">{p.title}</h3>
                <p className="text-on-surface-variant font-body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. Our Technology Mindset & 10. Culture & 11. Values */}
      <section className="py-24 bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Tech Mindset */}
          <div>
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">09. Our Technology Mindset</span>
            <h2 className="font-headline-sm text-2xl text-on-surface mb-6">Engineering With a Purpose</h2>
            <p className="text-on-surface-variant font-body-md mb-6">We continuously develop our capabilities across modern technologies and engineering practices.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Web App Dev', 'Mobile App Dev', 'AI & Machine Learning', 'Data & Analytics', 'Backend Systems', 'APIs & Integrations', 'Cloud & DevOps', 'Automation', 'Real-Time Communication', 'Database Systems'].map((t, i) => (
                <span key={i} className="bg-surface text-on-surface text-xs px-3 py-1 border border-outline-variant/20 rounded">{t}</span>
              ))}
            </div>
            <p className="text-tertiary font-headline-sm italic">"Technology changes continuously. So do we. We believe continuous learning is an essential part of building better technology."</p>
          </div>

          {/* Culture */}
          <div>
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">10. Our Culture</span>
            <h2 className="font-headline-sm text-2xl text-on-surface mb-6">Learning, Ownership & Innovation</h2>
            <ul className="space-y-6">
              {[
                { t: "Build With Purpose", d: "Every solution should have a clear reason and meaningful outcome." },
                { t: "Learn Continuously", d: "We encourage people to continuously develop their technical and professional knowledge." },
                { t: "Take Ownership", d: "Every team member is responsible for the quality and outcome of their work." },
                { t: "Work Together", d: "Strong solutions are built through communication, collaboration, and shared responsibility." },
                { t: "Stay Curious", d: "We encourage questions, experimentation, research, and new ideas." },
                { t: "Improve Every Day", d: "We believe small improvements can create significant long-term progress." }
              ].map((c, i) => (
                <li key={i}>
                  <strong className="text-on-surface block text-sm mb-1">{c.t}</strong>
                  <span className="text-on-surface-variant font-body-md text-sm">{c.d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div>
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">11. Our Core Values</span>
            <h2 className="font-headline-sm text-2xl text-on-surface mb-6">What Guides Us</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {[
                { t: "Innovation", d: "Better ideas and better ways." },
                { t: "Integrity", d: "Honesty and responsible decisions." },
                { t: "Quality", d: "Reliable solutions with attention to detail." },
                { t: "Collaboration", d: "Great results from working together." },
                { t: "Customer Focus", d: "Real users, requirements, and outcomes." },
                { t: "Ownership", d: "Responsibility for our work." },
                { t: "Growth", d: "Learn from experience and feedback." },
                { t: "Impact", d: "Measured by the value we create." }
              ].map((v, i) => (
                <div key={i}>
                  <strong className="text-tertiary block text-sm mb-1">{v.t}</strong>
                  <span className="text-on-surface-variant font-body-md text-xs">{v.d}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 12. Our Journey Timeline */}
      <section className="py-24 md:py-32 overflow-hidden bg-background relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">12. Our Journey</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">From Ideas to Innovation</h2>
        </div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -translate-y-1/2 hidden md:block"></div>
          <div className="flex overflow-x-auto timeline-scroll snap-x snap-mandatory gap-8 pb-12 md:pb-0 pt-8 relative z-10">
            {[
              { year: "2025", title: "Brillaris Global Begins", desc: "Founded with a vision to bring technology, creativity, and education together." },
              { year: "Build", title: "Early Development", desc: "Developing digital solutions while building technical capabilities." },
              { year: "Launch", title: "Liyans Vastra", desc: "A digital solution developed and delivered as part of the growing portfolio." },
              { year: "Expand", title: "SmartSportz", desc: "Expanded development capabilities through a sports-focused platform." },
              { year: "Innovate", title: "SafeReach", desc: "Began developing a school-focused safety and communication solution." },
              { year: "Explore", title: "Expanding Direction", desc: "Exploring new products like MealMap and AI Queue Management." },
              { year: "Future", title: "The Next Chapter", desc: "Moving toward a stronger combination of services, products, and AI solutions." }
            ].map((milestone, idx) => (
              <div key={idx} className="shrink-0 w-72 md:w-80 snap-start relative group">
                <div className="hidden md:block absolute top-[50%] left-6 w-3 h-3 rounded-full bg-surface border-2 border-tertiary -translate-y-1/2 z-10 group-hover:bg-tertiary transition-colors"></div>
                <div className={`md:pb-16 md:pt-0 pb-0 flex flex-col h-full ${idx % 2 === 0 ? 'md:justify-end pt-0' : 'md:justify-start pt-8 mt-8 md:mt-0'}`}>
                  <span className="font-label-caps text-label-caps text-surface-container-highest font-bold leading-none mb-4 block group-hover:text-tertiary/20 transition-colors">{milestone.year}</span>
                  <h4 className="font-headline-sm text-lg text-on-surface mb-2">{milestone.title}</h4>
                  <p className="text-on-surface-variant font-body-md text-sm">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 & 14 & 15. The Next Generation */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-24">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">13. Brillaris Today</span>
              <h2 className="font-headline-md text-3xl text-on-surface mb-6">Building the Next Generation of Solutions</h2>
              <p className="text-on-surface-variant font-body-md mb-6">Today, Brillaris Global is developing beyond the traditional software-project model.</p>
              <p className="text-tertiary font-headline-sm text-xl mb-6">"Build useful technology. Create meaningful products. Solve real problems. Make an impact."</p>
            </div>
            <div className="bg-surface-container-low p-10 border border-outline-variant/10">
              <h3 className="font-label-caps text-on-surface mb-6">Capabilities Built Around:</h3>
              <ul className="grid grid-cols-2 gap-4 text-on-surface-variant font-body-md text-sm">
                <li>• Technology Products</li>
                <li>• Software Development</li>
                <li>• AI & Intelligent Systems</li>
                <li>• Digital Transformation</li>
                <li>• Automation</li>
                <li>• Technology Services</li>
                <li>• Educational Technology</li>
                <li>• Creative Technology</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-center mb-16">
              <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">14. What We Are Building Toward</span>
              <h2 className="font-headline-md text-3xl text-on-surface">A Growing Technology Ecosystem</h2>
              <p className="text-on-surface-variant font-body-md mt-4">Our long-term direction is to create an ecosystem where different areas of technology work together.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { t: "Software Products", d: "Proprietary applications solving market problems." },
                { t: "Technology Services", d: "Reliable development for businesses." },
                { t: "AI & Automation", d: "Intelligent systems improving productivity." },
                { t: "Industry Solutions", d: "Focused applications for specific industries." },
                { t: "Educational Technology", d: "Improving learning and educational experiences." },
                { t: "Creative Innovation", d: "Combining creativity and technology." },
                { t: "Long-Term Partnerships", d: "Building relationships with clients and innovators." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-outline-variant/10 hover:border-tertiary/30 transition-all">
                  <h4 className="text-on-surface font-headline-sm text-lg mb-2">{item.t}</h4>
                  <p className="text-on-surface-variant text-sm font-body-md">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto pt-16 border-t border-outline-variant/10">
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-4 block">15. Our Belief</span>
            <h2 className="font-headline-md text-3xl text-on-surface mb-8">Technology Is Only the Beginning</h2>
            <p className="text-on-surface-variant font-body-md text-lg mb-8">We believe the future belongs to organizations that are willing to learn, adapt, experiment, and build. We are defined by our willingness to discover what can be built tomorrow.</p>
            <div className="flex flex-wrap justify-center gap-6 text-tertiary font-headline-sm italic">
              <span>We build with purpose.</span>
              <span>We innovate with curiosity.</span>
              <span>We grow through learning.</span>
              <span>We create for impact.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 16. Closing */}
      <section className="py-32 bg-primary-container text-center px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-6 block">16. Closing</span>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight">
            The Journey Is<br/>Just Beginning.
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Today, that idea is becoming a growing technology ecosystem. Technology. Creativity. Education. Innovation. Impact.
          </p>
          <div className="inline-flex items-center justify-center bg-tertiary text-on-tertiary-fixed font-label-caps text-label-caps px-8 py-4 rounded shadow-lg font-bold text-lg">
            Brillaris Global — Building What Matters.
          </div>
        </div>
      </section>
    </main>
  );
}
