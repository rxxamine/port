
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020202] selection:bg-white selection:text-black">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Simple Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <Projects />
      </main>

      <Footer />
      <ChatAssistant />
      
      <style>{`
        /* Minimal custom styles for the high-end feel */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        section {
          scroll-margin-top: 80px;
        }

        .high-gloss {
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.5);
          transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .high-gloss:hover {
          border-color: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
};

export default App;
