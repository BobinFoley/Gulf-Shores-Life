import React from 'react';
import { SEO } from '@/components/SEO';
import { DollarSign, ShieldCheck, ClipboardCheck, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const guideSteps = [
  {
    title: "Understanding the Market",
    description: "Gulf Shores has a highly seasonal market. Peak season (Spring Break through Labor Day) can generate 70-80% of your annual revenue. Understanding occupancy rates and dynamic pricing is the first step to success.",
    icon: <DollarSign className="w-6 h-6 text-natural-accent" />
  },
  {
    title: "Licensing & Regulations",
    description: "Every short-term rental in Gulf Shores must have a business license and collect lodging tax. Familiarize yourself with the 'Leave Only Footprints' policy and local noise ordinances.",
    icon: <ShieldCheck className="w-6 h-6 text-natural-accent" />
  },
  {
    title: "Management Options",
    description: "Decide between full-service management (typically 15-25% fee) or self-managing via platforms like Airbnb and Vrbo. Each has pros and cons regarding time versus profit.",
    icon: <Key className="w-6 h-6 text-natural-accent" />
  },
  {
    title: "Maintenance & Turnover",
    description: "Our humid coastal environment requires diligent maintenance. High-quality cleaning crews and reliable HVAC/plumbing contacts are essential for five-star reviews.",
    icon: <ClipboardCheck className="w-6 h-6 text-natural-accent" />
  }
];

export const VacationRentalOwnerGuide = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Gulf Shores Vacation Rental Owner Guide | Investor Resources" 
      description="Maximize your investment with our comprehensive guide for short-term rental owners in Gulf Shores, Alabama." 
    />
    
    <div className="max-w-4xl mb-20">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Investor Guide </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-6">Maximize Your <span className="italic text-natural-accent">Investment.</span></h1>
      <p className="text-lg text-natural-text-sub font-light leading-relaxed">
        Owning a vacation rental in Gulf Shores can be incredibly rewarding, but it requires a strategic approach to management, maintenance, and marketing.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      {guideSteps.map((step, index) => (
        <div key={index} className="flex gap-8 group">
          <div className="w-16 h-16 bg-natural-bg rounded-2xl flex items-center justify-center shrink-0 border border-natural-border/30 group-hover:bg-natural-accent/10 transition-colors">
            {step.icon}
          </div>
          <div>
            <h3 className="text-2xl font-serif text-natural-text-dark mb-4">{step.title}</h3>
            <p className="text-sm text-natural-text-sub font-light leading-relaxed max-w-md">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Featured Resource */}
    <div className="p-1 rounded-[60px] bg-gradient-to-br from-natural-border/20 via-transparent to-natural-border/10">
       <div className="bg-white p-12 md:p-16 rounded-[59px] border border-natural-border/20 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
             <h2 className="text-4xl font-serif text-natural-text-dark mb-6 italic"> Lodging Tax Breakdown </h2>
             <p className="text-natural-text-sub font-light leading-relaxed mb-8">
               In Gulf Shores, the total lodging tax is 13% (4% State, 2% County, and 7% City). It is critical to ensure these are calculated correctly for every booking to avoid penalties. Our partner experts can help you audit your current management statements.
             </p>
             <div className="flex flex-wrap gap-4">
                <div className="bg-natural-bg px-6 py-4 rounded-3xl border border-natural-border/30 text-center">
                   <div className="text-2xl font-serif text-natural-accent">13%</div>
                   <div className="text-[9px] uppercase font-bold tracking-widest text-natural-text-muted mt-1">Total Tax</div>
                </div>
                <div className="bg-natural-bg px-6 py-4 rounded-3xl border border-natural-border/30 text-center">
                   <div className="text-2xl font-serif text-natural-text-dark">7%</div>
                   <div className="text-[9px] uppercase font-bold tracking-widest text-natural-text-muted mt-1">City Tax</div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/3 w-full bg-natural-surface p-10 rounded-[50px] border border-natural-border/20 text-center">
             <h4 className="text-lg font-serif text-natural-text-dark mb-4">Professional Help</h4>
             <p className="text-sm text-natural-text-sub font-light mb-6">
                Need a hand managing your property? Explore the best local property management companies.
             </p>
             <Link to="/property-management" className="w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-sm inline-block">
                See Property Managers
             </Link>
          </div>
       </div>
    </div>
  </div>
);
