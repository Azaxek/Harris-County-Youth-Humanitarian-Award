
import React from 'react';
import { Link } from 'react-router-dom';
import CinematicSpotlight from '../components/CinematicSpotlight';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Hero: No-frills Jumbotron */}
      <section className="bg-white border-2 border-slate-300 p-12 md:p-20 text-center shadow-sm">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
          Youth Humanitarian Award
        </h1>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          The Harris County Youth Humanitarian Award committee officially recognizes high school students demonstrating exceptional leadership and public service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/apply" className="px-8 py-3 bg-blue-800 text-white font-bold hover:bg-blue-900 border-b-4 border-blue-950 transition-all">
            Submit Nomination Form
          </Link>
          <Link to="/about" className="px-8 py-3 bg-slate-200 text-slate-800 font-bold hover:bg-slate-300 border-b-4 border-slate-400 transition-all">
            Program Overview
          </Link>
        </div>
      </section>

      {/* Featured Entry */}
      <section>
        <CinematicSpotlight />
      </section>

      {/* Program Statistics: Solid Box Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-300 border border-slate-300">
        <div className="bg-white p-8 text-center">
          <div className="text-3xl font-bold text-blue-900 mb-1">20+</div>
          <div className="text-[10px] font-bold uppercase text-slate-500">Years Active</div>
        </div>
        <div className="bg-white p-8 text-center">
          <div className="text-3xl font-bold text-blue-900 mb-1">60+</div>
          <div className="text-[10px] font-bold uppercase text-slate-500">Recipients</div>
        </div>
        <div className="bg-white p-8 text-center">
          <div className="text-3xl font-bold text-blue-900 mb-1">$50k</div>
          <div className="text-[10px] font-bold uppercase text-slate-500">Grant Total</div>
        </div>
        <div className="bg-white p-8 text-center">
          <div className="text-3xl font-bold text-blue-900 mb-1">100+</div>
          <div className="text-[10px] font-bold uppercase text-slate-500">Schools Participating</div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-slate-800 text-white p-12 border-l-8 border-blue-600">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wide">2026 Cycle Announcement</h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed">
            Applications for the 2026 award cycle are currently being accepted. Interested parties should ensure all documentation is submitted prior to the end of the fiscal quarter.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/apply" className="bg-blue-600 px-6 py-2 font-bold hover:bg-blue-500 text-xs uppercase">
              Download/Submit Forms
            </Link>
            <span className="text-xs font-mono text-blue-400 font-bold">DEADLINE: 31 MAR 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
