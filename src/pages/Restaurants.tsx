import React from 'react';
import { SEO } from '@/components/SEO';
import { Utensils, Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const restaurants = [
  {
    name: "Sea-N-Suds",
    category: "Casual Seafood",
    description: "A Gulf Shores landmark since 1975. Located right on the beach, it's the place for gumbo, fried shrimp, and raw oysters with a view.",
    highlights: ["Beachfront", "Iconic Gumbo", "Casual Vibe"],
    price: "$",
    url: "https://sea-n-suds.com/"
  },
  {
    name: "Lulu's Gulf Shores",
    category: "Family Experience",
    description: "Owned by Lucy Buffett. It's more than a meal—there's live music, a rope course, and an arcade. Famous for their allergy-friendly menu.",
    highlights: ["Live Music", "Kids Activities", "Large Groups"],
    price: "$$",
    url: "https://lulubuffett.com/gulf-shores/"
  },
  {
    name: "Cobalt, The Restaurant",
    category: "Upscale Casual",
    description: "Located under the Perdido Bay Bridge. Offers contemporary coastal cuisine with every seat in the house having a water view.",
    highlights: ["Sunset Views", "Sunday Brunch", "Fine Dining"],
    price: "$$$",
    url: "https://cobaltrestaurant.com/"
  },
  {
    name: "The Hangout",
    category: "Entertainment & Dining",
    description: "The epicenter of the main public beach. Famous for its high-energy atmosphere, foam parties, and family-friendly burgers.",
    highlights: ["Live Music", "Main Beach", "Party Vibe"],
    price: "$$",
    url: "https://thehangout.com/"
  }
];

export const Restaurants = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Best Restaurants in Gulf Shores | Dining Guide" 
      description="Discover the top dining experiences in Gulf Shores, from casual seafood shacks to waterfront fine dining." 
    />
    
    <div className="text-center mb-16">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 rounded-full border border-natural-accent/20 w-fit">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-sub"> Dining Guide </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-6">Coastal <span className="italic text-natural-accent">Flavors.</span></h1>
      <p className="text-lg text-natural-text-sub max-w-2xl mx-auto font-light leading-relaxed">
        From fresh-off-the-boat seafood to beachside burger joints, the Gulf Shores culinary scene is as diverse as its shoreline.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {restaurants.map((res, index) => (
        <div key={index} className="bg-white p-10 rounded-[40px] border border-natural-border/30 hover:border-natural-accent/10 transition-all flex flex-col md:flex-row gap-8 shadow-sm">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
               <div>
                 <span className="text-[10px] uppercase font-bold tracking-widest text-natural-accent mb-1 block">{res.category}</span>
                 <h3 className="text-2xl font-serif text-natural-text-dark">{res.name}</h3>
               </div>
               <div className="text-sm font-bold text-natural-text-muted">{res.price}</div>
            </div>
            
            <p className="text-sm text-natural-text-sub font-light mb-8 leading-relaxed">
              {res.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {res.highlights.map((tag, tIndex) => (
                <span key={tIndex} className="bg-natural-surface px-3 py-1 rounded-full text-[10px] font-medium text-natural-text-main border border-natural-border/50">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-natural-border/20">
               <button className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted flex items-center gap-2 cursor-not-allowed opacity-50">
                  <MapPin className="w-4 h-4" /> View Map
               </button>
               <a 
                 href={res.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-[11px] font-bold uppercase tracking-widest text-natural-text flex items-center gap-2 hover:text-natural-accent transition-colors"
               >
                  <Star className="w-4 h-4" /> Visit Website
               </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Local Tip Section */}
    <div className="bg-natural-surface p-12 rounded-[50px] border border-natural-border/30 flex flex-col md:flex-row items-center gap-12 mb-20">
       <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-natural-border/20">
          <Utensils className="w-8 h-8 text-natural-accent" />
       </div>
       <div className="flex-1">
          <h2 className="text-2xl font-serif text-natural-text-dark mb-4 italic">The "Royal Red" Experience</h2>
          <p className="text-sm text-natural-text-sub font-light leading-relaxed max-w-3xl">
            If you visit between June and August, be sure to ask for "Royal Reds" at your server. These deep-sea shrimp are only found in the deep waters of the Gulf and taste more like lobster or scallops than traditional shrimp. They are a local treasure and shouldn't be missed.
          </p>
       </div>
    </div>

    <div className="bg-natural-text text-white p-12 md:p-16 rounded-[60px] flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="text-3xl font-serif mb-4 italic">Looking for more?</h2>
        <p className="text-white/60 font-light max-w-lg">
          Check out our full activity guide for things to do between meals!
        </p>
      </div>
      <Link to="/things-to-do" className="bg-natural-accent text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-accent-dark transition-all shadow-lg shrink-0">
        See All Activities
      </Link>
    </div>
  </div>
);
