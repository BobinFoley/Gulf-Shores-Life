import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloraBamaYC = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Flora-Bama Yacht Club Guide | Waterfront Dining Perdido Key" 
        description="Experience creative coastal cuisine at Flora-Bama Yacht Club. Enjoy sandy-feet-welcome dining, live music, and the best bushwackers on the coast." 
        canonicalUrl="https://gulfshores.life/restaurants/flora-bama-yacht-club"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Open-Air Coastal </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Flora-Bama <br/> <span className="italic text-natural-accent">Yacht Club.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Sitting directly across the road from the legendary Flora-Bama Lounge, the Yacht Club offers a more refined but still thoroughly laid-back dining experience. It is the place where high-quality culinary innovation meets the "no shoes, no shirt, no problem" attitude of the Gulf.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Sophisticated Beach Eats</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              Don't let the relaxed atmosphere fool you—the kitchen at the Yacht Club, led by award-winning chefs, is producing some of the most creative coastal cuisine on the island. Their Greek Shrimp, served with feta and warm pita, is a local obsession, and their fire-grilled oysters are widely considered some of the best in the region. The menu is a thoughtful blend of classic seafood expectations and modern, global influences that keep the dining experience exciting.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Sand in Your Toes Dining</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The Yacht Club is designed to celebrate its environment. Much of the seating is located directly on a private stretch of sand overlooking Old River. It is a favorite spot for boaters, who can tie up at the expansive docks and walk straight into the restaurant. Whether you're arriving by land or sea, there is an undeniable magic to eating a gourmet meal while the sunset reflects off the water and a live acoustic musician provides the perfect backing track.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Bushwacker Tradition</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              A trip to the Flora-Bama complex isn't complete without a Bushwacker. The Yacht Club’s version of this frozen, chocolatey, boozy concoction is legendary. It’s part cocktail, part milkshake, and entirely coastal. Sipped slow while sitting in a beach chair at the water's edge, it is the ultimate symbol of a Gulf Shores vacation.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Live Music and Good Vibes</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              True to its lineage, the Yacht Club maintains a vibrant live music schedule. They tend to feature soulful acoustic acts and local singer-songwriters that complement the relaxed dining environment without overwhelming it. It is a place that manages to be simultaneously high-energy and profoundly relaxing. In a region known for its hospitality, the Yacht Club stands out as a place that treats every guest like an old friend returning home for a summer feast.
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
                    <p className="text-sm text-natural-text-main">17350 Perdido Beach Blvd<br/>Perdido Key, FL 32507</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Hours</p>
                    <p className="text-sm text-natural-text-main">Daily: 11:00 AM - Late</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://www.florabamayachtclub.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">florabamayachtclub.com</a>
                  </div>
                </div>
              </div>
              <a href="https://www.florabamayachtclub.com/menu" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                Explore the Menu
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Music className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Sound</p>
                <p className="text-xs text-natural-text-main mt-1">Daily Live Music</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Must Have</p>
                <p className="text-xs text-natural-text-main mt-1">Bushwacker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
