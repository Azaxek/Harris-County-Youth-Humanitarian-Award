
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-200 border-t-4 border-slate-300 py-12 text-slate-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Harris County Youth Humanitarian Award</h3>
            <p className="text-xs leading-relaxed max-w-md">
              The program recognizes students for their significant contributions to humanitarian work. 
              Founded in 2005 by the county executive committee. All award decisions are final and 
              based on criteria established in the official handbook.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase mb-4 text-slate-500">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[11px] font-bold hover:text-blue-800 underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase mb-4 text-slate-500">Contact/Location</h4>
            <p className="text-[11px] leading-relaxed">
              <strong>Administration:</strong><br />
              1001 Preston St, Houston, TX 77002<br />
              Phone: (713) 274-1100<br />
              Email: info@harriscountyyouth.org
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-500">
          <p>© {new Date().getFullYear()} Harris County Administrative Offices. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest">Site Last Updated: Feb 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
