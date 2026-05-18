import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const Icon = product.icon;
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : null;

  return (
    <div className="bg-bg-secondary border border-border-main rounded-md overflow-hidden hover:border-text-muted transition-all group flex flex-col h-full shadow-sm">
      <div className="relative h-32 sm:h-40 bg-bg-main flex items-center justify-center border-b border-border-main p-4 overflow-hidden">
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {discount && <span className="bg-accent-orange/10 text-accent-orange text-[9px] font-bold px-1.5 py-0.5 rounded border border-accent-orange/30">-{discount}%</span>}
          {product.isNew && !discount && <span className="bg-accent-blue/10 text-accent-blue text-[9px] font-bold px-1.5 py-0.5 rounded border border-accent-blue/30">NEW</span>}
        </div>
        
        <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-text-muted group-hover:text-accent-blue transition-colors duration-300 transform group-hover:scale-105" />
        
        <div className="absolute inset-0 bg-transparent group-hover:bg-accent-blue/5 transition-colors pointer-events-none"></div>
      </div>

      <div className="p-3 flex flex-col flex-grow bg-bg-secondary">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] font-mono text-text-muted uppercase tracking-tighter truncate max-w-[70%]">@{product.category.replace(/ /g, '_').toLowerCase()}</span>
          <div className="flex items-center gap-0.5">
            <Star size={10} className="text-accent-orange fill-accent-orange" />
            <span className="text-[9px] font-mono text-text-muted">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xs font-bold text-text-header mb-3 line-clamp-2 leading-tight flex-grow uppercase tracking-tight">{product.name}</h3>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-main">
          <div className="flex flex-col">
            {product.oldPrice && <span className="text-[9px] font-mono text-text-muted line-through">{formatPrice(product.oldPrice)}</span>}
            <span className={`font-mono text-xs font-bold ${product.oldPrice ? 'text-accent-orange' : 'text-text-header'}`}>{formatPrice(product.price)}</span>
          </div>
          
          <button 
            onClick={() => onAddToCart(product)} 
            className="bg-accent-green hover:bg-[#2ea043] text-white text-[10px] font-bold px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-1.5 active:scale-95"
          >
            <ShoppingCart size={12} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
