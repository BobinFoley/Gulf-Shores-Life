import React from 'react';
import { SEO } from '@/components/SEO';
import { Sparkles, Bike, Users, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  {
    category: "Family Fun",
    title: "Alabama Gulf Coast Zoo",
    description: "The 'Little Zoo That Could' - famous for its close encounters with lemurs, kangaroos, and sloths. A must-visit for kids.",
    icon: <Users className="w-6 h-6 text-natural-accent" />,
    url: "https://www.alabamagulfcoastzoo.com/"
  },
  {
    category: "Adventure",
    title: "Gulf State Park Trails",
    description: "28 miles of paved trails through diverse ecosystems. Rent a bike or explore on foot to see alligators, turtles, and hundreds of bird species.",
    icon: <Bike className="w-6 h-6 text-natural-accent" />,
    url: "https://www.alapark.com/parks/gulf-state-park"
  },
  {
    category: "Iconic Spots",
    title: "The Hangout",
    description: "More than just a restaurant - it's a festival vibe every day. Foam parties, sand pits, and live music right at the beach entrance.",
    icon: <Sparkles className="w-6 h-6 text-natural-accent" />,
    url: "https://thehangout.com/"
  },
  {
    category: "Culture",
    title: "The Coastal Arts Center",
    description: "A stunning gallery overlooking Wolf Bay with a hot shop (glass blowing workshops) and clay studio.",
    icon: <Camera className="w-6 h-6 text-natural-accent" />,
    url: "https://www.coastalartscenter.com/"
  }
];

export const ThingsToDo = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Top Things to Do in Gulf Shores | Gulf Shores Life" 
      description="Explore the best family activities, nature trails, and attractions in Gulf Shores, Alabama." 
    />
    
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
           <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Activity Guide </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-4">Beyond the <span className="italic text-natural-accent">Sand.</span></h1>
        <p className="text-lg text-natural-text-sub font-light leading-relaxed">
          While the beach is the main draw, Gulf Shores offers incredible nature, world-class entertainment, and rich local culture. Here is our curated list of must-sees.
        </p>
      </div>
      <div className="flex gap-4">
        <Link to="/restaurants" className="text-xs font-bold uppercase tracking-widest text-natural-text flex items-center gap-2 hover:text-natural-accent transition-colors border-b border-natural-text/20 pb-1">
          Best Places to Eat <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {activities.map((activity, index) => (
        <a 
          key={index} 
          href={activity.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-natural-bg p-8 rounded-[40px] border border-natural-border/40 hover:border-natural-accent/20 transition-all flex flex-col items-start shadow-sm group"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
            {activity.icon}
          </div>
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-natural-text-muted mb-2">
            {activity.category}
          </div>
          <h3 className="text-xl font-serif text-natural-text-dark mb-2 leading-tight">
            {activity.title}
          </h3>
          <p className="text-xs text-natural-text-sub font-light leading-relaxed mb-6">
            {activity.description}
          </p>
          <span className="mt-auto text-[9px] font-bold uppercase tracking-widest text-natural-accent border-b border-natural-accent/20 pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Visit Website
          </span>
        </a>
      ))}
    </div>

    {/* Featured Section */}
    <div className="mt-20 bg-natural-text text-white p-12 md:p-16 rounded-[60px] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-natural-accent/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
       <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">The Backcountry Trail</h2>
            <p className="text-white/70 font-light leading-relaxed mb-8">
              Hugh S. Branyon Backcountry Trail consists of 28 miles of paved trails and seven distinct ecosystems. It's the best way to see the "real" Alabama coast away from the condo towers. Rent a bike at one of the trailheads and keep an eye out for Lefty, the resident alligator at the Dog Pond.
            </p>
            <div className="flex items-center gap-4">
               <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-natural-accent">Pro Tip:</span>
               <span className="text-xs font-light text-white/50">Visit early morning or late afternoon for the best wildlife sightings.</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[50px] border border-white/20 text-center shrink-0">
            <h3 className="text-xl font-serif mb-6">Upcoming Local Fun</h3>
            <p className="text-sm text-white/70 font-light mb-8 max-w-[200px]">Check out our latest festivals and music events.</p>
            <Link to="/events" className="bg-natural-accent text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-natural-accent-dark transition-all inline-block">
              View Events
            </Link>
          </div>
       </div>
    </div>
  </div>
);
