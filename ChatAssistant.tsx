
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Protocol initiated. I am the Rx | 🕷 agent. Ask me about technical architecture or rapid design workflows.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    let currentResponse = '';
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const stream = geminiService.chatStream(userMessage, history);
      for await (const chunk of stream) {
        currentResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: currentResponse };
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[90vw] sm:w-[400px] h-[550px] glass rounded-sm flex flex-col shadow-2xl border-white/10 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white text-black">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center font-display font-black text-white text-xs">🕷</div>
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest">Rx Agent</h4>
                <p className="text-[8px] font-mono uppercase font-bold opacity-60">Neural Link Active</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-black/80">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-none text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-[#111] text-gray-300 border border-white/5'
                }`}>
                  {m.text || (isTyping && i === messages.length - 1 ? <span className="animate-pulse">_PROCESSING...</span> : '')}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-black">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="INPUT COMMAND..." 
                className="w-full bg-white/5 border border-white/10 rounded-none py-4 px-4 pr-12 focus:outline-none focus:border-white transition-colors text-[10px] font-mono"
              />
              <button 
                type="submit"
                disabled={isTyping}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white disabled:opacity-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-4 px-3 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border-b-2 border-gray-300 translate-y-2 group-hover:translate-y-0 duration-200">
            Ask Rx Agent
            <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
          </div>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-none bg-white text-black flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border-b-4 border-gray-400"
          >
            <span className="font-display font-black text-xl group-hover:animate-pulse">🕷</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
