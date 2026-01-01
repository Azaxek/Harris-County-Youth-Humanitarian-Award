
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Our Mission & Legacy</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in 2005, the Harris County Youth Humanitarian Award serves to recognize students who put others before themselves.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <section className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Promoting Compassion</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The Harris County Youth Humanitarian Award was established by the County Committee to highlight the extraordinary 
            contributions of young citizens. We believe that youth are not just the leaders of tomorrow, but the change-makers 
            of today. In an era where academic and athletic achievements often take center stage, this award seeks to shine a 
            spotlight on the virtues of empathy, altruism, and civic responsibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Core Values</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Unwavering commitment to community service.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Leading with empathy and inclusive principles.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Advocating for the vulnerable and underserved.
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Eligibility</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Current High School student in Harris County.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Demonstrated impact over at least 12 months.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Endorsed by a mentor, teacher, or community leader.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">Our History</h2>
          <div className="relative">
            {/* Simple Timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-200 hidden md:block"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-2xl font-serif font-bold text-blue-700">2005</h4>
                  <p className="text-slate-600 mt-2">The inaugural award was presented to help celebrate the county's bicentennial spirit, focusing on disaster relief volunteers.</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10 my-4 md:my-0"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12">
                  <h4 className="text-2xl font-serif font-bold text-blue-700">2015</h4>
                  <p className="text-slate-600 mt-2">The program expanded to include three distinct placements and scholarship grants to support winners' higher education pursuits.</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10 my-4 md:my-0"></div>
                <div className="md:w-1/2 md:pr-12"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h4 className="text-2xl font-serif font-bold text-blue-700">Today</h4>
                  <p className="text-slate-600 mt-2">Recognized as one of the most prestigious youth awards in Texas, with alumni serving in major NGOs and public office.</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10 my-4 md:my-0"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
