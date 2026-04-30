import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Sun, Home as HomeIcon, TrendingUp, ArrowRight, Anchor } from 'lucide-react';

export const Home = () => {
  return (
    <>
      <SEO 
        title="Gulf Shores Life | Your Guide to the Coast" 
        description="The practical guide to visiting, living, and investing in the beautiful Gulf Shores region."
      />
      
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/bobs-bucket-for-mmm2025/gulf-shores-life/gulf-shores-sunset.jpg" 
            alt="Gulf Shores Sunset" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-natural-text/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-natural-text/90 via-natural-text/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-16 py-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="w-full lg:w-[65%] flex flex-col justify-center">
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit">
                <span className="w-2 h-2 bg-natural-accent rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                  Coastal Living & Real Estate
                </span>
              </div>
              
              <h1 className="text-6xl md:text-[110px] font-serif leading-[0.85] text-white mb-8 tracking-tighter">
                Gulf Shores <br/>
                <span className="italic text-natural-accent pl-4 md:pl-12 drop-shadow-2xl">Uncovered.</span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-lg leading-relaxed mb-12 font-light">
                Discover the definitive guide to visiting, living, and investing in Gulf Shores. Explore pristine white sand beaches, top-rated local dining, and prime real estate opportunities.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/things-to-do" className="bg-natural-accent text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center gap-2 group">
                  Explore Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/moving-pros-cons" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                  Real Estate
                </Link>
              </div>
            </div>

            {/* Float Card for Weight Balance */}
            <div className="hidden lg:flex flex-col items-center gap-8 translate-y-12">
               <div className="w-[320px] h-[320px] bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center p-12 text-center relative group">
                <div className="absolute inset-0 rounded-full border border-white/5 scale-110 animate-pulse opacity-20"></div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <Anchor className="w-12 h-12 text-natural-accent opacity-80 group-hover:scale-110 transition-transform duration-500" />
                  <div className="w-12 h-[1px] bg-white/20"></div>
                  <p className="font-serif text-lg italic text-white leading-relaxed">
                    "The ultimate resource for coastal life."
                  </p>
                </div>
                
                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white w-32 h-32 rounded-full shadow-2xl flex flex-col items-center justify-center p-4 text-center z-20 border-8 border-natural-bg/10 backdrop-blur-xl">
                  <div className="text-natural-accent text-3xl font-serif leading-none">32</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-natural-text-muted mt-2">
                    Miles of Beach
                  </div>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex flex-col items-center gap-4 text-white/30 animate-bounce mt-8">
                 <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
                 <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-natural-bg to-transparent"></div>
      </div>

      {/* Categories Section */}
      <div className="px-4 md:px-16 py-20 bg-white border-t border-natural-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted">
                Directory
              </span>
            </div>
            <h2 className="text-4xl font-serif text-natural-text-dark">Explore by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit Category */}
            <div className="bg-natural-bg p-10 rounded-[40px] border border-natural-border/40 hover:border-natural-accent/30 transition-all group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Sun className="w-6 h-6 text-natural-accent" />
              </div>
              <h3 className="text-2xl font-serif text-natural-text-dark mb-4 group-hover:text-natural-accent transition-colors">Visit</h3>
              <p className="text-sm text-natural-text-sub font-light mb-8 max-w-xs">
                Plan the perfect coastal getaway with local insights on where to go.
              </p>
              <div className="space-y-4">
                <Link to="/things-to-do" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Things to Do
                </Link>
                <Link to="/beaches" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Best Beaches & Parking
                </Link>
                <Link to="/restaurants" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Top Restaurants
                </Link>
                <Link to="/events" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Events This Weekend
                </Link>
                <Link to="/where-to-stay" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Where to Stay
                </Link>
              </div>
            </div>

            {/* Relocate Category */}
            <div className="bg-natural-bg p-10 rounded-[40px] border border-natural-border/40 hover:border-natural-accent/30 transition-all group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <HomeIcon className="w-6 h-6 text-natural-accent" />
              </div>
              <h3 className="text-2xl font-serif text-natural-text-dark mb-4 group-hover:text-natural-accent transition-colors">Relocate</h3>
              <p className="text-sm text-natural-text-sub font-light mb-8 max-w-xs">
                Everything you need to know about making Gulf Shores your permanent home.
              </p>
              <div className="space-y-4">
                <Link to="/moving-pros-cons" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Pros & Cons of Moving
                </Link>
                <Link to="/neighborhoods" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Best Neighborhoods to Buy
                </Link>
              </div>
            </div>

            {/* Invest Category */}
            <div className="bg-natural-bg p-10 rounded-[40px] border border-natural-border/40 hover:border-natural-accent/30 transition-all group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <TrendingUp className="w-6 h-6 text-natural-accent" />
              </div>
              <h3 className="text-2xl font-serif text-natural-text-dark mb-4 group-hover:text-natural-accent transition-colors">Invest</h3>
              <p className="text-sm text-natural-text-sub font-light mb-8 max-w-xs">
                Maximize your ROI with expert insights on the vacation rental market.
              </p>
              <div className="space-y-4">
                <Link to="/vacation-rental-owner-guide" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Vacation Rental Owner Guide
                </Link>
                <Link to="/property-management" className="flex items-center gap-3 text-sm text-natural-text-main hover:text-natural-accent transition-colors font-medium">
                  <ArrowRight className="w-4 h-4 opacity-50" /> Best Property Managers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Partner Section */}
      <div className="px-4 md:px-16 py-20 bg-natural-surface border-y border-natural-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="bg-white p-12 rounded-[60px] shadow-sm border border-natural-border/20 flex-1">
             <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 rounded-full border border-natural-accent/20">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-accent">Local Recommendation</span>
            </div>
            <h2 className="text-3xl font-serif text-natural-text-dark mb-6">Expert Banking <span className="italic text-natural-accent">Tailored for the Coast.</span></h2>
            <p className="text-natural-text-sub font-light leading-relaxed mb-10 max-w-xl">
              For both personal and commercial banking on the Gulf Coast, we highly recommend <b>First Cahawba Bank</b>. Their local expertise and personalized service make them the ideal partner for residents and investors alike.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[11px] font-bold uppercase tracking-widest text-natural-text-muted">
               <div>
                  <div className="text-natural-accent mb-2">Location</div>
                  <div className="text-natural-text-main">144 Cove Ave<br/>Gulf Shores, AL 36542</div>
               </div>
               <div>
                  <div className="text-natural-accent mb-2">Phone</div>
                  <div className="text-natural-text-main">(251) 948-1001</div>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-6">
             <div className="bg-natural-text text-white p-10 rounded-[50px] shadow-lg">
                <h3 className="text-xl font-serif mb-4 italic">Reliable.</h3>
                <p className="text-xs text-white/60 font-light leading-relaxed font-sans">
                  "Finding a bank that understands the nuances of coastal real estate was key for our investment strategy."
                </p>
             </div>
             <a 
               href="https://firstcahawba.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white border border-natural-border text-natural-text-main px-8 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-bg transition-all text-center block"
             >
                Visit Website
             </a>
          </div>
        </div>
      </div>
    </>
  );
};
