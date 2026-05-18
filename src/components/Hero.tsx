import React, { useState } from 'react';
import { Smartphone, ArrowRight, Wand2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenAiSuggest: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiSuggest }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="bg-bg-secondary border border-border-main rounded-md overflow-hidden relative shadow-2xl">
        <div className="flex flex-col md:flex-row items-stretch min-h-[300px]">
          
          <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border-main bg-bg-secondary relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent-green/10 text-accent-green border border-accent-green/30 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">Active Draft</span>
              <span className="text-[10px] font-mono text-text-muted">v2.4.0-legacy</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-header mb-4 leading-tight uppercase tracking-tight">
              Hardware Layer <br className="hidden sm:block"/><span className="text-accent-blue">Initialization</span>
            </h1>
            
            <p className="text-text-muted mb-8 max-w-md text-xs sm:text-sm font-mono leading-relaxed">
              // Premium accessory modules for mobile architecture.<br/>
              // High-precision cases for protection and aesthetics.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button className="bg-accent-blue hover:bg-[#4a9eff] text-white font-bold py-2 px-6 rounded text-xs transition-transform hover:scale-[1.02] active:scale-95 flex items-center gap-2 shadow-lg shadow-accent-blue/10">
                Deploy Now <ArrowRight size={14} />
              </button>
              <button 
                onClick={onOpenAiSuggest}
                className="bg-bg-tertiary border border-border-main text-text-header font-bold py-2 px-6 rounded text-xs transition-all hover:bg-border-main flex items-center gap-2"
              >
                <Sparkles size={14} className="text-accent-orange" /> AI_PROMPT
              </button>
            </div>
          </div>

          <div className="md:w-1/2 bg-bg-main relative flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
                <Smartphone className="w-40 h-40 sm:w-56 sm:h-56 text-text-header relative z-10 drop-shadow-[0_0_15px_rgba(230,237,243,0.3)]" />
                
                <div className="absolute -top-2 -right-2 bg-accent-orange text-white text-[10px] font-mono font-bold px-2 py-1 rounded shadow-lg border border-bg-main">
                  -50%_OFF
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="mt-8 bg-bg-tertiary/80 backdrop-blur-sm border border-border-main text-text-header text-[10px] font-mono py-1.5 px-4 rounded transition-all flex items-center gap-2 hover:border-text-muted disabled:opacity-50"
              >
                <Wand2 size={12} className={isGenerating ? 'animate-spin text-accent-purple' : 'text-accent-purple'} /> 
                REGENERATE_DESIGN (0.04s)
              </button>
            </div>
            
            {/* Terminal Decorations */}
            <div className="absolute bottom-2 right-4 text-[9px] font-mono text-text-muted flex gap-4 uppercase">
              <span>Nodes: 1,024</span>
              <span>Memory: 4.2GB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
