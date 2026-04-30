import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BigFish = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Big Fish Restaurant & Bar Guide | Fresh Sushi Orange Beach" 
        description="Experience fine dining at Big Fish in Orange Beach. Offering the freshest local catch, high-quality sushi, and a sophisticated atmosphere perfect for date night." 
        canonicalUrl="https://gulfshores.life/restaurants/big-fish"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Premium Coastal </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Big Fish <br/> <span className="italic text-natural-accent">Restaurant.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Big Fish Restaurant & Bar has carved out a niche in Orange Beach as the premier destination for those seeking a sophisticated, chef-driven culinary experience that doesn't compromise on freshness.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Modern Twist on Coastal Dining</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              While many restaurants in the area focus on the "shack" aesthetic, Big Fish leans into modern elegance. The interior is chic and contemporary, with sleek lines and a warm, inviting bar area that buzzes with life elegantly. It's the kind of place that feels just as appropriate for a milestone anniversary as it does for a high-end business lunch. The atmosphere is upscale but maintains a welcoming, hospitable soul that is characteristic of the Gulf Coast.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Art of Sushi</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              One of Big Fish's standout features is its incredible sushi bar. Utilizing the same high-quality, local seafood found in their main dishes, the sushi chefs here produce some of the most intricate and delicious rolls in the region. From the "Big Fish" roll to their daily sashimi specials, the attention to detail is evident in every bite. It has become a favorite for those who want a lighter, refined meal without sacrificing the bold flavors of the coast.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">From the Grill</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              For those who prefer their seafood prepared more traditionally, Big Fish offers an array of incredible grilled options. Their "PickYourFish" menu allows guests to choose their favorite Gulf catch and have it prepared exactly to their liking—whether that's blackened with a fruit salsa or simply grilled with lemon and butter. The chefs are masters of timing, ensuring that each piece of fish is served at the height of its tenderness and flavor.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Cocktail Craft</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              The experience at Big Fish is rounded out by a truly impressive beverage program. Their cocktail list is a mix of sophisticated classics and creative, house-inspired libations that use fresh-squeezed juices and premium spirits. Their wine list is curated to perfectly complement the delicate flavors of their seafood and sushi, with plenty of options for both the casual enthusiast and the serious collector. It is an all-encompassing dining destination that continues to set the bar for excellence in Orange Beach.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Reservations & Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Address</p>
                    <p className="text-sm text-natural-text-main">25814 Canal Rd<br/>Orange Beach, AL 36561</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Recommended</p>
                    <p className="text-sm text-natural-text-main">Reservations are highly recommended for dinner, especially on weekends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://bigfishrestaurantbar.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">bigfishrestaurantbar.com</a>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg">
                Book a Table
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Utensils className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Selection</p>
                <p className="text-xs text-natural-text-main mt-1">Sushi & Grill</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Best For</p>
                <p className="text-xs text-natural-text-main mt-1">Date Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
