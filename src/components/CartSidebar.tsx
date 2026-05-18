import React from 'react';
import { ShoppingCart, ShoppingBag, X, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { formatPrice } from '../lib/utils';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onChangeQuantity: (id: number, delta: number) => void;
  onCheckout: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, onClose, items, onRemove, onChangeQuantity, onCheckout 
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-bg-main z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 border-l border-border-main ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-border-main flex justify-between items-center bg-bg-secondary h-14">
          <h2 className="text-xs font-bold text-text-header flex items-center gap-2 uppercase tracking-widest font-mono">
            <ShoppingCart className="text-accent-blue w-4 h-4" /> [STAGING_AREA]
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-header w-8 h-8 flex items-center justify-center rounded transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-muted gap-4 font-mono">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p className="text-[10px] uppercase">// Empty_Stack</p>
              <button onClick={onClose} className="px-4 py-1 border border-border-main text-[10px] text-accent-blue rounded hover:bg-bg-tertiary transition-colors">INIT_SCAN</button>
            </div>
          ) : (
            items.map(item => {
              const ItemIcon = item.icon;
              return (
                <div key={item.id} className="flex gap-4 p-3 bg-bg-secondary rounded border border-border-main relative group">
                  <button onClick={() => onRemove(item.id)} className="absolute top-2 right-2 w-5 h-5 bg-bg-main border border-border-main text-text-muted rounded flex items-center justify-center hover:text-accent-orange hover:border-accent-orange transition-all">
                    <X size={12} />
                  </button>
                  <div className="w-16 h-16 rounded bg-bg-main border border-border-main flex items-center justify-center flex-shrink-0">
                    <ItemIcon size={24} className="text-text-muted" />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="text-[11px] font-bold text-text-header line-clamp-1 uppercase tracking-tight">{item.name}</h4>
                      <span className="text-[10px] font-mono text-text-muted">{formatPrice(item.price)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center bg-bg-main border border-border-main rounded overflow-hidden">
                        <button onClick={() => onChangeQuantity(item.id, -1)} className="w-6 h-5 flex items-center justify-center text-text-muted hover:bg-bg-tertiary">-</button>
                        <span className="w-8 text-center text-[10px] font-mono font-bold text-text-header">{item.quantity}</span>
                        <button onClick={() => onChangeQuantity(item.id, 1)} className="w-6 h-5 flex items-center justify-center text-text-muted hover:bg-bg-tertiary">+</button>
                      </div>
                      <span className="font-mono font-bold text-[11px] text-accent-blue">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className="p-6 border-t border-border-main bg-bg-secondary">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono text-text-muted uppercase">Checksum:</span>
            <span className="text-xl font-bold text-text-header font-mono">{formatPrice(total)}</span>
          </div>
          <p className="text-[9px] font-mono text-text-muted mb-6 uppercase tracking-tighter">// Delivery_protocols_applied_at_checkout</p>
          <button 
            onClick={onCheckout} 
            disabled={items.length === 0} 
            className="w-full bg-accent-green hover:bg-[#2ea043] text-white font-bold py-3 rounded text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest shadow-lg shadow-accent-green/10"
          >
            Execute Purchase <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </>
  );
};
