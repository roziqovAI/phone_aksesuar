import React from 'react';
import { Home, LayoutGrid, ShoppingCart, User } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-bg-secondary border-t border-border-main z-[45] flex justify-around items-center h-12 px-2 font-mono text-[10px]">
      <button className="flex flex-col items-center justify-center w-full text-accent-blue h-full">
        <Home size={18} className="mb-0.5" />
        <span>HOME</span>
      </button>
      <button className="flex flex-col items-center justify-center w-full text-text-muted hover:text-text-header h-full transition-colors">
        <LayoutGrid size={18} className="mb-0.5" />
        <span>EXPLORE</span>
      </button>
      <button onClick={onOpenCart} className="flex flex-col items-center justify-center w-full text-text-muted hover:text-text-header h-full transition-colors relative">
        <ShoppingCart size={18} className="mb-0.5" />
        <span>CART</span>
        {cartCount > 0 && <span className="absolute top-1.5 right-4 bg-accent-blue w-1.5 h-1.5 rounded-full shadow-[0_0_8px_#58a6ff]"></span>}
      </button>
      <button className="flex flex-col items-center justify-center w-full text-text-muted hover:text-text-header h-full transition-colors">
        <User size={18} className="mb-0.5" />
        <span>USER</span>
      </button>
    </div>
  );
};
