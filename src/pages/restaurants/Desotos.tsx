import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Desotos = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="De Soto's Seafood Kitchen Guide | Best Seafood Gulf Shores" 
        description="Experience the locals' choice at De Soto's Seafood Kitchen. Enjoy award-winning seafood specials, fresh Gulf shrimp, and homestyle sides in Gulf Shores." 
        canonicalUrl="https://gulfshores.life/restaurants/desotos-seafood"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Locals' Choice </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            De Soto's <br/> <span className="italic text-natural-accent">Seafood.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Consistently voted "Best Seafood" and "Best Lunch" by the readers of local publications, De Soto's Seafood Kitchen is where the residents of Gulf Shores go when they want perfectly prepared, fresh-off-the-boat seafood.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Commitment to Freshness</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              While many tourist-heavy spots rely on frozen imports, De Soto's prides itself on sourcing as much as possible from the local Gulf waters. Their daily specials are dictated by what the fishing fleet brought in that morning. Whether it's triggerfish, snapper, or flounder, you can rest assured that the protein on your plate was swimming in the Gulf only hours before. This commitment to quality has earned them a fiercely loyal following that spans decades.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Famous Lunch Specials</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              If you find yourself in Gulf Shores on a weekday afternoon, the lunch rush at De Soto's is a thing to behold. Their lunch specials are legendary for their value and quality. Each main course is served with two sides and a basket of their famous fresh rolls. From their coconut shrimp to their blackened catfish, the portions are generous, and the service is brisk and friendly. It is the perfect spot for a satisfying meal that won't break the bank.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Classic Coastal Decor</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The ambiance at De Soto's is clean, airy, and unpretentious. It lacks the rowdy party vibe of the beachfront bars, making it an excellent choice for a peaceful family dinner or a quiet conversation. The walls are decorated with subtle coastal art and artifacts, creating a space that feels like a comfortable home-away-from-home. It’s a place where the focus remains exactly where it should be—on the incredible seafood and the people you're sharing it with.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Award-Winning Recipes</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Many of the recipes at De Soto's have won individual culinary awards over the years. Their gumbo is a perennial contender for "best in town," and their key lime pie is frequently cited as the perfect end to a coastal meal. The chefs here respect the ingredients, utilizing simple seasonings that allow the natural flavor of the Gulf catch to shine through. After one visit, it becomes immediately clear why the locals consider this their "hidden gem" in the heart of Gulf Shores.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Dining Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Address</p>
                    <p className="text-sm text-natural-text-main">138 W 1st Ave<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Busy Times</p>
                    <p className="text-sm text-natural-text-main">12:00 PM - 1:30 PM (Lunch) is very busy. Get there early!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://www.desotosseafoodkitchen.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">desotosseafoodkitchen.com</a>
                  </div>
                </div>
              </div>
              <a href="https://www.desotosseafoodkitchen.com/menu" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                View Today's Specials
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Utensils className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Best Value</p>
                <p className="text-xs text-natural-text-main mt-1">Lunch Specials</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Must Try</p>
                <p className="text-xs text-natural-text-main mt-1">Stuffed Flounder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
