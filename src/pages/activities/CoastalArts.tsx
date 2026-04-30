import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Palette, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CoastalArts = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Coastal Arts Center Guide | Glass Blowing & Pottery" 
        description="Visit the Coastal Arts Center of Orange Beach. Explore the Hot Shop, Clay Studio, and vibrant local art gallery on Wolf Bay." 
        canonicalUrl="https://gulfshores.life/things-to-do/coastal-arts-center"
      />

      <Link to="/things-to-do" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Activities
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Art & Culture </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Coastal Arts <br/> <span className="italic text-natural-accent">Center.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Perched on the serene banks of Wolf Bay, the Coastal Arts Center of Orange Beach stands as a beacon of creativity and southern charm, offering an upscale artistic experience amidst the Gulf's natural beauty.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Waterfront Sanctuary</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The Coastal Arts Center is housed in a stunning 10,000-square-foot facility that evokes the classic coastal architecture of yesteryear. Surrounded by Spanish moss-draped oaks and offering sweeping views of the bay, the center is more than just a gallery—it's a sanctuary for the senses. The grounds are meticulously manicured, providing a popular venue for upscale weddings and community events, but its primary mission remains the cultivation and celebration of the visual arts.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Hot Shop</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              Perhaps the center's most unique feature is "The Hot Shop," Alabama's premier public glass-blowing studio. Here, visitors can witness the mesmerizing process of molten glass being transformed into delicate works of art before their very eyes. For those looking for a more hands-on experience, the studio offers "Make Your Own" sessions where professional gaffers guide you in creating your own glass ornament, paperweight, or flower. The heat of the furnace and the skill of the artists make this a truly unforgettable experience.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Clay Studio</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              Adjacent to the main gallery sits the Clay Studio, a fully-equipped pottery facility that caters to everyone from curious beginners to seasoned ceramicists. The studio offers workshops in wheel-throwing and hand-building, allowing guests to get their hands dirty while creating something beautiful and functional. The resident ceramicists are known for their helpful guidance and passion for the medium, ensuring that every visitor leaves with a newfound appreciation for the ancient art of pottery.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Gallery and Gift Shop</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Inside the main building, the gallery showcases a rotating selection of works from regional artists, ranging from vibrant oil paintings and intricate watercolors to jewelry and photography inspired by the local environment. Every piece is carefully curated to reflect the high standard of artistic talent found along the Gulf Coast. The gift shop is the perfect place to find a one-of-a-kind souvenir or a sophisticated gift that captures the unique spirit of our coastal region.
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
                    <p className="text-sm text-natural-text-main">26389 Canal Rd<br/>Orange Beach, AL 36561</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Hours</p>
                    <p className="text-sm text-natural-text-main">Mon - Fri: 9 AM - 4 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://www.coastalartscenter.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">coastalartscenter.com</a>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg">
                View Classes
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Flame className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Highlight</p>
                <p className="text-xs text-natural-text-main mt-1">Glass Blowing</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Palette className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Type</p>
                <p className="text-xs text-natural-text-main mt-1">Art Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
