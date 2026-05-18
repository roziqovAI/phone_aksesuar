import React from 'react';
import { Flame } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-bg-main border-b border-border-main hidden md:block relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-6 h-9 items-center text-[11px] font-mono uppercase tracking-wider text-text-muted">
          <li><a href="#" className="hover:text-accent-blue transition-colors border-r border-border-main pr-6 h-full flex items-center">Directory</a></li>
          <li><a href="#" className="hover:text-accent-blue transition-colors">G'iloflar</a></li>
          <li><a href="#" className="hover:text-accent-blue transition-colors">Himoya</a></li>
          <li><a href="#" className="hover:text-accent-blue transition-colors">Quvvat</a></li>
          <li><a href="#" className="hover:text-accent-blue transition-colors">Audio</a></li>
          <li className="ml-auto flex items-center space-x-4">
            <span className="text-[10px] bg-accent-orange/10 text-accent-orange border border-accent-orange/30 px-2 py-0.5 rounded font-bold">Hot Fixes</span>
            <a href="#" className="text-accent-blue flex items-center gap-1 hover:underline">main.branch</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
