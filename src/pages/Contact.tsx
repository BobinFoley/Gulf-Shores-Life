import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Name and email are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const leadsCollection = collection(db, 'leads');
      await addDoc(leadsCollection, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        requestDetails: formData.message || '',
        source: 'Form',
        status: 'New',
        createdAt: serverTimestamp()
      });

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      console.error("Error submitting contact form: ", err);
      setError('An error occurred while submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-4 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
      <SEO title="Contact Us" description="Get in touch with the local experts at Gulf Shores Life." />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-natural-text-dark mb-4">Contact Us</h1>
        <p className="text-lg text-natural-text-sub font-light max-w-xl">
          Whether you're planning a visit or looking to invest, we'd love to hear from you. Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-natural-border/30 relative">
        {submitSuccess ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 bg-natural-accent/10 text-natural-accent rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-serif text-natural-text-dark mb-4">Thank You!</h2>
            <p className="text-natural-text-sub mb-8 font-light">
              We have received your message. A member of our team will be in touch with you shortly.
            </p>
            <button 
              onClick={() => setSubmitSuccess(false)}
              className="bg-natural-text text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <div className="bg-red-50 text-red-800 p-4 rounded-2xl text-sm flex items-start gap-3">
                <AlertCircle className="shrink-0 w-5 h-5" />
                <p>{error}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted ml-4">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-natural-bg px-6 py-4 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted ml-4">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-natural-bg px-6 py-4 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted ml-4">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-natural-bg px-6 py-4 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted ml-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="bg-natural-bg px-6 py-4 rounded-3xl border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 bg-natural-text text-white px-8 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
