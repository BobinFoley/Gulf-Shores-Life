import React from 'react';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Globe, ArrowLeft, Star, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cobalt = () => {
  return (
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Cobalt The Restaurant Guide | Waterfront Dining Orange Beach" 
        description="Experience fine coastal dining at Cobalt in Orange Beach. Enjoy contemporary cuisine, stunning bay views, and a sophisticated atmosphere." 
        canonicalUrl="https://gulfshores.life/restaurants/cobalt"
      />

      <Link to="/restaurants" className="inline-flex items-center gap-2 text-natural-accent font-bold uppercase tracking-widest text-[10px] mb-12 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-3 h-3" /> Back to Dining Guide
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 mb-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-surface rounded-full border border-natural-border/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted"> Upscale Waterfront </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-natural-text-dark mb-8 leading-tight">
            Cobalt, The <br/> <span className="italic text-natural-accent">Restaurant.</span>
          </h1>
          
          <div className="prose prose-natural max-w-none">
            <p className="text-xl text-natural-text-sub font-light leading-relaxed mb-8">
              Nestled under the majestic Perdido Bay Bridge in Orange Beach, Cobalt represents the pinnacle of contemporary coastal dining. It is a place where sophisticated culinary techniques meet the relaxed elegance of the Alabama coast.
            </p>
            
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">A Room with a View</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The first thing you’ll notice about Cobalt is its architectural brilliance. Designed to maximize its waterfront location, the restaurant features floor-to-ceiling windows that ensure every single seat in the house has a view of the glistening bay. During the early evening, the dining room is bathed in the golden light of the sunset, creating an atmosphere that is both intimate and grand. For those who prefer the open air, the expansive patio offers a front-row seat to the boat traffic entering and leaving the pass.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Culinary Artistry</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              The menu at Cobalt is a departure from the traditional deep-fried focus of many coastal joints. While they certainly respect the classics, the chefs at Cobalt specialize in contemporary preparations. From panko-crusted mahi-mahi to hand-rolled sushi and complex pasta dishes featuring local shrimp, the emphasis is on fresh ingredients and artistic presentation. Their wood-fired oven produces some of the most sophisticated pizzas on the island, infused with a subtle smoky flavor that perfectly complements a glass of crisp white wine.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">The Legendary Sunday Brunch</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-6">
              While cobalt is fantastic for dinner, its Sunday Brunch is a local institution. The spread is legendary—featuring everything from traditional eggs benedict and custom omelets to fresh seafood displays and decadent dessert stations. It has become a cherished tradition for residents and visitors alike, a leisurely way to spend a morning surrounded by family and the beautiful vistas of the Intracoastal Waterway.
            </p>

            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Evening Ambiance</h2>
            <p className="text-natural-text-main font-light leading-relaxed mb-10">
              As night falls, the energy at Cobalt shifts. The lighting becomes moody, the bar area buzzes with conversation, and the soft strains of live music often provide a backdrop to the evening. It is the premier destination for a romantic date night or a sophisticated celebration with friends. Whether you're arriving by land or docking your vessel at their private slips, Cobalt offers an experience that reminds us that coastal living can be as refined as it is relaxed.
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
                    <p className="text-sm text-natural-text-main">28099 Perdido Beach Blvd<br/>Orange Beach, AL 36561</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Peak Hours</p>
                    <p className="text-sm text-natural-text-main">Sunset is the busiest time. Highly recommended for early arrival.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-natural-accent mt-1" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Website</p>
                    <a href="https://cobaltrestaurant.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-natural-accent hover:underline">cobaltrestaurant.com</a>
                  </div>
                </div>
              </div>
              <button className="mt-10 w-full bg-natural-text text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors shadow-lg">
                View Sunday Brunch
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Anchor className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Docking</p>
                <p className="text-xs text-natural-text-main mt-1">Boat Slips Available</p>
              </div>
              <div className="bg-white p-6 rounded-[30px] border border-natural-border/20 text-center">
                <Star className="w-6 h-6 text-natural-accent mx-auto mb-3" />
                <p className="text-[9px] font-bold uppercase tracking-widest text-natural-text-muted">Vibe</p>
                <p className="text-xs text-natural-text-main mt-1">Sophisticated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
