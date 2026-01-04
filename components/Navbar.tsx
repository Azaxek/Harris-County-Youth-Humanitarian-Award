
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b-2 border-slate-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif font-bold text-2xl text-slate-900 border-b-2 border-blue-800">
                Harris County
              </span>
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-1">
              Youth Humanitarian Award Program
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase py-2 px-1 border-b-2 transition-colors ${
                  location.pathname === item.path
                    ? 'border-blue-800 text-blue-900'
                    : 'border-transparent text-slate-600 hover:text-blue-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 border border-slate-300 rounded">
              Menu
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-slate-100 border-b border-slate-300 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-bold text-slate-700 hover:text-blue-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
