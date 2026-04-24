import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatbotWidget } from '../ChatbotWidget';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-natural-bg font-sans text-natural-text-main">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};
