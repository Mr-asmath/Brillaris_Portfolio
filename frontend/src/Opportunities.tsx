import { Search, Filter, Bookmark, MapPin, Clock, Briefcase, Share2, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Opportunities() {
  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#4f8f78]/15">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent bg-black/60  z-0"></div>
        <div className="relative z-10 max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-4xl md:text-6xl text-on-surface mb-8 tracking-tight">
              Find Your Next Opportunity.
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mt-12 bg-[#124C45] rounded-lg border border-[#4f8f78]/15 p-2 flex items-center focus-within:ring-1 focus-within:ring-tertiary transition-all duration-300 shadow-2xl">
            <Search className="text-on-surface-variant pl-2 mr-2" size={32} />
            <input className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant font-body-lg text-lg h-14 w-full" placeholder="Search jobs, skills or keywords" type="text" />
            <button className="bg-tertiary text-on-tertiary font-body-md px-8 py-3 rounded hover:bg-tertiary-fixed transition-colors h-full flex items-center ml-2">
                Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Layout (Filters, Grid, Sidebar) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content Area (Filters + Job Cards) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Filter Bar */}
          <div className="bg-[#f4f4f4] rounded-lg border border-outline-variant/20 p-4 flex flex-wrap gap-4 items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 text-black font-headline-sm text-base">
              <Filter size={20} /> Filters
            </div>
            <div className="flex flex-wrap gap-3">
              <select className="bg-white border border-outline-variant/30 text-black rounded px-4 py-2 font-body-md appearance-none focus:outline-none focus:ring-1 focus:ring-tertiary focus:border-tertiary">
                <option>Department</option>
                <option>Strategic Growth</option>
                <option>Executive</option>
                <option>Operations</option>
              </select>
              <select className="bg-white border border-outline-variant/30 text-black rounded px-4 py-2 font-body-md appearance-none focus:outline-none focus:ring-1 focus:ring-tertiary focus:border-tertiary">
                <option>Location</option>
                <option>Chennai / Hybrid</option>
                <option>London</option>
                <option>New York</option>
              </select>
              <select className="bg-white border border-outline-variant/30 text-black rounded px-4 py-2 font-body-md appearance-none focus:outline-none focus:ring-1 focus:ring-tertiary focus:border-tertiary hidden md:block">
                <option>Experience</option>
                <option>5+ Years</option>
                <option>10+ Years</option>
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex flex-col gap-6">
            
            {/* Job Card 1 */}
            <article className="bg-[#f4f4f4] rounded-lg border border-outline-variant/20 p-6 hover:border-tertiary/50 transition-colors group relative overflow-hidden shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-tertiary/20 group-hover:bg-tertiary transition-colors"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">Strategic Growth</div>
                  <h2 className="font-headline-md text-2xl text-black leading-tight mb-2 group-hover:text-tertiary transition-colors">Senior Business Development Manager</h2>
                </div>
                <button className="text-black/50 hover:text-tertiary transition-colors">
                  <Bookmark size={24} />
                </button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 font-body-md text-black/70">
                <div className="flex items-center gap-1.5"><MapPin size={18} /> Chennai / Hybrid</div>
                <div className="flex items-center gap-1.5"><Clock size={18} /> Full Time</div>
                <div className="flex items-center gap-1.5"><Briefcase size={18} /> 5+ Years</div>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/10 pt-4">
                <span className="font-body-md text-black/50 text-sm">Posted 2 days ago</span>
                <div className="flex items-center gap-4">
                  <button className="text-black/70 hover:text-tertiary flex items-center gap-1 font-body-md transition-colors">
                    <Share2 size={18} /> Share
                  </button>
                  <Link to="/job-detail" className="bg-white border border-outline-variant/20 text-black px-6 py-2 rounded hover:bg-gray-50 transition-colors font-body-md">View Position</Link>
                </div>
              </div>
            </article>

            {/* Job Card 2 */}
            <article className="bg-[#f4f4f4] rounded-lg border border-outline-variant/20 p-6 hover:border-tertiary/50 transition-colors group relative overflow-hidden shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-tertiary/20 group-hover:bg-tertiary transition-colors"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2">Executive</div>
                  <h2 className="font-headline-md text-2xl text-black leading-tight mb-2 group-hover:text-tertiary transition-colors">Vice President, Global Operations</h2>
                </div>
                <button className="text-black/50 hover:text-tertiary transition-colors">
                  <Bookmark size={24} />
                </button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 font-body-md text-black/70">
                <div className="flex items-center gap-1.5"><MapPin size={18} /> London, UK</div>
                <div className="flex items-center gap-1.5"><Clock size={18} /> Full Time</div>
                <div className="flex items-center gap-1.5"><Briefcase size={18} /> 15+ Years</div>
              </div>
              <div className="flex justify-between items-center border-t border-outline-variant/10 pt-4">
                <span className="font-body-md text-black/50 text-sm">Posted 1 week ago</span>
                <div className="flex items-center gap-4">
                  <button className="text-black/70 hover:text-tertiary flex items-center gap-1 font-body-md transition-colors">
                    <Share2 size={18} /> Share
                  </button>
                  <Link to="/job-detail" className="bg-white border border-outline-variant/20 text-black px-6 py-2 rounded hover:bg-gray-50 transition-colors font-body-md">View Position</Link>
                </div>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-10 h-10 rounded bg-[#f4f4f4] border border-outline-variant/20 flex items-center justify-center text-black/50 hover:text-black hover:border-outline-variant/40 transition-colors"><ChevronLeft size={20} /></button>
            <button className="w-10 h-10 rounded bg-tertiary/10 border border-tertiary text-tertiary font-body-md flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded bg-[#f4f4f4] border border-outline-variant/20 flex items-center justify-center text-black/50 hover:text-black hover:border-outline-variant/40 transition-colors font-body-md">2</button>
            <button className="w-10 h-10 rounded bg-[#f4f4f4] border border-outline-variant/20 flex items-center justify-center text-black/50 hover:text-black hover:border-outline-variant/40 transition-colors font-body-md">3</button>
            <button className="w-10 h-10 rounded bg-[#f4f4f4] border border-outline-variant/20 flex items-center justify-center text-black/50 hover:text-black hover:border-outline-variant/40 transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block"><div className="sticky top-28 space-y-8">
          <div className="bg-[#f4f4f4] rounded-lg p-8 border border-outline-variant/20 text-center flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
              <Star className="text-tertiary" size={32} />
            </div>
            <h3 className="font-headline-sm text-2xl text-black mb-4">Can't find the right role?</h3>
            <p className="font-body-md text-black/70 mb-8">Submit your profile to our private network and we'll keep you in mind for exclusive, unlisted executive opportunities.</p>
            <Link to="/apply" className="w-full bg-white border border-outline-variant/20 text-black font-body-md py-3 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                Submit Your Profile <ArrowRight size={20} /></Link>
          </div>

          <div className="mt-8 bg-[#f4f4f4] rounded-lg p-6 border border-outline-variant/20 text-center flex flex-col items-center shadow-sm">
            <div className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-4">Global Reach</div>
            <div className="font-display-lg text-6xl text-black flex items-baseline">
                85<span className="text-tertiary font-headline-md text-3xl">%</span>
            </div>
            <div className="font-body-md text-black/70 mt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Placement success rate
            </div>
          </div>
        </div></aside>

      </section>
      
    </main>
  );
}


