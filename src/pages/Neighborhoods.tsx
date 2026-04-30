import React from 'react';
import { SEO } from '@/components/SEO';
import { Home, Waves, Trees, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const neighborhoodData = [
  {
    name: "West Beach",
    vibe: "Vacation Lifestyle",
    description: "A narrow strip of land between the Gulf and Little Lagoon. Characterized by colorful beach houses on stilts and luxury condos.",
    pros: ["Beach Access", "Rental Potential", "Lagoon Views"],
    icon: <Waves className="w-6 h-6 text-natural-accent" />
  },
  {
    name: "Craft Farms",
    vibe: "Golf & Luxury",
    description: "A premier golf course community located north of the Intracoastal Waterway. Features upscale homes, manicured lawns, and a quiet atmosphere.",
    pros: ["Golf Course", "Quiet Streets", "High Value"],
    icon: <Trees className="w-6 h-6 text-natural-accent" />
  },
  {
    name: "Fort Morgan",
    vibe: "Secluded & Historic",
    description: "Located at the far west end of the peninsula. Offers large lots, private beaches, and a slow pace of life away from the main tourist areas.",
    pros: ["Seclusion", "Large Lots", "Pet Friendly"],
    icon: <Home className="w-6 h-6 text-natural-accent" />
  },
  {
    name: "The Peninsula",
    vibe: "Gated Resort",
    description: "A gated community on Mobile Bay with golf, tennis, and a private pier. Perfect for those who want a resort feel with neighborhood security.",
    pros: ["Gated Safety", "Mobile Bay Views", "Amenities"],
    icon: <Building2 className="w-6 h-6 text-natural-accent" />
  }
];

export const Neighborhoods = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Best Neighborhoods in Gulf Shores | Real Estate Guide" 
      description="Explore the top neighborhoods to live or buy in Gulf Shores, Alabama. From beach houses to golf course communities." 
    />
    
    <div className="text-center mb-16">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 rounded-full border border-natural-accent/20 w-fit">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-sub"> Real Estate Guide </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-6">Find Your <span className="italic text-natural-accent">Place.</span></h1>
      <p className="text-lg text-natural-text-sub max-w-2xl mx-auto font-light leading-relaxed">
        Whether you are looking for a high-yield vacation rental or a quiet street to raise a family, Gulf Shores has a neighborhood for every speed.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {neighborhoodData.map((area, index) => (
        <div key={index} className="bg-white p-10 rounded-[40px] border border-natural-border/30 hover:border-natural-accent/10 transition-all flex flex-col shadow-sm group">
          <div className="flex items-center justify-between mb-8">
            <div className="w-14 h-14 bg-natural-surface rounded-full flex items-center justify-center group-hover:bg-natural-accent/10 transition-colors">
              {area.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted bg-natural-bg px-4 py-1.5 rounded-full border border-natural-border/50">
              {area.vibe}
            </span>
          </div>

          <h3 className="text-2xl font-serif text-natural-text-dark mb-4">{area.name}</h3>
          
          <p className="text-sm text-natural-text-sub font-light mb-8 leading-relaxed flex-1">
            {area.description}
          </p>

          <div className="pt-8 border-t border-natural-border/20">
             <h4 className="text-[10px] uppercase font-bold tracking-widest text-natural-text-muted mb-4">Best For</h4>
             <div className="flex flex-wrap gap-2">
                {area.pros.map((pro, pIndex) => (
                  <span key={pIndex} className="bg-natural-surface/50 px-3 py-1 rounded-full text-[10px] font-medium text-natural-text-main">
                    {pro}
                  </span>
                ))}
             </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-natural-text text-white p-16 rounded-[60px] text-center flex flex-col items-center justify-center">
         <h2 className="text-3xl font-serif mb-6 italic">Thinking of moving?</h2>
         <p className="text-white/60 font-light mb-10 max-w-sm mx-auto">
           Read our honest breakdown of the practicalities of coastal living.
         </p>
         <Link to="/moving-pros-and-cons" className="bg-natural-accent text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-accent-dark transition-all">
            Read Pros & Cons
         </Link>
      </div>

      <div className="bg-natural-bg p-16 rounded-[60px] border border-natural-border/30 text-center flex flex-col items-center justify-center">
         <h2 className="text-3xl font-serif text-natural-text-dark mb-6">Need a tour?</h2>
         <p className="text-natural-text-sub font-light mb-10 max-w-sm mx-auto">
           Let's get you in touch with a local expert who can walk you through the nuances.
         </p>
         <Link to="/contact" className="bg-natural-text text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-all">
            Contact an Expert
         </Link>
      </div>
    </div>
  </div>
);
