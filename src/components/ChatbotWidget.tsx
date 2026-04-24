import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, CheckCircle } from 'lucide-react';
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import { cn } from '../lib/utils';

const captureLeadParams: FunctionDeclaration = {
  name: "captureLead",
  description: "Captures user contact information so a local expert can reach out to them.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING, description: "The full name of the user." },
      email: { type: Type.STRING, description: "The email address of the user." },
      phone: { type: Type.STRING, description: "The phone number of the user (optional)." }
    },
    required: ["name", "email"]
  }
};

interface Message {
  role: 'user' | 'model';
  content: string;
  isCustomStatus?: boolean;
}

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hi! I'm your Gulf Shores guide. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<any>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    // Initialize Gemini AI
    if (process.env.GEMINI_API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      aiRef.current = ai;
      initChat(ai);
    }
  }, []);

  const initChat = (aiInstance: any) => {
    chatRef.current = aiInstance.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are a friendly, helpful local guide for Gulf Shores, Alabama. You answer questions about beaches, real estate, and local things to do. Keep it concise. If the user seems interested in relocating, buying property, or needs detailed local assistance, politely ask if they would like to provide their name, email, and phone number so a local expert can follow up. If they give you their contact info, ALWAYS call the 'captureLead' function.",
        tools: [{ functionDeclarations: [captureLeadParams] }],
      }
    });
  };

  const handleSend = async () => {
    if (!input.trim() || !chatRef.current || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      
      // Handle tool calls
      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const call of response.functionCalls) {
          if (call.name === 'captureLead') {
            const args = call.args;
            
            // Save to Firestore
            await addDoc(collection(db, 'leads'), {
              name: args.name || "Unknown",
              email: args.email || "Unknown",
              phone: args.phone || "",
              requestDetails: "Captured via AI Chatbot.",
              source: "Chatbot",
              status: "New",
              createdAt: serverTimestamp()
            });

            setMessages(prev => [...prev, { 
              role: 'model', 
              content: "Lead captured successfully! A local expert will be in touch soon.", 
              isCustomStatus: true 
            }]);

            // Reply to the model that the tool ran successfully
            const toolResponse = await chatRef.current.sendMessage({
              message: [{
                functionResponse: {
                  name: 'captureLead',
                  response: { success: true }
                }
              }]
            });
            
            if (toolResponse.text) {
               setMessages(prev => [...prev, { role: 'model', content: toolResponse.text }]);
            }
          }
        }
      } else if (response.text) {
        setMessages(prev => [...prev, { role: 'model', content: response.text }]);
      }
    } catch (error) {
      console.error("Chat error: ", error);
      setMessages(prev => [...prev, { role: 'model', content: "Oops, something went wrong connecting to the guide." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

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
        style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-natural-text text-white p-4 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-natural-surface/20 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-serif font-medium text-white tracking-wide">Local Guide</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Gulf Shores Life</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-natural-bg/50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex items-end gap-2 max-w-[85%]",
                message.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center shrink-0 mb-1",
                message.role === 'user' ? "bg-natural-text/10" : "bg-natural-accent/20 text-natural-accent"
              )}>
                {message.role === 'user' ? <User className="w-3 h-3 text-natural-text" /> : <Bot className="w-3 h-3" />}
              </div>
              
              {message.isCustomStatus ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-2xl rounded-tl-sm text-sm flex items-start gap-2">
                   <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                   <p dangerouslySetInnerHTML={{ __html: message.content }} />
                </div>
              ) : (
                <div
                  className={cn(
                    "p-3 text-sm leading-relaxed",
                    message.role === 'user'
                      ? "bg-natural-surface text-natural-text rounded-2xl rounded-tr-sm"
                      : "bg-white border border-natural-border/50 text-natural-text-main rounded-2xl rounded-tl-sm shadow-sm"
                  )}
                  style={{ wordBreak: 'break-word' }}
                >
                  {message.content}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 max-w-[85%]">
              <div className="w-6 h-6 rounded-full bg-natural-accent/20 text-natural-accent flex items-center justify-center shrink-0 mb-1">
                <Bot className="w-3 h-3" />
              </div>
              <div className="bg-white border border-natural-border/50 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-natural-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-natural-accent/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-natural-accent/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-natural-border flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about the coast..."
            disabled={isLoading || !process.env.GEMINI_API_KEY}
            className="flex-1 bg-natural-bg border border-natural-border px-4 py-2.5 rounded-full text-sm focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading || !process.env.GEMINI_API_KEY}
            className="w-10 h-10 bg-natural-text text-white rounded-full flex items-center justify-center shrink-0 hover:bg-natural-text-main disabled:opacity-50 disabled:bg-natural-border disabled:text-natural-text-muted transition-colors"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </>
  );
};
