
import React from 'react';

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-6 tracking-tighter uppercase">The AI-Design Workflow</h2>
          <p className="text-gray-400 text-lg">I use generative tools and custom scripts to eliminate the "blank canvas" phase, delivering studio-quality assets in 25% of the traditional time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          <div className="p-12 bg-black">
            <h4 className="font-mono text-xs text-red-500 uppercase tracking-widest mb-8">Traditional Agency</h4>
            <ul className="space-y-6">
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Sketching & Concepting</span>
                <span className="text-white">2-3 Days</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Asset Modeling (3D)</span>
                <span className="text-white">4-5 Days</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Lighting & Rendering</span>
                <span className="text-white">2 Days</span>
              </li>
              <li className="flex justify-between font-bold pt-6 border-t border-white/5">
                <span>Total Delivery</span>
                <span className="text-red-500">9-10 Days</span>
              </li>
            </ul>
          </div>

          <div className="p-12 bg-[#080808] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] bg-white text-black font-bold">OPTIMIZED</div>
            <h4 className="font-mono text-xs text-green-500 uppercase tracking-widest mb-8">Rx Workflow (Hybrid)</h4>
            <ul className="space-y-6">
              <li className="flex justify-between text-sm">
                <span className="text-gray-300 italic">Parallel Prompting & CV</span>
                <span className="text-white">4 Hours</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-300 italic">AI Upscaling & Inpainting</span>
                <span className="text-white">6 Hours</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-300 italic">Rim Light Mastering</span>
                <span className="text-white">2 Hours</span>
              </li>
              <li className="flex justify-between font-bold pt-6 border-t border-white/5">
                <span>Total Delivery</span>
                <span className="text-green-500">48 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
            <p className="font-mono text-xs text-gray-600 italic">"Quality is never sacrificed. We simply spend more time on the final 10% polish instead of the first 90% grunt work."</p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
