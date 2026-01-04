
import React from 'react';
import { Link } from 'react-router-dom';

const Guidelines: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header - Documentation Style */}
      <div className="bg-slate-200 py-12 border-b-2 border-slate-300">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Nomination Procedures & Guidelines</h1>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest font-mono">Document Version: 2026.01.A</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-12">
        {/* Eligibility Section */}
        <section className="bg-white border border-slate-300 p-8 shadow-sm">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center font-bold font-mono">01</div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="p-6 border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider underline">I. Residency</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Nominees must reside in Harris County, TX, or attend a verified educational institution within county boundaries.</p>
            </div>
            <div className="p-6 border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider underline">II. Grade Status</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Eligible candidates must be enrolled in grades 9 through 12 during the current fiscal academic year.</p>
            </div>
            <div className="p-6 border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider underline">III. Service Term</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Proof of 12 consecutive months of volunteer service is required for all primary nominations.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white border-2 border-slate-300 p-10 shadow-sm">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center font-bold font-mono">02</div>
            <h2 className="text-2xl font-serif font-bold text-slate-900">Submission Workflow</h2>
          </div>
          <div className="space-y-8 text-sm">
            <div className="flex gap-6 items-start border-b border-slate-100 pb-6">
              <div className="font-mono font-bold text-blue-900">STEP_1</div>
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs mb-1">Candidate Identification</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Select a student who has demonstrated measurable impact. Self-nominations are accepted.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start border-b border-slate-100 pb-6">
              <div className="font-mono font-bold text-blue-900">STEP_2</div>
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs mb-1">Documentation Retrieval</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Compile recommendation letters, service logs, and photographic evidence of work.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-mono font-bold text-blue-900">STEP_3</div>
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs mb-1">Final Submission</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">Complete the digital form on the official application portal by the deadline.</p>
                <Link to="/apply" className="inline-block bg-blue-800 text-white px-4 py-2 text-[10px] font-bold uppercase hover:bg-blue-900 border-b-2 border-blue-950 transition-all">
                  Access Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-slate-800 text-white p-10 border-l-8 border-blue-700">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 bg-white text-slate-900 flex items-center justify-center font-bold font-mono">03</div>
            <h2 className="text-2xl font-serif font-bold">Recommendations for Success</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 underline">Quantify Data</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Provide specific metrics. Use "Distributed 500 lbs of food" instead of "Provided a lot of food."</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 underline">Leadership Evidence</h4>
                <p className="text-xs text-slate-300 leading-relaxed">Detail instances where the nominee managed projects or coordinated other volunteers.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 underline">Contextualize "Why"</h4>
                <p className="text-xs text-slate-300 leading-relaxed">The committee values the personal motivation and the root cause being addressed.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 underline">Supporting Media</h4>
                <p className="text-xs text-slate-300 leading-relaxed">High-resolution imagery of the nominee 'in action' is highly recommended for review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Footer */}
        <div className="text-center bg-slate-100 py-8 border-2 border-slate-300">
          <p className="text-xs font-bold text-slate-600 mb-2 uppercase tracking-tight">Administrative Support</p>
          <a href="mailto:info@harriscountyyouth.org" className="text-xl font-serif font-bold text-blue-900 hover:underline">
            info@harriscountyyouth.org
          </a>
          <p className="mt-4 text-[10px] font-mono text-slate-500 uppercase font-bold">DEADLINE: MARCH 31, 2026 (23:59 CST)</p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
