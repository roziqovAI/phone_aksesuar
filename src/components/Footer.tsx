import React from 'react';
import { Smartphone, Instagram, Send, Facebook, MapPin, Phone, Mail, Clock, CreditCard, Banknote, Landmark } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary text-text-muted pt-12 pb-6 border-t border-border-main font-mono text-[11px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <Smartphone className="text-accent-blue w-6 h-6" />
              <span className="font-bold text-lg tracking-tight text-text-header">Mobi<span className="text-accent-blue">Aks</span></span>
            </a>
            <p className="mb-6 leading-relaxed uppercase tracking-tighter">
              // Enterprise-grade hardware initialization.<br/>
              // Global distribution localized for Central Asia node.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-bg-main border border-border-main flex items-center justify-center hover:text-accent-blue hover:border-accent-blue transition-all"><Instagram size={16}/></a>
              <a href="#" className="w-8 h-8 rounded bg-bg-main border border-border-main flex items-center justify-center hover:text-accent-blue hover:border-accent-blue transition-all"><Send size={16}/></a>
              <a href="#" className="w-8 h-8 rounded bg-bg-main border border-border-main flex items-center justify-center hover:text-accent-blue hover:border-accent-blue transition-all"><Facebook size={16}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-text-header font-bold mb-6 uppercase text-[10px] tracking-widest border-b border-border-main pb-1">Documentation</h4>
            <ul className="space-y-2">
              {["README.md", "SHIPPING.log", "PAYMENTS.conf", "TERMS.txt", "PRIVACY.v3"].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-accent-blue transition-colors flex items-center gap-2"><span>📄</span> {link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-header font-bold mb-6 uppercase text-[10px] tracking-widest border-b border-border-main pb-1">Registry</h4>
            <ul className="space-y-2">
              {["@ios_layer", "@android_layer", "@charging_core", "@audio_buffer", "@active_drafts"].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-accent-blue transition-colors flex items-center gap-2"><span>📦</span> {link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-header font-bold mb-6 uppercase text-[10px] tracking-widest border-b border-border-main pb-1">Connection</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><MapPin className="text-accent-blue w-4 h-4 flex-shrink-0" /><span className="uppercase tracking-tighter">UZ_TAS_CHIL_12U</span></li>
              <li className="flex items-center gap-2"><Phone className="text-accent-blue w-4 h-4 flex-shrink-0" /><span>+998.90.123.45.67</span></li>
              <li className="flex items-center gap-2"><Mail className="text-accent-blue w-4 h-4 flex-shrink-0" /><span>root@mobiaks.uz</span></li>
              <li className="flex items-center gap-2"><Clock className="text-accent-blue w-4 h-4 flex-shrink-0" /><span>09:00 - 20:00 [UTC+5]</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-main pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="uppercase tracking-widest text-[9px]">© 2026 MOBIAKS_NODE. DEPLOYED_VIA_AIS</p>
          <div className="flex items-center gap-4 text-text-muted grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <CreditCard size={20}/> <Banknote size={20}/> <Landmark size={20}/>
          </div>
        </div>
      </div>
    </footer>
  );
};
