import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Info, Car, Umbrella, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const beachSpots = [
  {
    name: "Gulf Place (Main Public Beach)",
    description: "The heart of Gulf Shores. Recently renovated with wide boardwalks, green spaces, and iconic landmarks like The Hangout.",
    features: ["On-site Parking", "Restrooms & Showers", "Beach Attendants", "Food & Drink"],
    access: "Located at the south end of Highway 59.",
    parking: "$15 for 4 hours, or $20 for the day."
  },
  {
    name: "West Beach",
    description: "A quieter, more residential stretch of sand. Ideal for those staying in beach houses or seeking a more peaceful environment.",
    features: ["Quieter Atmosphere", "Residential Vibe", "Soft Sand"],
    access: "Multiple public access points along West Beach Blvd.",
    parking: "Limited street parking and small public lots."
  },
  {
    name: "Fort Morgan",
    description: "Located about 20 minutes west of Gulf Shores. This historic area offers secluded beaches and a dog-friendly atmosphere.",
    features: ["Dog-Friendly", "Historic Site Nearby", "Secluded"],
    access: "Travel west on Highway 180 to the very end.",
    parking: "Ample parking near the Fort."
  },
  {
    name: "Gulf State Park",
    description: "Over two miles of pristine beach with a massive pier and educational center. Great for nature lovers.",
    features: ["Nature Trails", "Fishing Pier", "Eco-Friendly"],
    access: "Entrance via Highway 182 (Beach Blvd).",
    parking: "$10 daily permit required."
  }
];

export const Beaches = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Best Beaches + Public Access & Parking | Gulf Shores Life" 
      description="Find the best spots to lay your towel in Gulf Shores. Detailed guide on parking, access, and beach rules." 
    />
    
    <div className="text-center mb-16">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 rounded-full border border-natural-accent/20 w-fit">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-sub"> Coastal Guide </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-6">Best Beaches <span className="italic text-natural-accent">& Access</span></h1>
      <p className="text-lg text-natural-text-sub max-w-2xl mx-auto font-light leading-relaxed">
        With 32 miles of pristine white sand, finding the right spot is key to a perfect day. From the bustling main beach to secluded historic stretches.
      </p>
    </div>

    {/* Beach Rules Alert */}
    <div className="bg-natural-surface p-8 rounded-[40px] mb-16 border border-natural-border/30 flex flex-col md:flex-row items-center gap-8 shadow-sm">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0">
        <Umbrella className="w-8 h-8 text-natural-accent" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-serif text-natural-text-dark mb-2">"Leave Only Footprints"</h2>
        <p className="text-sm text-natural-text-sub max-w-2xl font-light">
          All personal items (tents, chairs, toys) MUST be removed from the beach by one hour after sunset. Please help us keep our beaches clean and safe for the sea turtles!
        </p>
      </div>
      <Link to="/things-to-do" className="text-xs font-bold uppercase tracking-widest text-natural-text flex items-center gap-2 hover:text-natural-accent transition-colors">
        More to do <ArrowRight className="w-3 h-3" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {beachSpots.map((spot, index) => (
        <div key={index} className="bg-white p-10 rounded-[40px] border border-natural-border/30 hover:border-natural-accent/10 transition-all shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-2xl font-serif text-natural-text-dark">{spot.name}</h3>
            <MapPin className="w-5 h-5 text-natural-accent opacity-60" />
          </div>
          
          <p className="text-sm text-natural-text-sub font-light mb-8 leading-relaxed">
            {spot.description}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-natural-text-muted mb-3">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {spot.features.map((feature, fIndex) => (
                  <span key={fIndex} className="bg-natural-bg px-3 py-1 rounded-full text-[10px] font-medium text-natural-text-main border border-natural-border/50">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-natural-border/20">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-natural-accent mt-0.5" />
                <div className="text-[11px] leading-snug">
                  <span className="font-bold block uppercase tracking-tighter opacity-70">Access</span>
                  <span className="text-natural-text-sub">{spot.access}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-natural-accent mt-0.5" />
                <div className="text-[11px] leading-snug">
                  <span className="font-bold block uppercase tracking-tighter opacity-70">Parking</span>
                  <span className="text-natural-text-sub">{spot.parking}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-natural-text text-white p-12 md:p-16 rounded-[60px] flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="text-3xl font-serif mb-4 italic">Love the beach?</h2>
        <p className="text-white/60 font-light max-w-lg">
          Imagine waking up to these views every day. Explore the best neighborhoods to live in Gulf Shores.
        </p>
      </div>
      <Link to="/neighborhoods" className="bg-natural-accent text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-accent-dark transition-all shadow-lg shrink-0">
        Explore Neighborhoods
      </Link>
    </div>
  </div>
);
