/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Headphones } from 'lucide-react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryList } from './components/CategoryList';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { CartSidebar } from './components/CartSidebar';
import { AiChatBot } from './components/AiChatBot';
import { AiSuggestionModal } from './components/AiSuggestionModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PRODUCTS } from './constants';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAiSuggestOpen, setIsAiSuggestOpen] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const changeQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setIsCartOpen(false);
    setCart([]);
  };

  return (
    <div className="text-slate-800 bg-slate-50 min-h-screen flex flex-col font-sans pb-14 md:pb-0">
      <Header 
        cartCount={cartCount} 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <Navbar />

      <main className="flex-grow">
        <Hero onOpenAiSuggest={() => setIsAiSuggestOpen(true)} />
        <CategoryList />

        {/* MAHSULOTLAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="flex justify-between items-end mb-4 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Yangi kelgan mahsulotlar</h2>
            <div className="flex gap-1 sm:gap-2">
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"><ChevronLeft size={16}/></button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"><ChevronRight size={16}/></button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* MAXSUS TAKLIF */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-8 sm:mb-12">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row relative">
            <div className="p-6 sm:p-8 md:p-12 md:w-2/3 flex flex-col justify-center relative z-10">
              <span className="text-orange-400 font-bold tracking-wider uppercase text-xs sm:text-sm mb-1 sm:mb-2">Maxsus taklif</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Simsiz quloqchinlarga <br/><span className="text-orange-400">50% chegirma!</span></h3>
              <p className="text-slate-300 mb-5 sm:mb-6 max-w-md text-sm sm:text-base">Faqat ushbu haftada eng xaridorgir simsiz quloqchinlarni arzon narxda xarid qiling.</p>
              
              <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[{v: '03', l: 'Kun'}, {v: '12', l: 'Soat'}, {v: '45', l: 'Daq'}].map((time, idx) => (
                  <div key={idx} className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center flex-1 sm:min-w-[70px] sm:flex-none border border-slate-700">
                    <span className="block text-xl sm:text-2xl font-bold text-white">{time.v}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 uppercase">{time.l}</span>
                  </div>
                ))}
              </div>
              
              <div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors inline-block text-sm sm:text-base w-full sm:w-auto text-center">
                  Chegirmani olish
                </button>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex items-center justify-center absolute md:relative inset-0 md:inset-auto opacity-20 md:opacity-100 z-0 overflow-hidden pointer-events-none md:pointer-events-auto">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/30 via-transparent to-transparent"></div>
              <Headphones className="w-48 h-48 md:w-64 md:h-64 text-white drop-shadow-[0_0_30px_rgba(249,115,22,0.5)] z-10 transform md:-rotate-12" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
        onChangeQuantity={changeQuantity} 
        onCheckout={handleCheckout} 
      />

      <AiSuggestionModal 
        isOpen={isAiSuggestOpen} 
        onClose={() => setIsAiSuggestOpen(false)} 
      />

      <AiChatBot />

      <MobileBottomNav 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Checkout Muofaqqiyatli Modali */}
      {isCheckoutSuccess && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform scale-100 animate-in zoom-in duration-200">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 fill-current text-white bg-green-500 rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Buyurtma qabul qilindi!</h3>
            <p className="text-slate-600 mb-6">Tez orada operatorlarimiz siz bilan bog'lanishadi.</p>
            <button onClick={() => setIsCheckoutSuccess(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
              Davom etish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

