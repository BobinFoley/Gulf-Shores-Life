import React from 'react';
import { SEO } from '@/components/SEO';
import { CheckCircle2, XCircle, Home, TrendingUp, Sun, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const pros = [
  {
    title: "Lower Property Taxes",
    description: "Alabama consistently has some of the lowest property taxes in the United States, making home ownership more affordable for retirees and families alike.",
    icon: <Home className="w-5 h-5 text-green-600" />
  },
  {
    title: "Coastal Lifestyle",
    description: "Access to world-class beaches, boating, and fishing right in your backyard. The outdoor lifestyle is year-round thanks to the mild climate.",
    icon: <Sun className="w-5 h-5 text-green-600" />
  },
  {
    title: "Strong Rental Market",
    description: "If you decide to move or buy a second home, the vacation rental market is incredibly robust, providing excellent passive income potential.",
    icon: <TrendingUp className="w-5 h-5 text-green-600" />
  }
];

const cons = [
  {
    title: "Insurance Costs",
    description: "Wind and flood insurance can be significantly higher than inland properties due to the risk of hurricanes and tropical storms.",
    icon: <ShieldAlert className="w-5 h-5 text-red-600" />
  },
  {
    title: "Heavy Tourism Traffic",
    description: "From Memorial Day to Labor Day, traffic on Highway 59 and Canal Road can be intense, and local favorites often have long wait times.",
    icon: <XCircle className="w-5 h-5 text-red-600" />
  },
  {
    title: "Humid Summers",
    description: "July and August are notoriously humid. While the sea breeze helps, the heat index can frequently reach triple digits.",
    icon: <Sun className="w-5 h-5 text-red-600" />
  }
];

export const MovingProsCons = () => (
  <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
    <SEO 
      title="Moving to Gulf Shores: Pros & Cons | Relocation Guide" 
      description="Thinking about relocating to the Alabama Gulf Coast? Read our honest guide on the pros and cons of living in Gulf Shores." 
    />
    
    <div className="max-w-3xl mb-16">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Relocation Guide </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-6">Paradise <span className="italic text-natural-accent">with Perspective.</span></h1>
      <p className="text-lg text-natural-text-sub font-light leading-relaxed">
        Making a move to the coast is a dream for many, but it is important to weigh the practicalities of island life against the vacation daydream.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Pros Column */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
           </div>
           <h2 className="text-3xl font-serif text-natural-text-dark">The Benefits</h2>
        </div>
        
        {pros.map((pro, index) => (
          <div key={index} className="bg-white p-8 rounded-[40px] border-l-4 border-l-green-500 border border-natural-border/30 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
               {pro.icon}
               <h3 className="text-xl font-serif text-natural-text-dark">{pro.title}</h3>
            </div>
            <p className="text-sm text-natural-text-sub font-light leading-relaxed">
              {pro.description}
            </p>
          </div>
        ))}
      </div>

      {/* Cons Column */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-red-600" />
           </div>
           <h2 className="text-3xl font-serif text-natural-text-dark">The Challenges</h2>
        </div>

        {cons.map((con, index) => (
          <div key={index} className="bg-white p-8 rounded-[40px] border-l-4 border-l-red-500 border border-natural-border/30 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
               {con.icon}
               <h3 className="text-xl font-serif text-natural-text-dark">{con.title}</h3>
            </div>
            <p className="text-sm text-natural-text-sub font-light leading-relaxed">
              {con.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Advice Card */}
    <div className="mt-20 bg-natural-surface p-12 rounded-[60px] border border-natural-border/30 text-center">
       <h2 className="text-3xl font-serif text-natural-text-dark mb-6 italic">Choosing a Neighborhood</h2>
       <p className="text-natural-text-sub max-w-2xl mx-auto font-light leading-relaxed mb-10">
         Relocating to Gulf Shores is a complex decision involving insurance, proximity to the beach, and understanding the rental market. Explore our neighborhood guide to find the perfect fit.
       </p>
       <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
         <Link to="/neighborhoods" className="bg-natural-text text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg">
            Neighborhood Guide
         </Link>
         <Link to="/contact" className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted hover:text-natural-accent transition-colors">
            Ask an Expert
         </Link>
       </div>
    </div>
  </div>
);
