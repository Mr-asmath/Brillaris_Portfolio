import { Link } from 'react-router-dom';
import './App.css';

export default function SignIn() {
  return (
    <main className="min-h-screen relative flex flex-col justify-center items-center px-4 pt-20 pb-12">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')" }}></div>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="w-full max-w-md bg-[#f4f4f4] border border-outline-variant/20 rounded-xl shadow-2xl p-8 md:p-10 relative z-10 overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center mb-10">
          <h1 className="font-headline-md text-3xl text-black mb-2">Welcome Back</h1>
          <p className="font-body-md text-black/70">Sign in to your Brillaris Global account</p>
        </div>

        <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="font-label-caps text-black/70 block uppercase tracking-widest text-xs" htmlFor="email">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              className="w-full bg-white border border-outline-variant/30 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors"
              placeholder="name@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-label-caps text-black/70 block uppercase tracking-widest text-xs" htmlFor="password">
              Password
            </label>
            <input 
              type="password" 
              id="password"
              className="w-full bg-white border border-outline-variant/30 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-colors"
              placeholder="••••••••"
              required
            />
            <div className="text-right mt-1">
              <a href="#" className="font-body-md text-sm text-tertiary hover:opacity-80 transition-opacity">Forgot password?</a>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-tertiary text-white font-body-md font-medium text-lg py-3 rounded-lg hover:opacity-90 transition-opacity mt-4 shadow-[0_0_15px_rgba(228,194,133,0.3)]"
          >
            Sign In
          </button>
        </form>
        
      </div>
    </main>
  );
}
