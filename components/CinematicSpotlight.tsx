
import React from 'react';
import { Link } from 'react-router-dom';
import { WINNERS_ARCHIVE } from '../constants';

const CinematicSpotlight: React.FC = () => {
  // Get the first winner from the most recent year (2025)
  const latestYear = WINNERS_ARCHIVE[0];
  const featuredWinner = latestYear.winners[0];

  return (
    <div className="bg-white border-2 border-slate-300 shadow-sm overflow-hidden">
      <div className="bg-slate-200 px-6 py-3 border-b border-slate-300 flex justify-between items-center">
        <h3 className="font-bold text-slate-700 text-sm uppercase tracking-tight">Official Archive: {latestYear.year} Recipient Profile</h3>
        <span className="text-[10px] font-mono text-slate-500">REF_ID: {latestYear.year}-AGRAWAL-BIO-01</span>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Photo Container: Optimized for Portrait Orientation */}
        <div className="lg:w-[400px] bg-slate-100 flex items-center justify-center border-r border-slate-300 overflow-hidden shrink-0">
          <div className="relative w-full h-full min-h-[500px]">
            <img 
              src="recipient_2025.jpg" 
              className="w-full h-full object-cover transition-all duration-700 hover:grayscale-0 grayscale-20" 
              alt="Official Award Presentation of Aryav Agrawal" 
              onError={(e) => {
                // Fallback if image isn't named correctly in folder yet
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800';
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 text-white p-3 text-[10px] font-mono border-t border-slate-700">
              [ FIG 1.1 ] 2025 AWARD CEREMONY - HARRIS COUNTY ADMINISTRATIVE OFFICES
            </div>
          </div>
        </div>
        
        {/* Bio/Achievement Container */}
        <div className="flex-grow p-10 flex flex-col justify-center bg-slate-50">
          <div className="mb-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">First Place Recipient</div>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">{featuredWinner.name}</h2>
          <div className="h-1 w-16 bg-blue-800 mb-8"></div>
          
          <div className="space-y-6">
            <p className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-slate-300 pl-4 bg-white p-4 border border-slate-200 shadow-sm">
              "Humanity flourishes when we bridge the gaps in our community. Every small act of service creates a ripple that can eventually move oceans."
            </p>
            
            <div className="bg-white border border-slate-200 p-6">
              <h4 className="text-[10px] font-bold uppercase text-slate-500 mb-3 tracking-wider underline">Primary Technical Contribution:</h4>
              <p className="text-sm text-slate-800 leading-relaxed font-sans font-medium">
                Built 270 home satellite storm detectors near NASA JSC in Houston, processing 25K+ satellite data points to demonstrate humanitarian use of space tech.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-200 bg-white shadow-sm">
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Impact Region</span>
                <span className="text-[11px] font-bold text-slate-700">Houston / NASA JSC Corridor</span>
              </div>
              <div className="p-4 border border-slate-200 bg-white shadow-sm">
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Data Scale</span>
                <span className="text-[11px] font-bold text-slate-700">25,000+ Analyzed Points</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
            <Link to="/archive" className="inline-block bg-slate-800 text-white px-6 py-3 text-xs font-bold uppercase hover:bg-slate-700 border-b-4 border-slate-950 transition-all shadow-md">
              Browse Award Records
            </Link>
            <div className="text-right">
              <span className="block text-[10px] font-mono text-slate-400">STATUS: VERIFIED</span>
              <span className="block text-[10px] font-mono text-slate-400 uppercase">Cycle: 2025.A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinematicSpotlight;
