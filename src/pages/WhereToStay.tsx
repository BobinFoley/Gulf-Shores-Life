import React from 'react';
import { SEO } from '@/components/SEO';
import { Building, Home, Tent, Building2 } from 'lucide-react';

const accommodationTypes = [
  {
    type: "Beachfront Condos",
    bestFor: "Families & Couples",
    description: "The most popular choice. High-rise buildings along Beach Blvd offer private balconies, pools, and direct beach access.",
    icon: <Building2 className="w-6 h-6 text-natural-accent" />
  },
  {
    type: "Vacation Houses",
    bestFor: "Large Groups",
    description: "Located primarily in West Beach and Fort Morgan. These offer more privacy, full kitchens, and often private pools.",
    icon: <Home className="w-6 h-6 text-natural-accent" />
  },
  {
    type: "Boutique Hotels",
    bestFor: "Short Stays",
    description: "A few curated hotels like The Lodge at Gulf State Park offer a more traditional hotel experience with eco-friendly amenities.",
    icon: <Building className="w-6 h-6 text-natural-accent" />
  },
  {
    type: "State Park Camping",
    bestFor: "Nature Enthusiasts",
    description: "Gulf State Park offers premium campsites and cabins nestled among the trails and lakes, just a short bike ride from the beach.",
    icon: <Tent className="w-6 h-6 text-natural-accent" />
  }
];

export const WhereToStay = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Where to Stay in Gulf Shores | Accommodations Guide" 
      description="Find the perfect hotel, beachfront condo, or private vacation house in Gulf Shores, Alabama." 
    />
    
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
           <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Lodging Guide </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-4">Your Home <span className="italic text-natural-accent">at the Coast.</span></h1>
        <p className="text-lg text-natural-text-sub font-light leading-relaxed">
           Whether you crave the amenities of a luxury resort or the quiet solitude of a beach house, Gulf Shores has a place for you to rest your head.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {accommodationTypes.map((item, index) => (
        <div key={index} className="bg-white p-8 rounded-[40px] border border-natural-border/30 hover:border-natural-accent/20 transition-all flex flex-col items-center text-center shadow-sm">
          <div className="w-16 h-16 bg-natural-bg rounded-full flex items-center justify-center mb-6 border border-natural-border/20">
            {item.icon}
          </div>
          <h3 className="text-xl font-serif text-natural-text-dark mb-2">{item.type}</h3>
          <div className="text-[10px] uppercase font-bold tracking-widest text-natural-accent mb-4">
             Best for {item.bestFor}
          </div>
          <p className="text-sm text-natural-text-sub font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>

    {/* Featured Stays */}
    <div className="mt-20">
       <h2 className="text-3xl font-serif text-natural-text-dark mb-10 text-center">Featured Accommodations</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "The Lodge at Gulf State Park", 
              tag: "Eco-Friendly Resort",
              desc: "A Hilton property that blends luxury with environmental stewardship. Incredible views and direct park access." 
            },
            { 
              name: "Turquoise Place", 
              tag: "Luxury Conods",
              desc: "The pinnacle of luxury in Orange Beach. Features private hot tubs on every balcony and world-class amenities." 
            },
            { 
              name: "Historic Fort Morgan", 
              tag: "Secluded Rentals",
              desc: "Find remote beach houses where the only sound is the waves. Perfect for a total disconnect." 
            }
          ].map((stay, idx) => (
            <div key={idx} className="bg-natural-surface/30 p-8 rounded-[40px] border border-natural-border/20">
               <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-natural-text-muted mb-2 block">{stay.tag}</span>
               <h3 className="text-lg font-serif text-natural-text-dark mb-4">{stay.name}</h3>
               <p className="text-xs text-natural-text-sub font-light leading-relaxed mb-6">{stay.desc}</p>
               <button className="text-[10px] font-bold uppercase tracking-widest text-natural-text border-b border-natural-text/20 hover:border-natural-accent transition-all">
                  Check Availability
               </button>
            </div>
          ))}
       </div>
    </div>
  </div>
);
