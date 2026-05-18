import React, { useState } from 'react';
import { Sparkles, X, Wand2 } from 'lucide-react';
import { getAiSuggestion } from '../services/geminiService';

interface AiSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiSuggestionModal: React.FC<AiSuggestionModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSuggest = async () => {
    if (!input.trim() || isLoading) return;
    setIsLoading(true);
    const suggestion = await getAiSuggestion(input);
    setResult(suggestion);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
      <div className="bg-bg-main border border-border-main rounded-md w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh] overflow-hidden">
        <div className="bg-bg-secondary p-3 border-b border-border-main flex justify-between items-center font-mono">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-accent-blue" />
            <h3 className="text-xs font-bold text-text-header uppercase tracking-widest">Oracle_Module v1.0</h3>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-header transition-colors">
            <X size={18} />
          </button>
        </div>
        
        <div className="p-4 md:p-6 font-mono">
          <p className="text-[11px] text-text-muted mb-4 uppercase tracking-tighter leading-relaxed">
            // Analyze requirement stream to synthesize optimal hardware solution.<br/>
            // Awaiting user parameter initialization...
          </p>

          <div className="relative mb-6">
            <div className="absolute top-2 left-3 text-text-muted text-[10px] pointer-events-none">{`>`}</div>
            <textarea 
              value={input} 
              onChange={e => setInput(e.target.value)}
              placeholder="INPUT_SEARCH_PARAMS..."
              className="w-full bg-bg-secondary border border-border-main rounded p-3 pl-7 text-[11px] font-mono text-text-main focus:outline-none focus:ring-1 focus:ring-accent-blue resize-none h-24 placeholder:text-text-muted/30"
            ></textarea>
            <button 
              onClick={handleSuggest}
              disabled={isLoading || !input.trim()}
              className="absolute bottom-3 right-3 bg-accent-blue hover:bg-[#4a9eff] text-white px-4 py-1.5 rounded text-[10px] font-bold transition-all disabled:opacity-30 flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-accent-blue/10"
            >
              {isLoading ? <Wand2 className="animate-spin w-3 h-3"/> : <Sparkles className="w-3 h-3" />}
              EXECUTE_AI
            </button>
          </div>

          {result && (
            <div className="flex-grow overflow-y-auto bg-bg-secondary rounded p-4 border border-border-main font-mono text-[11px] text-text-main leading-relaxed relative custom-scrollbar max-h-[250px]">
              <div className="absolute top-2 right-2 text-[8px] text-accent-green uppercase opacity-50">output_ready</div>
              <div dangerouslySetInnerHTML={{ __html: result.replace(/\*\*(.*?)\*\*/g, '<b class="text-accent-orange">$1</b>').replace(/\n/g, '<br/>') }}></div>
            </div>
          )}
        </div>
        
        <div className="p-3 bg-bg-secondary border-t border-border-main text-[9px] font-mono text-text-muted text-center uppercase tracking-widest">
          SYS_LOG: CONNECTION_ESTABLISHED // LATENCY: 24ms
        </div>
      </div>
    </div>
  );
};
