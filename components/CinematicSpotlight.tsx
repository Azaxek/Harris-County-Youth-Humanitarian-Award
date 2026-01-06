
import React from 'react';

const CinematicSpotlight: React.FC = () => {
  return (
    <div className="bg-white border-2 border-slate-300 shadow-sm overflow-hidden mx-auto max-w-5xl">
      <div className="bg-slate-200 px-6 py-3 border-b border-slate-300 flex justify-between items-center">
        <h3 className="font-bold text-slate-700 text-sm uppercase tracking-tight">2025 Recipient</h3>
        <span className="text-[10px] font-mono text-slate-500">REF_ID: 2025-AGRAWAL-BIO-01</span>
      </div>
      
      <div className="flex flex-col items-center p-8 bg-slate-50">
        <div className="mb-4 text-center">
          <div className="mb-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest">2025 Winner</div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Aryav Agrawal</h2>
          <div className="h-1 w-12 bg-blue-800 mx-auto mb-6"></div>
        </div>
        
        {/* Photo Container: Medium-sized image */}
        <div className="w-full max-w-xs bg-slate-100 flex items-center justify-center overflow-hidden">
          <div className="relative w-full">
            <img 
              src="/image6.png" 
              className="w-full h-auto object-contain" 
              alt="Aryav Agrawal receiving the award with the president" 
              onError={(e) => {
                // Fallback if image isn't available
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinematicSpotlight;
