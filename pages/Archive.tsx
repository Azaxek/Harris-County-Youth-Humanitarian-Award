
import React, { useState } from 'react';
import { WINNERS_ARCHIVE } from '../constants';

const Archive: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredYears = WINNERS_ARCHIVE.filter(item => 
    item.year.toString().includes(searchTerm) ||
    item.winners.some(w => w.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white border-2 border-slate-300 p-8 shadow-sm mb-12">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Recipient History</h1>
        <p className="text-slate-600 text-sm mb-8">Comprehensive list of award winners since the program's inception in 2005.</p>
        
        <div className="flex items-center space-x-4">
          <label className="text-xs font-bold uppercase text-slate-500">Filter Records:</label>
          <input 
            type="text" 
            placeholder="Search name or year..." 
            className="flex-grow max-w-xs px-4 py-2 border border-slate-300 font-sans text-sm focus:border-blue-800 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white border-2 border-slate-300 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-100 border-b-2 border-slate-300">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase text-slate-600 border-r border-slate-200">Year</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-slate-600 border-r border-slate-200">Placements & Recipients</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-slate-600">Cycle Summary</th>
            </tr>
          </thead>
          <tbody>
            {filteredYears.map((yearData) => (
              <tr key={yearData.year} className="border-b border-slate-200 hover:bg-slate-50">
                <td className="px-6 py-6 font-bold text-lg align-top border-r border-slate-200 w-24">
                  {yearData.year}
                </td>
                <td className="px-6 py-6 border-r border-slate-200 w-2/5">
                  <div className="space-y-4">
                    {yearData.winners.map((winner, idx) => (
                      <div key={idx} className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-bold text-slate-800">{winner.name}</div>
                          <div className="text-[10px] uppercase font-bold text-blue-700">{winner.placement} Place</div>
                        </div>
                        <img 
                          src={`https://picsum.photos/seed/${winner.name}/40/40`} 
                          alt="" 
                          className="w-8 h-8 border border-slate-300 grayscale"
                        />
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-6 align-top">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    {yearData.summary || "Standard award cycle following program guidelines and committee review."}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredYears.length === 0 && (
          <div className="p-12 text-center text-slate-500 font-bold uppercase text-xs">
            No matching records found in database.
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
