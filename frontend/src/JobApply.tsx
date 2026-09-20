import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, UploadCloud, CheckCircle2, Check } from 'lucide-react';
import './App.css';

export default function JobApply() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '', location: '', email: '', phone: '',
    currentOrg: '', currentPos: '', linkedIn: '', yearsExp: '',
    degree: '', institution: '',
    summary: '',
    whyBrillaris: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 9) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "Personal Information";
      case 2: return "Professional Background";
      case 3: return "Education";
      case 4: return "Experience Summary";
      case 5: return "Resume & Documents";
      case 6: return "Additional Details";
      case 7: return "Review Application";
      case 8: return "Submit & Legal";
      case 9: return "Application Submitted";
      default: return "";
    }
  };

  if (step === 9) {
    return (
      <main className="min-h-screen bg-white pt-[140px] pb-32 px-margin-mobile md:px-margin-desktop flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center p-12 md:p-16 bg-[#f4f4f4] border border-outline-variant/20 rounded shadow-sm">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-8 border border-outline-variant/20">
            <CheckCircle2 className="text-tertiary" size={48} />
          </div>
          <h1 className="font-headline-md text-4xl text-black mb-4">Application Submitted</h1>
          <p className="font-body-lg text-black/70 mb-12">
            Thank you for applying to the Senior Business Development Manager position. Our executive search team will review your profile and be in touch soon.
          </p>
          <button 
            onClick={() => navigate('/opportunities')}
            className="bg-tertiary text-white px-8 py-4 rounded font-label-caps tracking-widest text-sm hover:opacity-90 transition-opacity uppercase shadow-[0_0_15px_rgba(228,194,133,0.3)]"
          >
            Return to Opportunities
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-[140px] pb-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Context Header */}
        <div className="mb-16">
          <Link to="/job-detail" className="inline-flex items-center text-black/50 hover:text-tertiary transition-colors font-label-caps text-xs uppercase tracking-wider mb-6 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Job Detail
          </Link>
          <h1 className="font-display-lg text-4xl md:text-5xl text-black mb-4">Executive Application</h1>
          <p className="font-body-lg text-black/70">Senior Business Development Manager</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between font-label-caps text-[10px] uppercase tracking-wider mb-4">
            <span className={step >= 1 ? "text-tertiary" : "text-black/30"}>01 Personal</span>
            <div className={`h-[1px] flex-grow mx-4 ${step >= 2 ? "bg-tertiary" : "bg-black/10"}`}></div>
            <span className={`hidden sm:inline ${step >= 2 ? "text-tertiary" : "text-black/30"}`}>02 Prof</span>
            <div className={`hidden sm:block h-[1px] flex-grow mx-4 ${step >= 3 ? "bg-tertiary" : "bg-black/10"}`}></div>
            <span className={`hidden md:inline ${step >= 3 ? "text-tertiary" : "text-black/30"}`}>03 Edu</span>
            <div className={`hidden md:block h-[1px] flex-grow mx-4 ${step >= 5 ? "bg-tertiary" : "bg-black/10"}`}></div>
            <span className={`hidden lg:inline ${step >= 5 ? "text-tertiary" : "text-black/30"}`}>05 Docs</span>
            <div className={`hidden lg:block h-[1px] flex-grow mx-4 ${step >= 8 ? "bg-tertiary" : "bg-black/10"}`}></div>
            <span className={`hidden lg:inline ${step >= 8 ? "text-tertiary" : "text-black/30"}`}>08 Submit</span>
          </div>
          <div className="w-full h-[2px] bg-black/10 rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full bg-tertiary transition-all duration-500" style={{ width: `${(step / 8) * 100}%` }}></div>
          </div>
          <div className="text-right mt-2 font-label-caps text-[10px] text-black/40 tracking-widest uppercase">
            Step {step} of 8
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#f4f4f4] border border-outline-variant/20 p-8 md:p-12 relative overflow-hidden rounded shadow-sm">
          <h2 className="font-headline-md text-2xl text-black mb-10 border-b border-outline-variant/20 pb-4 inline-block relative z-10">
            {getStepTitle()}
          </h2>
          
          <form className="relative z-10 space-y-12" onSubmit={handleNext}>
            
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Full Name</label>
                    <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="e.g. Eleanor Vance" type="text" />
                  </div>
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Location</label>
                    <input name="location" value={formData.location} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="City, Country" type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Corporate Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="contact@domain.com" type="email" />
                  </div>
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Current Organization</label>
                    <input name="currentOrg" value={formData.currentOrg} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="Company Name" type="text" />
                  </div>
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Current Position</label>
                    <input name="currentPos" value={formData.currentPos} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="Job Title" type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">LinkedIn Profile URL</label>
                    <input name="linkedIn" value={formData.linkedIn} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="https://linkedin.com/in/username" type="url" />
                  </div>
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Years of Experience</label>
                    <input name="yearsExp" value={formData.yearsExp} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="0" type="number" min="0" max="50" />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Highest Degree</label>
                    <select name="degree" value={formData.degree} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg appearance-none">
                      <option value="" className="bg-white text-black">Select Degree</option>
                      <option value="Bachelor's" className="bg-white text-black">Bachelor's</option>
                      <option value="Master's / MBA" className="bg-white text-black">Master's / MBA</option>
                      <option value="Doctorate" className="bg-white text-black">Doctorate</option>
                    </select>
                  </div>
                  <div className="relative group">
                    <label className="block font-headline-sm text-lg text-black mb-2 opacity-80 group-focus-within:text-tertiary transition-colors">Institution</label>
                    <input name="institution" value={formData.institution} onChange={handleChange} required className="w-full bg-transparent border-b border-outline-variant/50 py-3 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg" placeholder="University Name" type="text" />
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <div className="relative group">
                <label className="block font-headline-sm text-lg text-black mb-4 opacity-80 group-focus-within:text-tertiary transition-colors">Executive Summary</label>
                <textarea name="summary" value={formData.summary} onChange={handleChange} required rows={5} className="w-full bg-white border border-outline-variant/20 p-4 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg rounded" placeholder="Briefly describe your most significant professional achievement..."></textarea>
              </div>
            )}

            {step === 5 && (
              <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-12 text-center hover:border-tertiary/50 transition-colors cursor-pointer bg-white group">
                <UploadCloud className="mx-auto text-black/40 group-hover:text-tertiary transition-colors mb-4" size={48} />
                <h3 className="font-headline-sm text-lg text-black mb-2">Upload Resume / CV</h3>
                <p className="text-sm text-black/50 mb-6">PDF, DOCX up to 10MB</p>
                <button type="button" className="bg-gray-100 border border-outline-variant/30 px-6 py-2 rounded text-sm uppercase tracking-widest font-label-caps text-black group-hover:border-tertiary transition-colors">Select File</button>
              </div>
            )}

            {step === 6 && (
              <div className="relative group">
                <label className="block font-headline-sm text-lg text-black mb-4 opacity-80 group-focus-within:text-tertiary transition-colors">Why Brillaris Global?</label>
                <textarea name="whyBrillaris" value={formData.whyBrillaris} onChange={handleChange} required rows={4} className="w-full bg-white border border-outline-variant/20 p-4 text-black focus:outline-none focus:border-tertiary transition-colors font-body-lg rounded" placeholder="What draws you to this executive position?"></textarea>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-8">
                
                <div className="bg-white border border-outline-variant/20 p-6 rounded shadow-sm">
                  <h3 className="font-label-caps text-tertiary uppercase tracking-widest mb-4 border-b border-outline-variant/15 pb-2">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="text-black/60">Full Name:</div>
                    <div className="text-black text-right font-medium">{formData.fullName || '-'}</div>
                    <div className="text-black/60">Location:</div>
                    <div className="text-black text-right font-medium">{formData.location || '-'}</div>
                    <div className="text-black/60">Email:</div>
                    <div className="text-black text-right font-medium">{formData.email || '-'}</div>
                    <div className="text-black/60">Phone:</div>
                    <div className="text-black text-right font-medium">{formData.phone || '-'}</div>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant/20 p-6 rounded shadow-sm">
                  <h3 className="font-label-caps text-tertiary uppercase tracking-widest mb-4 border-b border-outline-variant/15 pb-2">Professional Background</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="text-black/60">Organization:</div>
                    <div className="text-black text-right font-medium">{formData.currentOrg || '-'}</div>
                    <div className="text-black/60">Position:</div>
                    <div className="text-black text-right font-medium">{formData.currentPos || '-'}</div>
                    <div className="text-black/60">Experience:</div>
                    <div className="text-black text-right font-medium">{formData.yearsExp ? `${formData.yearsExp} Years` : '-'}</div>
                    <div className="text-black/60">LinkedIn:</div>
                    <div className="text-tertiary text-right font-medium truncate">{formData.linkedIn || '-'}</div>
                  </div>
                </div>

                <div className="bg-white border border-outline-variant/20 p-6 rounded shadow-sm">
                  <h3 className="font-label-caps text-tertiary uppercase tracking-widest mb-4 border-b border-outline-variant/15 pb-2">Education & Summary</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="text-black/60">Highest Degree:</div>
                    <div className="text-black text-right font-medium">{formData.degree || '-'}</div>
                    <div className="text-black/60">Institution:</div>
                    <div className="text-black text-right font-medium">{formData.institution || '-'}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm">
                    <div className="text-black/60 mb-2">Executive Summary:</div>
                    <div className="text-black font-medium p-3 bg-[#f4f4f4] rounded">{formData.summary || '-'}</div>
                  </div>
                  <div className="mt-4 text-sm">
                    <div className="text-black/60 mb-2">Why Brillaris Global:</div>
                    <div className="text-black font-medium p-3 bg-[#f4f4f4] rounded">{formData.whyBrillaris || '-'}</div>
                  </div>
                </div>

                <p className="text-sm text-black/60 text-center">Please verify all information is correct before proceeding to submission.</p>
              </div>
            )}

            {step === 8 && (
              <div className="space-y-6">
                <p className="text-sm text-black/70 leading-relaxed">
                  By submitting this application, you certify that all information provided is accurate and complete. You authorize Brillaris Global to conduct necessary background verification.
                </p>
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="w-6 h-6 border border-outline-variant/40 bg-white rounded flex items-center justify-center shrink-0 mt-1 group-hover:border-tertiary transition-colors">
                    <Check size={14} className="text-tertiary opacity-0 group-active:opacity-100 peer-checked:opacity-100" />
                  </div>
                  <span className="text-sm text-black select-none">I agree to the Terms of Service, Privacy Policy, and consent to data processing for recruitment purposes.</span>
                </label>
              </div>
            )}

            <div className="pt-8 flex items-center justify-between border-t border-outline-variant/15 mt-12">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="px-6 py-3 font-label-caps text-xs uppercase tracking-wider text-black/50 hover:text-black flex items-center gap-2 group transition-colors"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Previous
                </button>
              ) : (
                <div></div>
              )}
              
              <button 
                type="submit"
                className="bg-tertiary text-white px-10 py-4 rounded font-label-caps text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 group shadow-[0_0_15px_rgba(228,194,133,0.3)]"
              >
                {step === 8 ? "Submit Application" : "Save & Continue"}
                {step < 8 && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
