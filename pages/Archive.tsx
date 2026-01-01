
import React, { useState } from 'react';
import { WINNERS_ARCHIVE } from '../constants';
import { AwardYear } from '../types';

const Archive: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredYears = WINNERS_ARCHIVE.filter(item => 
    item.year.toString().includes(searchTerm) ||
    item.winners.some(w => w.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Winners Archive</h1>
          <p className="text-slate-600 text-lg mb-8">Celebrating over two decades of humanitarian excellence in Harris County.</p>
          
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="Search by year or name..." 
              className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute right-4 top-3.5 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredYears.map((yearData) => (
            <YearCard key={yearData.year} data={yearData} />
          ))}
        </div>
        
        {filteredYears.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No records found matching your search.</p>
            <button onClick={() => setSearchTerm('')} className="mt-4 text-blue-700 font-semibold hover:underline">Clear search</button>
          </div>
        )}
      </div>
    </div>
  );
};

const YearCard: React.FC<{ data: AwardYear }> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="px-6 py-5 bg-slate-50 border-b border-slate-200">
        <span className="text-2xl font-serif font-bold text-slate-900">{data.year}</span>
      </div>

      <div className="px-6 py-6 space-y-4">
        {data.summary && (
          <p className="text-sm text-slate-500 italic mb-4 border-l-2 border-blue-200 pl-3">
            {data.summary}
          </p>
        )}
        <div className="space-y-3">
          {data.winners.map((winner, idx) => (
            <div key={idx} className="flex items-center space-x-4 p-3 rounded-xl bg-slate-50 group hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                winner.placement === 'First' ? 'bg-amber-100 text-amber-700' :
                winner.placement === 'Second' ? 'bg-slate-200 text-slate-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {winner.placement.charAt(0)}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-sm font-bold text-slate-800 truncate">{winner.name}</p>
                <p className="text-xs text-slate-500">{winner.placement} Place</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 overflow-hidden shrink-0 opacity-70">
                 <img src={`https://picsum.photos/seed/${winner.name}/100/100`} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
