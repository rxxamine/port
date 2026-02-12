
import React from 'react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Technical Backend",
      skills: ["Elixir (Ash Framework)", "Phoenix LiveView", "Python (PyTorch)", "PostgreSQL", "Scalable Systems"]
    },
    {
      title: "AI & Automation",
      skills: ["Prompt Engineering", "Computer Vision (CV)", "GPU Optimization", "Stable Diffusion Workflow", "Moderation Safety"]
    },
    {
      title: "High-Gloss Design",
      skills: ["Luxury Aesthetics", "Rim Lighting", "3D Rendering", "Asset Pipelines", "Photoshop Generative AI"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-xl font-mono text-gray-500 mb-16 uppercase tracking-widest text-center">Engineered for Performance</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title} className="space-y-8">
              <h3 className="text-2xl font-display font-bold border-b border-white/10 pb-4">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-4 group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="text-gray-400 group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
