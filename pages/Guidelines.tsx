
import React from 'react';
import { Link } from 'react-router-dom';

const Guidelines: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Nomination Guidelines</h1>
          <p className="text-xl text-slate-600">Everything you need to know about the 2026 application cycle.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {/* Eligibility Section */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xl">01</div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-3 text-lg">Residency</h3>
              <p className="text-slate-600 text-sm">Nominees must be current residents of Harris County, Texas, or attend a school physically located within the county.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-3 text-lg">Age & Status</h3>
              <p className="text-slate-600 text-sm">Eligible candidates are high school students (9th–12th grade) during the current academic year.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-3 text-lg">Service Period</h3>
              <p className="text-slate-600 text-sm">Humanitarian work must show consistent engagement for at least 12 consecutive months prior to the deadline.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xl">02</div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">The Nomination Process</h2>
          </div>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="shrink-0 w-8 h-8 rounded-full border-2 border-blue-700 flex items-center justify-center text-blue-700 font-bold">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Identify a Candidate</h4>
                <p className="text-slate-600">Consider students who have made a tangible impact. We welcome self-nominations as well as nominations from teachers, mentors, or peers.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-8 h-8 rounded-full border-2 border-blue-700 flex items-center justify-center text-blue-700 font-bold">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Prepare Supporting Documents</h4>
                <p className="text-slate-600">Gather letters of recommendation, photos of the project, data on community impact, or any relevant media coverage.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-8 h-8 rounded-full border-2 border-blue-700 flex items-center justify-center text-blue-700 font-bold">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Submit via Online Portal</h4>
                <p className="text-slate-600 mb-4">Complete the form on our Application page. Ensure all fields are filled accurately to avoid delays in review.</p>
                <Link to="/apply" className="inline-flex items-center text-blue-700 font-bold hover:underline">
                  Go to Application Page
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advice/Tips Section */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xl">03</div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Tips for a Winning Submission</h2>
          </div>
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-blue-400">Quantify Your Impact</h4>
                <p className="text-slate-300">Numbers tell a powerful story. Instead of saying "helped many people," specify "provided 500 meals to 120 families over 6 months."</p>
                
                <h4 className="text-xl font-bold text-blue-400">Show Leadership</h4>
                <p className="text-slate-300">Describe how the nominee took initiative, solved problems, or inspired others to join their cause.</p>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-blue-400">Focus on "Why"</h4>
                <p className="text-slate-300">The selection committee values heart. Explain the personal motivation and the specific community need being addressed.</p>
                
                <h4 className="text-xl font-bold text-blue-400">Be Specific</h4>
                <p className="text-slate-300">Vivid details about a single event can be more memorable than a broad list of multiple small activities.</p>
              </div>
            </div>
            {/* Subtle graphic element */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          </div>
        </section>

        {/* Deadline Footer */}
        <div className="text-center bg-blue-50 py-12 rounded-3xl border border-blue-100">
          <p className="text-slate-600 mb-4">Questions about the guidelines?</p>
          <a href="mailto:info@harriscountyyouth.org" className="text-2xl font-serif font-bold text-blue-700 hover:text-blue-800 transition-colors underline">
            info@harriscountyyouth.org
          </a>
          <p className="mt-6 text-sm text-slate-500 uppercase tracking-widest font-bold">Closing March 31, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
