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
      <div className="flex flex-col lg:flex-row gap-12 px-4 md:px-16 py-12 md:py-20 items-center">
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 rounded-full border border-natural-accent/20 w-fit">
            <span className="w-1.5 h-1.5 bg-natural-accent rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-sub">
              Coastal Living & Real Estate
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[88px] font-serif leading-[0.9] text-natural-text-dark mb-8">
            Gulf Shores <br/>
            <span className="italic text-natural-accent pl-8 md:pl-16">Uncovered.</span>
          </h1>
          
          <p className="text-lg text-natural-text-sub max-w-md leading-relaxed mb-10 font-light">
            Discover the definitive guide to visiting, living, and investing in Gulf Shores. Explore pristine white sand beaches, top-rated local dining, and prime real estate opportunities.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link to="/things-to-do" className="bg-natural-text text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors">
              Explore Guide
            </Link>
            <Link to="/moving-pros-cons" className="border border-natural-border text-natural-text px-8 py-4 md:py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-surface transition-colors">
              Real Estate
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[45%] relative flex items-center justify-center mt-12 lg:mt-0">
          <div className="w-full max-w-md h-[400px] md:h-[520px] bg-natural-surface rounded-[80px] relative overflow-hidden flex items-center justify-center">
            <div className="absolute bottom-0 w-full h-[60%] bg-natural-surface-dark/50"></div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-natural-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative w-40 md:w-48 h-64 md:h-80 bg-natural-bg rounded-[100px] shadow-2xl border border-natural-border/30 flex items-center justify-center p-6 text-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <Anchor className="w-12 h-12 text-natural-accent opacity-80" />
                <div className="w-12 h-[1px] bg-natural-border"></div>
                <p className="font-serif text-sm italic text-natural-text-main">
                  "The ultimate resource for coastal life."
                </p>
              </div>
            </div>
            
            <div className="absolute top-12 left-12 w-4 h-4 bg-natural-accent rounded-full opacity-40"></div>
            <div className="absolute bottom-24 right-12 w-6 h-6 bg-natural-border rounded-full"></div>
          </div>
          
          <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white w-28 h-28 md:w-36 md:h-36 rounded-full shadow-2xl border border-natural-surface flex flex-col items-center justify-center p-4 text-center z-10">
            <div className="text-natural-accent text-xl md:text-2xl font-serif leading-none">32</div>
            <div className="text-[8px] uppercase tracking-[0.2em] font-bold text-natural-text-muted mt-2">
              Miles of Beach
            </div>
          </div>
        </div>
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
    </>
  );
};
