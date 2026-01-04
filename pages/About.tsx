
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header - Jumbotron Style */}
      <div className="bg-white py-16 border-b-2 border-slate-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Statement of Purpose</h1>
          <div className="h-1 w-20 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-sans">
            The Harris County Youth Humanitarian Award Program, established in 2005, exists to codify and reward 
            the exceptional public service contributions of our secondary education students.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-16 space-y-12">
        <section className="bg-white border-2 border-slate-300 p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">I. Organizational Mandate</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            Our committee recognizes that civic engagement is the bedrock of local governance. By highlighting 
            the altruism of our youth, we ensure the continued development of responsible leadership within 
            the Greater Houston area. This award is not merely a recognition of hours served, but of impact achieved.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-50 p-6 border border-slate-300">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-4 underline">Operational Values</h3>
              <ul className="space-y-3 text-[13px] text-slate-700 list-disc list-inside">
                <li>Commitment to consistent community engagement.</li>
                <li>Measurable impact on vulnerable populations.</li>
                <li>Demonstrated ethics in leadership.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 border border-slate-300">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-4 underline">Selection Criteria</h3>
              <ul className="space-y-3 text-[13px] text-slate-700 list-disc list-inside">
                <li>Active High School Enrollment (Grades 9-12).</li>
                <li>Verification of 12+ Months of Service.</li>
                <li>Submission of (2) Professional References.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white border-2 border-slate-300 p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center uppercase tracking-tight">Timeline of Program History</h2>
          
          <div className="space-y-8">
            <div className="flex border-l-4 border-blue-800 pl-6 py-2">
              <div className="w-24 shrink-0 font-bold text-blue-900">2005</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">Program Inception</h4>
                <p className="text-xs text-slate-600 mt-1">Inaugural ceremony launched to celebrate the county bicentennial anniversary.</p>
              </div>
            </div>

            <div className="flex border-l-4 border-slate-300 pl-6 py-2">
              <div className="w-24 shrink-0 font-bold text-slate-400">2015</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">Framework Update</h4>
                <p className="text-xs text-slate-600 mt-1">Introduction of tiered placement (1st, 2nd, 3rd) and scholarship grant funding.</p>
              </div>
            </div>

            <div className="flex border-l-4 border-slate-300 pl-6 py-2">
              <div className="w-24 shrink-0 font-bold text-slate-400">Present</div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase">Current Operations</h4>
                <p className="text-xs text-slate-600 mt-1">Processing over 100 annual nominations from across the Harris County school system.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
