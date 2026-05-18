import React from 'react';
import { Smartphone, Search, Heart, User, ShoppingCart, Menu, X, Flame } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartCount, setIsCartOpen, isMobileMenuOpen, setIsMobileMenuOpen 
}) => {
  return (
    <header className="bg-bg-secondary border-b border-border-main sticky top-0 z-50 h-14 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="flex space-x-1.5 hidden sm:flex">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <a href="#" className="flex items-center gap-2">
              <Smartphone className="text-accent-blue w-6 h-6" />
              <span className="font-bold text-lg tracking-tight text-text-header">
                Mobi<span className="text-accent-blue">Aks</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <input 
              type="text" 
              placeholder="Search components..." 
              className="w-full bg-bg-main border border-border-main rounded px-3 py-1.5 text-xs text-text-main focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all" 
            />
            <Search className="absolute right-3 top-2 w-4 h-4 text-text-muted" />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-text-muted hover:text-text-header transition-colors hidden sm:block"><Heart className="w-5 h-5" /></button>
            <button className="text-text-muted hover:text-text-header transition-colors hidden sm:block"><User className="w-5 h-5" /></button>
            <button className="relative text-text-muted hover:text-text-header transition-colors group" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-accent-blue text-white text-[10px] font-bold px-1 rounded shadow-sm">{cartCount}</span>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-text-muted hover:text-text-header transition-colors ml-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="py-2 md:hidden absolute left-0 right-0 top-14 bg-bg-secondary border-b border-border-main px-4">
            <div className="relative mb-2">
              <input type="text" placeholder="Qidirish..." className="w-full bg-bg-main border border-border-main rounded py-2 pl-3 pr-10 text-xs" />
              <Search className="absolute right-3 top-2.5 text-text-muted w-4 h-4" />
            </div>
            <ul className="flex flex-col py-2 text-xs font-medium text-text-muted space-y-1">
              <li><a href="#" className="block px-3 py-2 hover:bg-bg-tertiary hover:text-text-header rounded">Barcha toifalarrr</a></li>
              <li><a href="#" className="block px-3 py-2 hover:bg-bg-tertiary hover:text-text-header rounded">G'iloflar</a></li>
              <li><a href="#" className="block px-3 py-2 hover:bg-bg-tertiary hover:text-text-header rounded">Himoya oynalari</a></li>
              <li><a href="#" className="block px-3 py-2 text-accent-orange font-bold flex items-center gap-1"><Flame size={14}/> Chegirmalar</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
