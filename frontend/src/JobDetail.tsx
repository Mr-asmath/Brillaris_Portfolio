import { Briefcase, MapPin, Clock, Bookmark, Share2, CheckCircle2, Minus, BadgeDollarSign, ShieldPlus, PlaneTakeoff, Building2, Timer, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';

export default function JobDetail() {
  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Header Section */}
      <header className="relative pt-32 pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-primary font-label-caps text-xs">
            <span className="flex items-center gap-1"><Briefcase size={14} /> Business Development</span>
            <span className="text-outline-variant">|</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Chennai / Hybrid</span>
            <span className="text-outline-variant">|</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 5+ Years</span>
            <span className="text-outline-variant">|</span>
            <span className="flex items-center gap-1"><Clock size={14} /> Full Time</span>
          </div>
          <h1 className="font-headline-md text-4xl md:text-5xl lg:text-6xl text-white mb-10 max-w-4xl leading-tight">
            Senior Business Development Manager
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <Link to="/apply" className="bg-tertiary text-on-tertiary px-10 py-4 rounded hover:bg-white transition-colors font-label-caps text-xs tracking-widest shadow-[0_0_20px_rgba(228,194,133,0.2)]">
              Apply Now</Link>
            <button className="bg-transparent border border-[#4f8f78]/30 text-white px-6 py-4 rounded hover:bg-[#4f8f78]/10 transition-colors flex items-center gap-2">
              <Bookmark size={18} />
              <span className="font-label-caps text-xs">Save Position</span>
            </button>
            <button className="bg-transparent border border-[#4f8f78]/30 text-white px-6 py-4 rounded hover:bg-[#4f8f78]/10 transition-colors flex items-center gap-2">
              <Share2 size={18} />
              <span className="font-label-caps text-xs">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow bg-white py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Job Details */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="font-headline-md text-2xl text-tertiary mb-6 border-b border-outline-variant/20 pb-4">About The Role</h2>
              <div className="font-body-md text-black/80 space-y-6 leading-relaxed">
                <p>Brillaris Global is seeking a highly strategic and visionary Senior Business Development Manager to drive expansive growth across our Asia-Pacific markets. In this pivotal executive role, you will architect high-value partnerships, identify nascent market opportunities, and lead complex negotiations that shape the future trajectory of our institutional offerings.</p>
                <p>You will operate at the intersection of strategy and execution, collaborating closely with our global leadership team to align regional expansion with our overarching corporate objectives. This is a role designed for a sophisticated operator who thrives in an elite, high-stakes commercial environment.</p>
              </div>
            </section>
            
            <section>
              <h2 className="font-headline-md text-2xl text-tertiary mb-6 border-b border-outline-variant/20 pb-4">Responsibilities</h2>
              <ul className="font-body-md text-black/80 space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Architect and execute comprehensive regional go-to-market strategies to acquire and retain top-tier institutional clients.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Lead complex, multi-stakeholder contract negotiations, ensuring optimal commercial terms and long-term strategic alignment.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Cultivate and manage a robust pipeline of high-value prospects, utilizing advanced market intelligence and predictive analytics.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Collaborate cross-functionally with Product, Operations, and Legal teams to ensure seamless onboarding and delivery of customized client solutions.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Represent Brillaris Global at premier industry conferences and executive forums, establishing thought leadership in the region.</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-headline-md text-2xl text-tertiary mb-6 border-b border-outline-variant/20 pb-4">Requirements</h2>
              <ul className="font-body-md text-black/80 space-y-4">
                <li className="flex items-start gap-4">
                  <Minus className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Minimum 5+ years of progressive experience in corporate business development, B2B sales, or strategic partnerships within the financial services or enterprise SaaS sectors.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Minus className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Demonstrated track record of consistently exceeding multimillion-dollar revenue targets and closing complex enterprise deals.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Minus className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Exceptional executive presence, with the ability to articulate sophisticated value propositions to C-level stakeholders.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Minus className="text-tertiary shrink-0 mt-1" size={18} />
                  <span>Advanced proficiency in financial modeling, commercial structuring, and competitive market analysis.</span>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-headline-md text-2xl text-tertiary mb-6 border-b border-outline-variant/20 pb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#f4f4f4] p-6 rounded border border-outline-variant/20 shadow-sm">
                  <BadgeDollarSign className="text-tertiary mb-4" size={32} />
                  <h3 className="font-label-caps text-black mb-2 uppercase tracking-widest text-xs">Elite Compensation</h3>
                  <p className="text-black/70 text-sm">Top-percentile base salary coupled with an uncapped, performance-driven executive bonus structure.</p>
                </div>
                <div className="bg-[#f4f4f4] p-6 rounded border border-outline-variant/20 shadow-sm">
                  <ShieldPlus className="text-tertiary mb-4" size={32} />
                  <h3 className="font-label-caps text-black mb-2 uppercase tracking-widest text-xs">Comprehensive Coverage</h3>
                  <p className="text-black/70 text-sm">Premium global health, wellness, and life insurance plans for you and your dependents.</p>
                </div>
                <div className="bg-[#f4f4f4] p-6 rounded border border-outline-variant/20 shadow-sm">
                  <PlaneTakeoff className="text-tertiary mb-4" size={32} />
                  <h3 className="font-label-caps text-black mb-2 uppercase tracking-widest text-xs">Global Mobility</h3>
                  <p className="text-black/70 text-sm">Opportunities for international secondments and access to our executive travel program.</p>
                </div>
                <div className="bg-[#f4f4f4] p-6 rounded border border-outline-variant/20 shadow-sm">
                  <Building2 className="text-tertiary mb-4" size={32} />
                  <h3 className="font-label-caps text-black mb-2 uppercase tracking-widest text-xs">Wealth Creation</h3>
                  <p className="text-black/70 text-sm">Generous equity grants and robust retirement matching plans designed for long-term wealth accumulation.</p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0"><div className="sticky top-28 space-y-8">
            {/* Application Card */}
            <div className="bg-[#f4f4f4] border border-outline-variant/20 p-8 rounded shadow-sm">
              <h3 className="font-headline-sm text-2xl text-black mb-6">Ready To Apply?</h3>
              <p className="text-black/70 mb-8 text-sm">Take the next step in your executive career journey. Our refined application process is designed to be efficient and respectful of your time.</p>
              <Link to="/apply" className="w-full block text-center bg-tertiary text-on-tertiary py-4 rounded hover:bg-white hover:text-black transition-colors font-label-caps text-xs tracking-widest mb-6 uppercase border border-tertiary hover:border-outline-variant/30">
                Apply Now</Link>
              <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                <div className="flex items-center gap-3 text-sm text-black/70">
                  <Timer className="text-tertiary" size={18} />
                  <span>Estimated application time: 5 mins</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-black/70">
                  <Calendar className="text-tertiary" size={18} />
                  <span>Deadline: October 30, 2024</span>
                </div>
              </div>
            </div>
            
            {/* Related Jobs */}
            <div className="mt-16">
              <h3 className="font-headline-sm text-xl text-tertiary mb-6 border-b border-outline-variant/20 pb-2">Similar Opportunities</h3>
              <div className="space-y-4">
                <a className="block bg-[#f4f4f4] hover:bg-gray-200 transition-colors p-5 rounded border border-outline-variant/20 group shadow-sm" href="#">
                  <h4 className="font-body-md text-black group-hover:text-tertiary transition-colors mb-2">Strategic Growth Lead</h4>
                  <div className="flex text-xs text-black/70 space-x-3 font-label-caps uppercase">
                    <span>Singapore</span>
                    <span>â€¢</span>
                    <span>Strategy</span>
                  </div>
                </a>
                <a className="block bg-[#f4f4f4] hover:bg-gray-200 transition-colors p-5 rounded border border-outline-variant/20 group shadow-sm" href="#">
                  <h4 className="font-body-md text-black group-hover:text-tertiary transition-colors mb-2">Regional Sales Director</h4>
                  <div className="flex text-xs text-black/70 space-x-3 font-label-caps uppercase">
                    <span>Dubai</span>
                    <span>â€¢</span>
                    <span>Sales</span>
                  </div>
                </a>
                <a className="block bg-[#f4f4f4] hover:bg-gray-200 transition-colors p-5 rounded border border-outline-variant/20 group shadow-sm" href="#">
                  <h4 className="font-body-md text-black group-hover:text-tertiary transition-colors mb-2">Partnership Manager</h4>
                  <div className="flex text-xs text-black/70 space-x-3 font-label-caps uppercase">
                    <span>London / Remote</span>
                    <span>â€¢</span>
                    <span>Business Dev</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
        </div></div></div></main>
  );
}



