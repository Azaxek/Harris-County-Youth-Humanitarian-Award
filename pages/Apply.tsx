
import React, { useState } from 'react';

const Apply: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    workDescription: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submission Logged:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 bg-slate-50">
        <div className="text-center max-w-md p-10 bg-white border-2 border-slate-300 shadow-sm">
          <div className="w-16 h-16 bg-blue-100 text-blue-900 border border-blue-200 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Submission Successful</h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">REF: {Math.floor(Math.random() * 999999)}</p>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            The 2026 nomination for <span className="font-bold">{formData.name}</span> has been successfully logged 
            in our database. Please allow 4-6 weeks after the deadline for committee review.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold uppercase text-blue-800 underline hover:text-blue-600"
          >
            Submit Additional Nomination Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Header - Corporate Style */}
      <div className="bg-blue-900 py-16 text-white border-b-4 border-blue-950">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Official 2026 Nomination Portal</h1>
          <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
            Electronic submission form for the 2026 Harris County Youth Humanitarian Award. 
            All fields marked with an asterisk (*) are mandatory for processing.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-blue-800 border border-blue-700 text-[11px] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 mr-3"></span>
            SUBMISSION DEADLINE: MARCH 31, 2026
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border-2 border-slate-300 shadow-sm">
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4 uppercase tracking-tight">Form 2026-A: Nomination Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase mb-2">Full Name *</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-2 border border-slate-300 bg-slate-50 font-sans text-sm focus:border-blue-800 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase mb-2">Age / Grade Level *</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. 17 / 12th"
                  className="w-full px-4 py-2 border border-slate-300 bg-slate-50 font-sans text-sm focus:border-blue-800 outline-none"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-2">Contact Email *</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-2 border border-slate-300 bg-slate-50 font-sans text-sm focus:border-blue-800 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="mb-10">
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-2">Service Impact Statement *</label>
              <textarea 
                required
                rows={8}
                placeholder="Provide a detailed log of service impact, including dates and outcomes..."
                className="w-full px-4 py-3 border border-slate-300 bg-slate-50 font-sans text-sm focus:border-blue-800 outline-none resize-none"
                value={formData.workDescription}
                onChange={(e) => setFormData({...formData, workDescription: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-blue-800 text-white font-bold uppercase text-xs tracking-widest hover:bg-blue-900 border-b-4 border-blue-950 transition-all">
              Execute Submission
            </button>
          </form>
        </div>

        <div className="lg:w-1/3 space-y-8">
          <div className="bg-slate-50 p-8 border border-slate-300">
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-6 tracking-widest">Administrative Context</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white border border-slate-300 flex items-center justify-center shrink-0 mr-4 font-mono font-bold text-xs text-blue-900">@</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase">Electronic Mail</p>
                  <p className="text-xs text-slate-500 underline">awards@harriscounty.gov</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white border border-slate-300 flex items-center justify-center shrink-0 mr-4 font-mono font-bold text-xs text-blue-900">#</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase">Telephone Inquiry</p>
                  <p className="text-xs text-slate-500">(713) 274-1100</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white border border-slate-300 flex items-center justify-center shrink-0 mr-4 font-mono font-bold text-xs text-blue-900">!</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase">Headquarters</p>
                  <p className="text-xs text-slate-500">1001 Preston St, Houston, TX 77002</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-slate-200 text-slate-500 text-[10px] leading-relaxed italic">
            Disclaimer: Harris County is an Equal Opportunity Employer. All award nominations are handled with 
            strict confidentiality in accordance with local privacy statutes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
