import React, { useEffect, useState } from 'react';
import { SEO } from '@/components/SEO';
import { useAuthState } from '@/hooks/useAuthState';
import { Navigate } from 'react-router-dom';
import { db, auth } from '@/services/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { LogOut, Mail, Phone, Calendar, Search } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  requestDetails: string;
  status: 'New' | 'Contacted' | 'Closed';
  createdAt: number;
}

export const Dashboard = () => {
  const { user, loading } = useAuthState();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!user) return;

    const leadsQuery = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(leadsQuery, (snapshot) => {
      const fetchedLeads: Lead[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedLeads.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: data.source,
          requestDetails: data.requestDetails,
          status: data.status,
          createdAt: data.createdAt?.toMillis ? data.createdAt.toMillis() : (data.createdAt || Date.now())
        });
      });
      setLeads(fetchedLeads);
    }, (error) => {
      console.error("Error fetching leads:", error);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-natural-text-muted bg-natural-bg">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const leadRef = doc(db, 'leads', leadId);
      await updateDoc(leadRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 px-4 md:px-16 max-w-7xl mx-auto min-h-screen">
      <SEO title="Dashboard - Gulf Shores Life" description="Lead Management Dashboard" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-serif text-natural-text-dark mb-2">Lead Dashboard</h1>
          <p className="text-natural-text-sub font-light">
            Manage your partner leads and inquiries.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-natural-surface rounded-full flex items-center justify-center text-natural-text-main font-serif shadow-sm">
            {user.email?.charAt(0).toUpperCase() || 'A'}
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-natural-text-muted hover:text-natural-text transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[40px] shadow-sm border border-natural-border/40 overflow-hidden">
        <div className="p-8 border-b border-natural-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
             <div className="bg-natural-surface text-natural-text px-4 py-2 rounded-full text-xs font-bold">
               Total Leads: {leads.length}
             </div>
          </div>
          <div className="relative w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 bg-natural-bg pl-10 pr-4 py-2.5 rounded-full border border-natural-border focus:outline-none focus:border-natural-accent focus:ring-1 focus:ring-natural-accent transition-colors text-sm"
            />
            <Search className="w-4 h-4 text-natural-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-natural-bg/50">
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted border-b border-natural-border/50">Contact info</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted border-b border-natural-border/50">Source</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted border-b border-natural-border/50 hidden md:table-cell">Request Details</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.15em] text-natural-text-muted border-b border-natural-border/50">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-natural-border/30">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-8 py-12 text-center text-natural-text-sub font-light">
                    No leads found matching your search.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-natural-bg/30 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-serif text-lg text-natural-text-dark mb-2">{lead.name}</div>
                      <div className="flex flex-col gap-1.5 text-xs text-natural-text-sub font-light">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 opacity-70" /> {lead.email}
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 opacity-70" /> {lead.phone}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-natural-text-muted">
                           <Calendar className="w-3.5 h-3.5 opacity-70" /> {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <div className={cn(
                        "inline-flex flex-col items-center justify-center p-2 rounded-2xl w-24 text-center",
                        lead.source === 'Chatbot' ? "bg-natural-surface text-natural-text" : "bg-white border border-natural-border/50 text-natural-text-sub"
                      )}>
                         <span className="text-[10px] font-bold uppercase tracking-widest">{lead.source}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top hidden md:table-cell max-w-xs">
                      <p className="text-sm text-natural-text-sub font-light leading-relaxed line-clamp-3" title={lead.requestDetails}>
                        {lead.requestDetails || <span className="italic opacity-50">No details provided</span>}
                      </p>
                    </td>
                    <td className="px-8 py-6 align-top">
                       <select 
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={cn(
                            "appearance-none bg-white border px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-natural-accent transition-colors cursor-pointer",
                            lead.status === 'New' ? "border-red-200 text-red-700 hover:bg-red-50" : 
                            lead.status === 'Contacted' ? "border-yellow-200 text-yellow-700 hover:bg-yellow-50" : 
                            "border-green-200 text-green-700 hover:bg-green-50"
                          )}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                       </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
