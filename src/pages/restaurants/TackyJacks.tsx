import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TackyJacks = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Tacky Jacks Gulf Shores Guide | Breakfast & Waterfront Views" 
        description="Experience the classic local vibe at Tacky Jacks. Famous for 'Mexican Garbage' nachos, waterfront dining, and the best breakfast in Gulf Shores." 
        canonicalUrl="https://gulfshores.life/restaurants/tacky-jacks"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Local Favorite </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Tacky <br/> <span className="italic text-natural-accent pl-8">Jacks.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              With its vibrant colorful decor and prime waterfront locations, Tacky Jacks is the quintessential island hangout. It's a place where the atmosphere is loud, the people are friendly, and the food is consistently satisfying.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Legendary Mexican Garbage</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              You haven't truly experienced Tacky Jacks until you've tackled a platter of "Mexican Garbage." Despite the irreverent name, these are widely considered the best nachos on the Gulf Coast. A massive mound of tortilla chips loaded with beef, beans, tomatoes, onions, green peppers, jalapeños, and a mountain of melted cheese, it's designed to be shared with a group of friends as you watch the boats drift by on the canal.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Breakfast by the Water</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              While many know it for the afternoon drinks and rowdy dinners, Tacky Jacks is secretly one of the best breakfast spots in town. Locals flock here for the Farmer’s Omelet and the "Tacky Jack’s Omelet," served with a side of waterfront serenity. There is something profoundly peaceful about sipping coffee on the multi-level deck as the sun rises over the marina, watching the charter boats prepare for their day in the deep Gulf.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Multi-Level Experience</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The Gulf Shores location is built into the side of a hill overlooking the Intracoastal Waterway, creating a unique multi-level environment. Each floor offers a slightly different perspective of the water, and the walls are plastered with thousands of colorful stickers and duct tape messages left by visitors over the decades. It’s a visual representation of the restaurant's long history as a place for celebration and community.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">True Island Hospitality</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              The staff at Tacky Jacks embody the laid-back spirit of our coastal town. They are known for their efficiency even during the busiest summer rushes and their ability to make everyone feel like a regular. Whether you're here for the live music, the vibrant sunset views, or just a solid po-boy after a day on the water, Tacky Jacks delivers a slice of the real Gulf Shores that keeps people coming back year after year.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Visitor Guide</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Address</p>
                    <p className="text-sm text-natural-text-main">240 E 24th Ave<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Top Tip</p>
                    <p className="text-sm text-natural-text-main">Great for sunset watching. Try the upstairs bar for the best breezes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://tackyjacks.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">tackyjacks.com</a>
                  </div>
                </div>
              </div>
              <a href="https://tackyjacks.com/gulf-shores-menu" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                See the Menu
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Anchor className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Transport</p>
                <p className="text-xs text-natural-text-main mt-1">Boat Accessible</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Must Eat</p>
                <p className="text-xs text-natural-text-main mt-1">Mexican Garbage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
