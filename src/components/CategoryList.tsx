import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

export const CategoryList: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex justify-between items-center mb-6 border-b border-border-main pb-2">
        <div className="flex items-center gap-2">
          <span className="text-text-header font-bold text-sm tracking-wider uppercase">Project Explorer</span>
          <span className="text-[10px] text-text-muted font-mono">/root/categories/*</span>
        </div>
        <a href="#" className="text-accent-blue hover:underline text-[10px] font-mono flex items-center gap-1">view_all() <ChevronRight size={12}/></a>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {CATEGORIES.map((cat, idx) => (
          <a key={idx} href="#" className="bg-bg-secondary border border-border-main p-3 rounded hover:bg-bg-tertiary hover:border-accent-blue transition-all flex items-center gap-3 group relative overflow-hidden">
            <div className="w-8 h-8 rounded bg-bg-main flex items-center justify-center text-text-muted group-hover:text-accent-blue transition-colors border border-border-main">
              <cat.icon className="w-4 h-4" />
            </div>
            <span className="font-mono text-[11px] text-text-main group-hover:text-text-header transition-colors uppercase tracking-tighter truncate">
              {cat.name.replace(/ /g, '_')}
            </span>
            <div className="absolute top-0 right-0 w-1 y-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>
    </section>
  );
};
