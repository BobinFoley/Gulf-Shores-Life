import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Lulus = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="LuLu's Gulf Shores Guide | Food, Fun & Family" 
        description="Plan your visit to LuLu's in Gulf Shores. Experience live music, sand pits, a rope course, and legendary allergy-friendly dining by Lucy Buffett." 
        canonicalUrl="https://gulfshores.life/restaurants/lulus"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Family Destination </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            LuLu's Gulf <br/> <span className="italic text-natural-accent">Shores.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Owned and operated by Lucy Buffett—sister of the legendary Jimmy Buffett—LuLu's is far more than just a place to eat. It is an immersive entertainment complex situated on the Intracoastal Waterway that defines the leisurely coastal lifestyle.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Spirit of "Gumbolaya"</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              LuLu's is built on a philosophy of "Gumbolaya"—a mixture of good food, good music, and good times. The atmosphere is perpetually festive, with live music drifting from the stage every single day. The dining area is expansive and open-air, designed to catch the breeze as boats cruise by on the canal. It’s a place where time seems to slow down, and the stresses of the world are replaced by the simple pleasure of a cold drink and a shared platter of "L.A." (Lower Alabama) caviar.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Leader in Allergy-Friendly Dining</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              One of LuLu's most significant contributions to the culinary world is its pioneering work in allergy-aware dining. Recognizing that many families struggle to find safe options when eating out, Lucy Buffett implemented a rigorous system to manage dietary restrictions. With a dedicated "Allergy Menu" and a separate kitchen area for preparation, LuLu's has become a safe haven for those with gluten sensitivities, nut allergies, and other dietary needs. This commitment to inclusivity ensures that everyone in the family can enjoy a stress-free meal together.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Fun and Games for All Ages</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The genius of LuLu's layout is that it keeps the children entertained while the adults relax. The massive sand pit is a permanent fixture where kids can build castles for hours. For the more adventurous, the Mountain of Youth ropes course and the tropical arcade offer higher-energy thrills. This multifaceted approach makes LuLu's the top choice for large groups and multi-generational reunions, as there truly is something to keep every member of the party engaged.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Signature Flavors</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              When it comes to the food, LuLu's doesn't cut corners. From the slow-cooked gumbo (which takes days to prepare properly) to the famous "Cheeseburger in Paradise," the menu is a love letter to Southern coastal cuisine. Don't leave without trying the Krispy Kreme Bread Pudding—a decadent dessert that has gained a cult following in its own right. Whether you arrive by car or dock your boat at their private slips, a visit to LuLu's is a foundational Gulf Shores experience.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Quick Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Address</p>
                    <p className="text-sm text-natural-text-main">200 East 25th Ave<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Wait Times</p>
                    <p className="text-sm text-natural-text-main">Use their online "Join the Wait" system during peak season.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://lulubuffett.com/gulf-shores/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">lulubuffett.com</a>
                  </div>
                </div>
              </div>
              <a href="https://lulubuffett.com/gulf-shores/menu" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                Explore the Menu
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Users className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Best For</p>
                <p className="text-xs text-natural-text-main mt-1">Large Families</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Specialty</p>
                <p className="text-xs text-natural-text-main mt-1">Allergy Menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
