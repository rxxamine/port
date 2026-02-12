
import React from 'react';
import { Project } from '../types';

const work: Project[] = [
  {
    id: 'rx-ai',
    title: 'RxAI | Neural Forge',
    description: 'Advanced multimodal intelligence system. Engineered for deep reasoning and visionary synthesis. Features a luxury technical interface with sub-100ms response cycles.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI Core', 'Logic', 'Visionary'],
    link: '#'
  },
  {
    id: 'rx-ware',
    title: 'RxWare™ | Optimization Core',
    description: 'Elite performance hub for scalable software systems. Built on extreme technical rigidity with real-time hardware optimization hooks and high-gloss aesthetics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Systems', 'Real-Time', 'High-Gloss'],
    link: '#'
  },
  {
    id: 'rx-hustle',
    title: 'RxHustle | Strategy Hub',
    description: 'Wealth-building command center. Optimized for zero-capital strategies and aggressive conversion cycles. Built for the modern high-stakes digital economy.',
    image: 'https://images.unsplash.com/photo-1611974714158-f88c5a9136b9?auto=format&fit=crop&q=80&w=1200',
    tags: ['FinTech', 'Strategy', 'Elite'],
    link: '#'
  },
  {
    id: 'rx-phones',
    title: 'RxPhones | Premium Retail',
    description: 'Conversion-optimized e-commerce platform for luxury hardware. Featuring high-gloss liquid assets and a street-smart retail architecture.',
    image: 'https://images.unsplash.com/photo-1510557883980-48a1400d9f2e?auto=format&fit=crop&q=80&w=1200',
    tags: ['E-Commerce', 'Retail', 'Design'],
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter uppercase">Operational Portfolio</h2>
          <div className="w-20 h-0.5 bg-white/20"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {work.map((item) => (
            <div key={item.id} className="group cursor-pointer bg-black p-1">
              <div className="relative overflow-hidden bg-[#050505] high-gloss aspect-[16/10] rounded-none">
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                   <div className="flex gap-2 mb-6">
                    {item.tags.map(tag => (
                      <span key={tag} className="font-mono text-[8px] text-white/40 px-3 py-1 border border-white/10 uppercase tracking-widest bg-black/80">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-tighter uppercase">{item.title}</h3>
                  <p className="text-gray-500 text-xs max-w-sm leading-relaxed uppercase tracking-wider">{item.description}</p>
                </div>
                
                <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-display font-bold text-white/10 text-4xl">
                  🕷
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
