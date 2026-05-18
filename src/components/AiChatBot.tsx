import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, X, Send } from 'lucide-react';
import { Message } from '../types';
import { sendChatMessage } from '../services/geminiService';

export const AiChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Assalomu alaykum! Men MobiAks do'konining **Sun'iy Intellekt yordamchisiman**.\n\nSizga telefoningiz uchun qanday aksesuarlar topishga yordam beray?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userInput = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userInput }]);
    setIsLoading(true);

    const response = await sendChatMessage(messages, userInput);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-bg-secondary border border-border-main rounded-md shadow-2xl flex items-center justify-center text-accent-blue hover:text-text-header hover:border-accent-blue transition-all z-50 group overflow-hidden"
      >
        <Sparkles className="absolute -top-1 -right-1 text-accent-orange w-4 h-4 animate-pulse" />
        <Bot className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      <div className={`fixed bottom-36 md:bottom-24 right-4 md:right-6 w-[calc(100%-32px)] md:w-[380px] bg-bg-main rounded shadow-2xl z-50 flex flex-col overflow-hidden border border-border-main transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-bg-secondary p-3 text-text-header flex justify-between items-center border-b border-border-main font-mono">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-bg-main border border-border-main rounded flex items-center justify-center text-accent-blue">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="text-xs font-bold leading-tight uppercase tracking-widest">MobiAks_Agent</h3>
              <p className="text-[9px] text-accent-blue flex items-center gap-1 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span> Listener_Active
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-7 h-7 flex items-center justify-center rounded hover:bg-bg-tertiary transition-colors">
            <X size={16} />
          </button>
        </div>
        
        <div className="flex-grow h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-bg-main font-mono text-[11px] custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className={`text-[9px] uppercase font-bold ${msg.role === 'user' ? 'text-text-muted' : 'text-accent-blue'}`}>
                {msg.role === 'user' ? '> USER' : '>> AGENT'}
              </span>
              <div className={`${msg.role === 'user' ? 'bg-bg-tertiary border border-border-main text-text-header' : 'bg-bg-secondary border border-border-main text-text-main'} p-3 rounded shadow-sm max-w-[90%] leading-relaxed`} dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<b class="text-accent-orange">$1</b>').replace(/\n/g, '<br/>') }}>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col items-start gap-1">
              <span className="text-[9px] uppercase font-bold text-accent-blue">{" >> "} AGENT</span>
              <div className="bg-bg-secondary border border-border-main p-3 rounded shadow-sm flex items-center gap-1.5">
                <div className="w-1 h-1 bg-accent-blue rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-1 h-1 bg-accent-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-accent-blue rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 border-t border-border-main bg-bg-secondary">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-text-muted font-mono text-xs cursor-default">{`>`}</span>
            <input 
              type="text" value={input} onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
              placeholder="Send instruction..." 
              className="w-full bg-bg-main border border-border-main rounded py-2 pl-7 pr-10 text-xs font-mono text-text-main focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all" 
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim()} className="absolute right-2 text-text-muted hover:text-accent-blue disabled:opacity-30">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
