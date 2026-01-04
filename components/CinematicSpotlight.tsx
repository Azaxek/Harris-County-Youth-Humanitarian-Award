
import React from 'react';
import { Link } from 'react-router-dom';

const CinematicSpotlight: React.FC = () => {
  return (
    <div className="bg-white border-2 border-slate-300 shadow-sm">
      <div className="bg-slate-200 px-6 py-3 border-b border-slate-300 flex justify-between items-center">
        <h3 className="font-bold text-slate-700 text-sm uppercase tracking-tight">Official Archive: 2025 Recipient Profile</h3>
        <span className="text-[10px] font-mono text-slate-500">REF_ID: 2025-AGRAWAL-BIO-STAT</span>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/5 bg-slate-100 aspect-video flex items-center justify-center border-r border-slate-300 overflow-hidden">
          {/* Static Press Photo - No dynamic loading buttons as requested */}
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=450" 
              className="w-full h-full object-cover grayscale" 
              alt="Official Portrait of Aryav Agrawal" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 text-white p-2 text-[10px] font-mono">
              [ FIG 1.1 ] 2025 WINNER - FORMAL PRESS RELEASE PHOTOGRAPH
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/5 p-8 flex flex-col justify-center bg-slate-50">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Aryav Agrawal</h2>
          <div className="h-1 w-12 bg-blue-800 mb-6"></div>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-slate-300 pl-4 bg-white p-3 border border-slate-200">
              "Humanity flourishes when we bridge the gaps in our community. Every small act of service creates a ripple that can eventually move oceans."
            </p>
            
            <div className="bg-white border border-slate-200 p-4">
              <h4 className="text-[10px] font-bold uppercase text-slate-500 mb-2">Service Summary:</h4>
              <p className="text-xs text-slate-700 leading-snug">
                Built 270 home satellite storm detectors near NASA JSC in Houston, processing 25K+ satellite data points to demonstrate humanitarian use of space tech.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <Link to="/archive" className="inline-block bg-slate-800 text-white px-4 py-2 text-xs font-bold uppercase hover:bg-slate-700 border-b-2 border-slate-950 transition-all">
              Browse Historical Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinematicSpotlight;
