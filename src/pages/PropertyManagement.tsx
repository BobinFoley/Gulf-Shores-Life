import React from 'react';
import { SEO } from '@/components/SEO';
import { ShieldCheck, MessageSquare, LineChart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const managementPoints = [
  {
    title: "Full-Service Management",
    description: "Most local firms offer end-to-end services: marketing, guest screening, 24/7 maintenance, and monthly accounting. Typical fees range from 15% to 25% of gross rental income.",
    icon: <Home className="w-5 h-5 text-natural-accent" />
  },
  {
    title: "Marketing & Distribution",
    description: "High-performing managers leverage professional photography and sync your listing across Airbnb, Vrbo, Booking.com, and their own direct-booking websites to maximize reach.",
    icon: <LineChart className="w-5 h-5 text-natural-accent" />
  },
  {
    title: "Communication & Guest Experience",
    description: "In the age of reviews, response time is everything. Top managers guarantee sub-30 minute response times to guest inquiries and issues.",
    icon: <MessageSquare className="w-5 h-5 text-natural-accent" />
  },
  {
    title: "Regulatory Compliance",
    description: "From business licenses to the complex 'Leave Only Footprints' beach rules, a good manager ensures your property stays in good standing with the City of Gulf Shores.",
    icon: <ShieldCheck className="w-5 h-5 text-natural-accent" />
  }
];

export const PropertyManagement = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Best Property Management Companies in Gulf Shores | Owner Guide" 
      description="Find the top-rated property managers in Gulf Shores to handle your vacation rental. Compare fees, services, and local expertise." 
    />
    
    <div className="max-w-3xl mb-16">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Management Guide </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-6">Expert <span className="italic text-natural-accent">Stewardship.</span></h1>
      <p className="text-lg text-natural-text-sub font-light leading-relaxed">
        Choosing a property manager is the most critical decision for any out-of-town owner. The right partner turns a stressful asset into a passive income machine.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
      {managementPoints.map((point, index) => (
        <div key={index} className="flex flex-col gap-6">
          <div className="w-12 h-12 bg-natural-bg rounded-full flex items-center justify-center border border-natural-border/30">
            {point.icon}
          </div>
          <div>
            <h3 className="text-2xl font-serif text-natural-text-dark mb-4">{point.title}</h3>
            <p className="text-sm text-natural-text-sub font-light leading-relaxed">
              {point.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Advice Section */}
    <div className="mt-24 bg-natural-bg p-12 rounded-[60px] border border-natural-border/40 mb-20">
       <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="space-y-6 flex-1">
             <h2 className="text-3xl font-serif text-natural-text-dark italic">What to ask a potential manager:</h2>
             <ul className="space-y-4">
                {[
                  "What is your average response time to guest issues?",
                  "Do you have in-house maintenance or use third-party vendors?",
                  "How do you handle dynamic pricing during 'shoulder' seasons?",
                  "Will my property have professional photography included?",
                ].map((q, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-natural-text-sub font-light">
                    <div className="w-1.5 h-1.5 bg-natural-accent rounded-full"></div>
                    {q}
                  </li>
                ))}
             </ul>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-natural-border/20 shadow-sm grow text-center lg:max-w-xs">
             <p className="text-sm text-natural-text-dark font-serif mb-6 italic">"The difference between a 15% manager and a 25% manager is often reflected directly in your annual ROI."</p>
             <Link to="/contact" className="bg-natural-text text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-sm inline-block w-full">
                Get Management Help
             </Link>
          </div>
       </div>
    </div>

    <div className="bg-natural-text text-white p-12 md:p-16 rounded-[60px] flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="text-3xl font-serif mb-4 italic">Own a rental?</h2>
        <p className="text-white/60 font-light max-w-lg">
          Check out our comprehensive guide for vacation rental owners to maximize your investment.
        </p>
      </div>
      <Link to="/vacation-rental-owner-guide" className="bg-natural-accent text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-accent-dark transition-all shadow-lg shrink-0">
        Read Owner Guide
      </Link>
    </div>
  </div>
);
