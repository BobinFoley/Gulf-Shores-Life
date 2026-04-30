import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Music, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TheHangout = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="The Hangout Gulf Shores Guide | Food, Music & Fun" 
        description="Experience the ultimate beach party at The Hangout in Gulf Shores. Foam parties, live music, and family-friendly dining right on the beach." 
        canonicalUrl="https://gulfshores.life/things-to-do/the-hangout"
      />

      <Link to="/things-to-do" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Activities
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Festive & Fun </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            The <br/> <span className="italic text-natural-accent pl-8">Hangout.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Located exactly where Highway 59 meets the Gulf of Mexico, The Hangout is more than just a restaurant—it's the beating heart of Gulf Shores and the epicenter of beachfront entertainment.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Legacy of Celebration</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The original Hangout was a local landmark dating back to the 1950s, a place where generations of teenagers met to dance, listen to music, and spend their summers on the sand. While the current facility is a modern masterpiece of design, it carries that same spirit of community and youthful exuberance. Spanning a massive footprint at the Main Public Beach, it serves as the host for the world-renowned Hangout Music Festival every May, drawing tens of thousands of music lovers to our shores.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Family-First Atmosphere</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              Despite its high-energy reputation, The Hangout is deeply committed to being family-friendly. The massive outdoor courtyard is a playground for all ages, featuring giant sand pits for castle building, a towering Wish Wall where guests can leave their hopes for the future, and the famous hourly foam parties that leave kids (and more than a few adults) laughing and covered in soapy bubbles. It's a place where you can grab a cold drink and relax while knowing the younger members of your party are safely entertained within view.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Coastal Comfort Food</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The menu at The Hangout is a celebration of Gulf Coast flavors served with a casual, high-volume flair. While they are known for their massive burgers and oversized seafood platters, the real draw is the communal dining experience. Long picnic-style tables encourage guests to make new friends, and the staff is known to lead synchronized dances on top of the tables throughout the day. It's a high-octane environment where every meal feels like a special occasion.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Art and Eclecticism</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Take a moment to wander through the interior and you'll find an incredible collection of pop-culture artifacts and local art. From a massive wall covered in vintage PEZ dispensers to thousands of retro lunchboxes, the decor is a conversation starter. The architecture itself—with its open-air design and massive sliding doors—is intended to bridge the gap between the dining room and the white sands just steps away. Whether you're here for the live music, the food, or just the lively atmosphere, a trip to Gulf Shores isn't complete without "hanging out."
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Quick Stats</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Address</p>
                    <p className="text-sm text-natural-text-main">101 E Beach Blvd<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Status</p>
                    <p className="text-sm text-natural-text-main">Open Daily for Lunch/Dinner</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://thehangout.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">thehangout.com</a>
                  </div>
                </div>
              </div>
              <a href="https://thehangout.com/menu/" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                View Menu
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Music className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Entertainment</p>
                <p className="text-xs text-natural-text-main mt-1">Live Music Daily</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Utensils className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Vibe</p>
                <p className="text-xs text-natural-text-main mt-1">Family Party</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
