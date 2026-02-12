
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden border-b border-white/5">
      {/* Dark Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">Status: Available for high-stakes projects</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-black mb-8 leading-[0.9] tracking-tighter">
            I'M RX <span className="text-gray-600">|</span> 🕷
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-2xl md:text-3xl font-light text-gray-300 leading-tight mb-8">
                Where <span className="text-white font-medium">Logic</span> Meets <span className="text-white font-medium">Luxury</span>. 
                I build scalable codebases and high-gloss AI assets at 4x speed.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#work" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-tighter hover:bg-gray-200 transition-all">
                  View Work
                </a>
                <a href="#workflow" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-tighter hover:bg-white/5 transition-all">
                  The Workflow
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-sm border-l-4 border-white">
              <h3 className="font-display font-bold text-xl mb-4">The Hybrid Pitch</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                "Being a senior developer makes me a superior designer. I don't just prompt; I engineer visuals using GPU-based computation, computer vision, and the same architectural discipline used in Elixir backend systems."
              </p>
              <div className="flex gap-6 text-xs font-mono text-gray-500">
                <div>// High-end Dev</div>
                <div>// Rapid AI-Design</div>
                <div>// Moderation Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
