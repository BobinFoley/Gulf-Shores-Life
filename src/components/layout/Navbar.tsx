import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Things To Do', path: '/things-to-do' },
    { name: 'Beaches', path: '/beaches' },
    { name: 'Where To Stay', path: '/where-to-stay' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-natural-border bg-natural-bg/95 backdrop-blur supports-[backdrop-filter]:bg-natural-bg/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[90px] items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-natural-accent rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-natural-bg rounded-sm rotate-45"></div>
              </div>
              <span className="font-serif text-2xl tracking-tighter font-medium text-natural-text">
                GULF SHORES
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-natural-text-muted">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "hover:text-natural-text transition-colors py-1",
                    isActive(link.path) ? "text-natural-text border-b border-natural-accent" : ""
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-natural-text text-white px-6 py-3 rounded-full hover:bg-natural-text-sub transition-colors ml-4"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-natural-text hover:text-natural-text-main focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-natural-bg border-t border-natural-border">
          <div className="space-y-1 px-4 pb-3 pt-2 text-[11px] font-bold uppercase tracking-[0.2em]">
            {links.map((link) => (
               <Link
               key={link.name}
               to={link.path}
               onClick={() => setIsOpen(false)}
               className={cn(
                 "block rounded-md px-3 py-3",
                 isActive(link.path) 
                  ? "bg-natural-surface text-natural-text" 
                  : "text-natural-text-muted hover:bg-natural-surface/50 hover:text-natural-text"
               )}
             >
               {link.name}
             </Link>
            ))}
             <Link
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="block rounded-md px-3 py-3 text-natural-text hover:bg-natural-surface"
             >
               Contact Us
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
