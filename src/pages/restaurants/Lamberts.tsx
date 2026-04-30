import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Lamberts = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Lambert's Cafe Guide | Home of Throwed Rolls Foley AL" 
        description="Experience Lambert's Cafe in Foley, AL. Famous for throwed rolls, massive portions, and authentic southern comfort food just north of Gulf Shores." 
        canonicalUrl="https://gulfshores.life/restaurants/lamberts-cafe"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Southern Tradition </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Lambert's <span className="italic text-natural-accent">Cafe.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Located just a short drive north of Gulf Shores in Foley, Alabama, Lambert's Cafe is a cultural phenomenon. It is a place where eating is an interactive sport and the hospitality is as large as the portions.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The "Home of Throwed Rolls"</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The legend of the "Throwed Rolls" began in the 1970s when the restaurant was too crowded for the server to reach a customer, so he simply tossed a roll across the room. Today, it is the restaurant's signature move. Professional "roll throwers" weave through the dining room with carts of fresh-from-the-oven yeast rolls, looking for guests with their hands in the air. It’s a high-energy, chaotic, and incredibly fun environment that delight children and adults alike. There is something undeniably joyous about catching your dinner mid-air.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Secret of "Pass-Arounds"</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              One of the most unique aspects of the Lambert's experience is the "Pass-Arounds." While you wait for your main course, servers circle the room with massive pots of supplemental sides. Fried okra, black-eyed peas, macaroni and tomatoes, and even fried potatoes and onions are spooned onto your plate at no extra charge. It is almost impossible to leave Lambert's hungry, as the pass-arounds effectively turn every meal into a bottomless southern feast.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Authentic Southern Flavors</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The main menu is a collection of Southern comfort food classics. From the massive chicken fried steak covered in white gravy to the slow-cooked pot roast and smoked ribs, the flavors are unapologetically traditional. Everything is made from scratch, utilizing the kind of recipes that have been staples of Alabama farm tables for decades. The portions are so large that the restaurant provides take-home boxes as a standard part of the service.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Family Legacy</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Lambert's Cafe is more than a restaurant; it’s a living tribute to a specific era of American hospitality. The walls are covered with vintage photography and memorabilia that tell the story of the Lambert family's journey in the restaurant business. Despite its massive popularity and often long wait times, it manages to maintain a sense of genuine local charm. It is a mandatory stop for many families on their way to or from the beach, a place where the meal is just one part of the memories made.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Know Before You Go</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Address</p>
                    <p className="text-sm text-natural-text-main">2981 S McKenzie St<br/>Foley, AL 36535</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Wait Times</p>
                    <p className="text-sm text-natural-text-main">Often 1-2 hours on weekends. They do not accept reservations. Bring your patience!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://throwedrolls.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">throwedrolls.com</a>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-4 bg-white/50 border border-natural-accent/20 rounded-2xl text-[10px] text-natural-text-muted leading-relaxed italic">
                Pro Tip: They are Cash or Check only, but have ATMs on site.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Utensils className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Portion Size</p>
                <p className="text-xs text-natural-text-main mt-1">Staggering</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Must Catch</p>
                <p className="text-xs text-natural-text-main mt-1">Thrown Rolls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
