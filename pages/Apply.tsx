
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
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-fadeIn">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your submission for the 2026 Harris County Youth Humanitarian Award. 
            The committee will review your application after the March 2026 deadline.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-700 font-semibold hover:underline"
          >
            Submit another nomination
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-blue-700 py-16 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">2026 Nominations</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Help us identify the leaders of tomorrow. Applications and nominations for the 2026 award cycle are now open.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-blue-800 rounded-lg text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse mr-3"></span>
            Deadline: March 31, 2026
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,0 L100,100 Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Nomination Form</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Age / Grade</label>
                <input 
                  required
                  type="text" 
                  placeholder="17 / 12th Grade"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description of Humanitarian Work</label>
              <textarea 
                required
                rows={6}
                placeholder="Tell us about the impact, projects, and dedication of the nominee..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                value={formData.workDescription}
                onChange={(e) => setFormData({...formData, workDescription: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
              Submit Nomination
            </button>
          </form>
        </div>

        <div className="lg:w-1/3 space-y-12">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email Us</p>
                  <p className="text-slate-500">awards@harriscounty.gov</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Call Us</p>
                  <p className="text-slate-500">(713) 274-1100</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Office</p>
                  <p className="text-slate-500">1001 Preston St, Houston, TX 77002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
