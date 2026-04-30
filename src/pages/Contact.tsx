import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';

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
    <div className="py-20 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Contact Us | Gulf Shores Life" 
        description="Get in touch with the local experts at Gulf Shores Life. Whether you're visiting or investing, we're here to help." 
      />
      
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 rounded-full border border-natural-accent/20">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-natural-accent"> Get in Touch </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-natural-text-dark mb-8">Let's <span className="italic text-natural-accent">Connect.</span></h1>
          <p className="text-lg text-natural-text-sub font-light leading-relaxed mb-12">
            Whether you have a quick question about the best beach spot or you're ready to start your journey to coastal homeownership, we're here to help. Our local experts have the inside scoop on everything Gulf Shores.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-natural-border/30 shadow-sm">
                <Mail className="w-5 h-5 text-natural-accent" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Email Us</h3>
                <p className="text-natural-text-dark font-serif text-lg">hello@gulfshoreslife.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-natural-border/30 shadow-sm">
                <Phone className="w-5 h-5 text-natural-accent" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Call Our Office</h3>
                <p className="text-natural-text-dark font-serif text-lg">(251) 948-1001</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-natural-border/30 shadow-sm">
                <MapPin className="w-5 h-5 text-natural-accent" />
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted mb-1">Visit Us</h3>
                <p className="text-natural-text-dark font-serif text-lg">100 Gulf Shores Pkwy<br/>Gulf Shores, AL 36542</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white p-10 md:p-16 rounded-[60px] border border-natural-border/30 shadow-sm">
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
            <div className="flex flex-col gap-10">
              <h2 className="text-3xl font-serif text-natural-text-dark italic">Send a Message</h2>
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
                      className="bg-natural-bg px-6 py-4 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors text-sm"
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
                      className="bg-natural-bg px-6 py-4 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors text-sm"
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
                    className="bg-natural-bg px-6 py-4 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-natural-text-muted ml-4">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-natural-bg px-8 py-5 rounded-[30px] border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors text-sm resize-none"
                    placeholder="Tell us a bit about what you're looking for..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 bg-natural-text text-white px-8 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
