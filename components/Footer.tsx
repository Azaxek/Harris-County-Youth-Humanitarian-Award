
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-4">Harris County Youth Humanitarian Award</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Celebrating and empowering the next generation of humanitarian leaders in our community since 2005. 
              Inspiring change, one student at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-slate-400">
              Email: info@harriscountyyouth.org<br />
              Phone: (713) 274-1100<br />
              Address: 1001 Preston St, Houston, TX 77002
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Facebook</span>FB</a>
              <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Twitter</span>TW</a>
              <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Instagram</span>IG</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Harris County Youth Humanitarian Award Committee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
