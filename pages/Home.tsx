
import React from 'react';
import { Link } from 'react-router-dom';
import CinematicSpotlight from '../components/CinematicSpotlight';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            ESTABLISHED 2005
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 max-w-4xl tracking-tight leading-tight">
            Honoring the Spirit of <span className="text-blue-700 italic">Humanitarianism</span> in Youth
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Recognizing exceptional high school students in Harris County who have demonstrated remarkable service, empathy, and leadership.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/apply" className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
              Nominate Now
            </Link>
            <Link to="/about" className="px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all">
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Background Subtle Shape */}
        <div className="absolute top-0 right-0 -z-10 transform translate-x-1/2 -translate-y-1/2 opacity-10">
          <div className="w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 2025 Winner Spotlight - Now with AI Video Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CinematicSpotlight />
      </section>

      {/* Stats Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wide">Years Running</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">60+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wide">Winners Named</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">$50k+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wide">Grants Awarded</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wide">High Schools</div>
          </div>
        </div>
      </section>

      {/* 2026 CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">2026 Applications Now Open</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              We are looking for the next generation of humanitarian trailblazers. 
              The deadline for 2026 applications is <strong>March 31, 2026</strong>.
            </p>
            <Link to="/apply" className="inline-block px-10 py-4 bg-blue-700 text-white font-bold rounded-xl hover:scale-105 transition-transform">
              Apply or Nominate Now
            </Link>
          </div>
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="black" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
