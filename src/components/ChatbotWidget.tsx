import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center",
          isOpen ? "bg-natural-surface text-natural-text scale-90" : "bg-natural-accent text-white hover:bg-[#0f8b9e] scale-100"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 md:w-96 bg-white border border-natural-border shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 z-50 flex flex-col origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
        style={{ height: '600px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {isOpen && (
          <iframe 
            src="https://bsbzh3uogx.zite.so/?embed=true"
            className="w-full h-full border-none"
            title="Chatbot"
            allow="clipboard-read; clipboard-write; microphone"
             style={{ border: 'none' }}
          />
        )}
      </div>
    </>
  );
};
