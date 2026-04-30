import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Bike, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GulfStatePark = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Gulf State Park Trails Guide | Biking & Hiking Alabama" 
        description="Explore 28 miles of trails at Gulf State Park. Discover local wildlife, diverse ecosystems, and the Hugh S. Branyon Backcountry Trail." 
        canonicalUrl="https://gulfshores.life/things-to-do/gulf-state-park"
      />

      <Link to="/things-to-do" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Activities
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Nature & Adventure </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Gulf State <br/> Park <span className="italic text-natural-accent">Trails.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Spanning over 6,150 acres between Gulf Shores and Orange Beach, Gulf State Park is the crown jewel of the Alabama coastline. While its beaches are legendary, the park's true soul lies within its extensive trail system.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Hugh S. Branyon Backcountry Trail</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The heart of the park is the Hugh S. Branyon Backcountry Trail, a network of 28 miles of paved and boardwalk paths that wind through seven distinct ecosystems. From rugged sand dunes and coastal marshes to ancient maritime forests and freshwater lakes, the diversity on display is staggering. These trails offer a serene escape from the bustling beachfront condo rows, allowing visitors to experience the "real" Alabama coast as it has existed for centuries.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Wildlife Encounters</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              As you traverse the trails, keep your eyes peeled for the park's famous residents. The Dog Pond is home to several alligators, including "Lefty," a local legend often seen sunning on the banks. The park is also a premier destination for birding, situated along the Mississippi Flyway. Depending on the season, you might spot ospreys diving for fish, bald eagles nesting in the pines, or hundreds of migratory songbirds resting in the thickets. Gopher tortoises, white-tailed deer, and even the occasional bobcat call this protected enclave home.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Sustainable Exploration</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The park's infrastructure is a model of eco-friendly tourism. The trails are handicap-accessible and designed to minimize human impact on the fragile surrounding environments. For those without their own transport, the park offers a unique bike-sharing program, allowing visitors to pick up a bicycle at one station and drop it off at another. This initiative encourages exploration while reducing traffic and pollution within the park's boundaries.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Hidden Gems</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Don't miss the Butterfly Garden, a tranquil spot specifically planted to attract dozens of native species. The Boulder Park offers a fun climbing area for children, while the numerous picnic pavilions provide the perfect spot for a family lunch surrounded by nature. Whether you're an avid cyclist, a casual walker, or a photography enthusiast chasing the golden light of sunset, the trails of Gulf State Park offer an unparalleled connection to the coastal wilderness.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Park Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Primary Access</p>
                    <p className="text-sm text-natural-text-main">20115 State Park Rd<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Open Hours</p>
                    <p className="text-sm text-natural-text-main">Sunrise to Sunset Daily</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://www.alapark.com/parks/gulf-state-park" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">alapark.com</a>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg">
                Download Trail Map
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Bike className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Total Distance</p>
                <p className="text-xs text-natural-text-main mt-1">28 Miles</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Footprints className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Surface</p>
                <p className="text-xs text-natural-text-main mt-1">Paved & Boardwalk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
