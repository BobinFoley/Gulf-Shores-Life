import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Zoo = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Alabama Gulf Coast Zoo Guide | The Little Zoo That Could" 
        description="Plan your visit to the Alabama Gulf Coast Zoo. Experience close encounters with lemurs, kangaroos, and more in Gulf Shores." 
        canonicalUrl="https://gulfshores.life/things-to-do/zoo"
      />

      <Link to="/things-to-do" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Activities
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Iconic Spots </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Alabama Gulf <br/> Coast <span className="italic text-natural-accent">Zoo.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Nestled just a few miles inland from the pristine white sands of Gulf Shores, the Alabama Gulf Coast Zoo—affectionately known as "The Little Zoo That Could"—offers one of the most intimate and educational wildlife experiences in the Southeast.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Story of Resilience</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The zoo gained international fame following the 2004 hurricane season when it became the subject of a compelling documentary series. Forced to evacuate its entire animal population three times in two years, the staff's heroic efforts to protect their charges earned them a reputation for unprecedented dedication. Today, the zoo has matured into a world-class facility located on a sprawling 25-acre site, designed with both animal welfare and visitor experience at the forefront.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Up-Close Encounters</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              What sets this zoo apart from larger metropolitan facilities is its commitment to animal encounters. Visitors have the unique opportunity to participate in supervised interactions with some of the zoo's most popular residents. From feeling the soft fur of a kangaroo to the curious touch of a lemur, these encounters are designed to foster a deep, personal connection between humans and the natural world. These programs are not only the highlight for many families but also serve as a vital educational tool, highlighting the importance of conservation.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Diverse Inhabitants</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The zoo is home to over 300 animals, representing a wide array of species from around the globe. Visitors can marvel at the majesty of African lions, observe the playful antics of spider monkeys, and admire the striking patterns of Bengal tigers. The facility also features a dedicated reptiles house, a towering giraffe feeding station, and a petting zoo where younger guests can interact with domesticated farm animals. Each exhibit is thoughtfully designed to mimic the natural habitats of the inhabitants while providing clear vantage points for guests.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Conservation and Education</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              Beyond the visual spectacle, the Alabama Gulf Coast Zoo is a hub for conservation efforts. As a non-profit organization, the zoo reinvests its resources into breeding programs for endangered species and public outreach. Their educational staff provides daily presentations that delve into the biological needs of the animals and the environmental challenges they face in the wild. By visiting the zoo, guests are directly supporting the preservation of these incredible creatures for generations to come.
            </p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-12 space-y-8">
            <div className="bg-natural-surface p-10 rounded-[50px] border border-natural-border/30 shadow-sm">
              <h3 className="text-xl font-serif text-natural-text-dark mb-6 italic">Visitor Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Location</p>
                    <p className="text-sm text-natural-text-main">20499 Oak Rd E<br/>Gulf Shores, AL 36542</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Hours</p>
                    <p className="text-sm text-natural-text-main">Daily: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://www.alabamagulfcoastzoo.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">alabamagulfcoastzoo.com</a>
                  </div>
                </div>
              </div>
              <a href="https://www.alabamagulfcoastzoo.com/tickets" target="_blank" rel="noopener noreferrer" className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg block text-center">
                Get Tickets
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Users className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Perfect For</p>
                <p className="text-xs text-natural-text-main mt-1">Families</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Heart className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Must Do</p>
                <p className="text-xs text-natural-text-main mt-1">Lemur Encounter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
