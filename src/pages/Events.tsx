import React from 'react';
import { SEO } from '@/components/SEO';
import { Calendar, Music, Trophy, UtensilsCrossed } from 'lucide-react';

const events = [
  {
    month: "October",
    name: "National Shrimp Festival",
    type: "Food & Music",
    description: "One of the largest festivals in the country. Four days of fresh shrimp, live music, and over 200 artists showing their work.",
    icon: <UtensilsCrossed className="w-6 h-6 text-natural-accent" />
  },
  {
    month: "May",
    name: "Hangout Music Festival",
    type: "Music Festival",
    description: "A world-class music festival held directly on the sand. Previous headliners include Red Hot Chili Peppers, Post Malone, and Lana Del Rey.",
    icon: <Music className="w-6 h-6 text-natural-accent" />
  },
  {
    month: "November",
    name: "Flora-Bama Mullet Toss",
    type: "Quirky Tradition",
    description: "A Gulf Coast original. Hundreds gather to toss a dead fish across the state line to raise money for charity. It's a party like no other.",
    icon: <Trophy className="w-6 h-6 text-natural-accent" />
  }
];

export const Events = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Gulf Shores Events Calendar | Festivals & Weekend Guide" 
      description="Stay up to date with the latest events, live music, and annual festivals in Gulf Shores and Orange Beach, Alabama." 
    />
    
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
           <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Events Guide </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-4">Festivals & <span className="italic text-natural-accent">Traditions.</span></h1>
        <p className="text-lg text-natural-text-sub font-light leading-relaxed">
           From world-class music festivals on the sand to historic fish-flinging contests at the state line, there is always a reason to celebrate in Gulf Shores.
        </p>
      </div>
    </div>

    <div className="space-y-6">
      {events.map((event, index) => (
        <div key={index} className="bg-white p-10 rounded-[40px] border border-natural-border/30 hover:border-natural-accent/10 transition-all flex flex-col md:flex-row gap-10 items-center shadow-sm">
          <div className="flex flex-col items-center justify-center shrink-0 w-24">
             <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-natural-text-muted mb-1">{event.month}</div>
             <div className="w-16 h-16 bg-natural-bg rounded-2xl flex items-center justify-center border border-natural-border/20 shadow-sm">
                {event.icon}
             </div>
          </div>
          <div className="flex-1 text-center md:text-left">
             <span className="text-[10px] uppercase font-bold tracking-widest text-natural-accent mb-2 block">{event.type}</span>
             <h3 className="text-3xl font-serif text-natural-text-dark mb-4">{event.name}</h3>
             <p className="text-sm text-natural-text-sub font-light leading-relaxed max-w-2xl">
               {event.description}
             </p>
          </div>
          <button className="bg-natural-text text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-sm">
             Event Details
          </button>
        </div>
      ))}
    </div>

    {/* Weekend Section */}
    <div className="mt-24 p-12 bg-natural-surface rounded-[60px] border border-natural-border/20 flex flex-col md:flex-row items-center gap-12">
       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <Calendar className="w-8 h-8 text-natural-accent" />
       </div>
       <div className="flex-1">
          <h2 className="text-2xl font-serif text-natural-text-dark mb-4 italic">Visiting this weekend?</h2>
          <p className="text-sm text-natural-text-sub font-light leading-relaxed">
            Local live music happens nightly at spots like The Hangout, Lulu's, and Tacky Jacks. Check our "Local Guide" AI chat widget at the bottom right for real-time recommendations of what's happening tonight!
          </p>
       </div>
    </div>
  </div>
);
