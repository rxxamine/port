
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const WEBHOOK_URL = 'https://discord.com/api/webhooks/1471454965875605567/HooBHnUxerM9SMJnnIZBQ1-olZn-o8dLnANVVt7ptKJlJuisXjKfU5xTijPj7EH90FW7';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const embed = {
      title: "🕷️ New Protocol Initiation",
      color: 0x000000,
      fields: [
        { name: "Operator", value: formData.name || "Unknown", inline: true },
        { name: "Email", value: formData.email || "Unknown", inline: true },
        { name: "Discord", value: formData.discord || "Not Provided", inline: true },
        { name: "Message", value: formData.message || "No content" }
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "I'M RX | Secure Transmission" }
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', discord: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="py-24 border-t border-white/5 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-5xl font-display font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Secure <br /> <span className="gradient-text">Communication.</span>
            </h2>
            <p className="text-gray-500 mb-10 font-light leading-relaxed max-w-sm uppercase text-[10px] tracking-widest">
              Available for high-stakes projects requiring extreme technical rigidity and rapid visual synthesis. All transmissions are encrypted.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass flex items-center justify-center font-display font-black">🕷</div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Network Node</p>
                  <p className="text-xs font-bold">@rxaminex</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com/rxaminex" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-600 tracking-widest">SECURE_CHANNEL_v4.2</div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Identity</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="NAME / OPERATOR" 
                    className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-xs font-mono uppercase"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Discord Handle</label>
                  <input 
                    type="text" 
                    value={formData.discord}
                    onChange={(e) => setFormData({...formData, discord: e.target.value})}
                    placeholder="username#0000" 
                    className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-xs font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Digital Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="EMAIL@PROTOCOL.COM" 
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-xs font-mono uppercase"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Payload</label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="DESCRIBE THE PROJECT SCOPE..." 
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-white transition-all text-xs font-mono uppercase"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-gray-200 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'TRANSMITTING...' : status === 'success' ? 'PROTOCOL_SUCCESS' : 'INITIALIZE_HANDSHAKE'}
              </button>

              {status === 'error' && (
                <p className="text-[10px] font-mono text-red-500 text-center uppercase tracking-widest">Encryption Failure. Retry Connection.</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-gray-700 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} I'M RX | 🕷 ALL SYSTEMS OPERATIONAL.</p>
          <div className="flex gap-8 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-green-900">ENCRYPTED_STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
