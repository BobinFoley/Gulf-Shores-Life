import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="h-auto md:h-[140px] px-4 md:px-16 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between border-t border-natural-border bg-natural-bg">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-8 md:mb-0">
        <div className="flex flex-col gap-1">
          <div className="text-[10px] uppercase tracking-widest text-natural-accent font-bold">Discover</div>
          <div className="text-sm font-medium text-natural-text">
            <Link to="/things-to-do" className="hover:text-natural-accent transition-colors">Things to Do</Link> &middot; <Link to="/beaches" className="hover:text-natural-accent transition-colors">Beaches</Link>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[10px] uppercase tracking-widest text-natural-accent font-bold">Stay & Dine</div>
          <div className="text-sm font-medium text-natural-text">
            <Link to="/restaurants" className="hover:text-natural-accent transition-colors">Restaurants</Link> &middot; <Link to="/where-to-stay" className="hover:text-natural-accent transition-colors">Where to Stay</Link>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[10px] uppercase tracking-widest text-natural-accent font-bold">Real Estate</div>
          <div className="text-sm font-medium text-natural-text">
            <Link to="/moving-pros-cons" className="hover:text-natural-accent transition-colors">Moving Guide</Link> &middot; <Link to="/neighborhoods" className="hover:text-natural-accent transition-colors">Neighborhoods</Link>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Link 
          to="/contact" 
          className="border border-natural-border text-natural-text px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-surface transition-colors"
        >
          Contact Us
        </Link>
        <Link 
          to="/login"
          className="w-12 h-12 border border-natural-border rounded-full flex items-center justify-center text-natural-text-muted hover:bg-natural-surface cursor-pointer transition-colors"
          title="Partner Login"
        >
          ←
        </Link>
      </div>
    </footer>
  );
};
