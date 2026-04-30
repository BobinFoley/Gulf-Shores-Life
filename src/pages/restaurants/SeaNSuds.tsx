import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SeaNSuds = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Sea-N-Suds Gulf Shores Guide | Beachfront Seafood" 
        description="Experience Sea-N-Suds in Gulf Shores. Enjoy famous gumbo, fresh shrimp, and raw oysters with the best beach view in town." 
        canonicalUrl="https://gulfshores.life/restaurants/sea-n-suds"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Coastal Landmark </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Sea-N-<span className="italic text-natural-accent">Suds.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Since its inception in 1975, Sea-N-Suds has stood as a guardian of the traditional Gulf Shores experience. It is one of the few remaining original beach shacks that sits directly on the white sand, offering a vibe that modern developments simply cannot replicate.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Genuine Beach Shack Vibe</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              Walking into Sea-N-Suds feels like stepping into a simpler time. The wood-paneled walls are adorned with years of coastal memorabilia, and the large windows offer an unobstructed view of the rolling Gulf waves. It’s a place where sandy feet are expected and the sound of the ocean provides the perfect soundtrack to your meal. The outdoor deck is particularly prized by locals, who gather there at sunset to enjoy the cool breeze and the shifting colors of the Alabama sky.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Legacy of Quality Gumbo</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              If you ask a Gulf Shores resident where to find the best gumbo in town, "Sea-N-Suds" will be the answer more often than not. Their recipe is a closely guarded secret, passed down through generations. A rich, dark roux served with a generous portion of seafood and perfectly seasoned rice, it is the ultimate coastal comfort food. Whether you're visiting in the heat of July or the mild winter months, a bowl of this gumbo is a mandatory part of the pilgrimage.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Freshness You Can Taste</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The menu at Sea-N-Suds is intentionally focused, prioritizing quality over quantity. Their fried shrimp are legendary for their light, crispy batter that doesn't overwhelm the natural sweetness of the Gulf catch. The raw oysters, shucked fresh to order, are a favorite for purists seeking the true flavor of the sea. It's the kind of place that knows exactly what it does well and refuses to complicate it with unnecessary frills.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Local Meeting Spot</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Beyond the food, Sea-N-Suds serves as a vital community hub. It is where multi-generational families return every summer to recreate childhood memories, and where local business owners meet for a quick lunch of a po-boy and a cold beverage. There’s an intangible warmth to the service that makes even a first-time visitor feel like a regular. In an era of increasing commercialization, Sea-N-Suds remains a steadfast reminder of why we fell in love with Gulf Shores in the first place.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Visitor Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Location</p>
                    <p className="text-sm text-natural-text-main">405 W Beach Blvd<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Hours</p>
                    <p className="text-sm text-natural-text-main">Daily: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://sea-n-suds.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">sea-n-suds.com</a>
                  </div>
                </div>
              </div>
              <a href="https://sea-n-suds.com/#menu" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                View Menu
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Utensils className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Must Try</p>
                <p className="text-xs text-natural-text-main mt-1">Seafood Gumbo</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Best Known For</p>
                <p className="text-xs text-natural-text-main mt-1">Beachfront Deck</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
