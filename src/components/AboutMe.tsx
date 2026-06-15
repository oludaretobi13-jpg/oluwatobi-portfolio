import { motion } from 'motion/react';
import { Layers, Palette, Award, HardDrive, Compass, BookOpen } from 'lucide-react';
import { SKILL_PERCENTAGES, TOOLS } from '../data';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-slate-55/40 border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Biography, Summary & Stats */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-red font-mono underline decoration-accent-red underline-offset-8 decoration-2">
                My Story
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter uppercase leading-[1.1] pt-3">
                Crafting Visual Legacies That Help Businesses Scale
              </h2>
            </div>

            <div className="space-y-6 text-slate-650 leading-relaxed text-sm md:text-base">
              <p>
                I am <span className="font-semibold text-slate-900">Tobi Oludare</span>, a certified, highly focused graphic designer driven by a single guiding mission: to translate business value into elite visual communications. Design is never about decoration. Truly great design is an asset class that builds customer trust and multiplies conversion rates.
              </p>
              <p>
                For over half a decade, I have collaborated with brand leaders, fast-growing tech startups, and independent founders worldwide. By merging rigorous design principles with active psychology, I construct visual systems that carry structural messaging clearly and trigger immediate client attraction.
              </p>
              <p>
                My working framework prioritizes clean, premium grids, functional spacing, sophisticated color strategy (like my tailored red and blue energy systems), and modern typography. I pride myself on maintaining professional transparency, rigorous timelines, and bulletproof delivery consistency.
              </p>
            </div>

            {/* Micro numbers showcase */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center sm:text-left">
                <span className="block font-display text-2xl md:text-3xl font-black bg-gradient-to-r from-accent-red to-accent-blue bg-clip-text text-transparent uppercase">6 Mos</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Experience</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center sm:text-left">
                <span className="block font-display text-2xl md:text-3xl font-black bg-gradient-to-r from-accent-red to-accent-blue bg-clip-text text-transparent uppercase">10+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Completed Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Tools */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* Skills Breakdown with Progress Bars */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue font-mono underline decoration-accent-blue underline-offset-8 decoration-2">Expertise</span>
                <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tighter mt-3">Design Performance</h3>
              </div>

              <div className="space-y-4">
                {SKILL_PERCENTAGES.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    {/* Outer Progress bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full ${
                          index % 2 === 0
                            ? 'bg-gradient-to-r from-accent-red to-accent-blue'
                            : 'bg-gradient-to-r from-accent-blue to-accent-red'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-mono">Professional Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {TOOLS.map((tool, idx) => {
                  let categoryLabel = 'Graphic Engine';
                  if (tool.category === 'core') categoryLabel = 'Templates Suit';
                  if (tool.category === 'prototyping') categoryLabel = 'Digital Canvas';

                  return (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-3.5 group"
                    >
                      {/* Tool Logo placeholder layout using geometric shapes */}
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient-to-tr from-slate-50 to-slate-100 text-slate-800 border border-slate-150 relative overflow-hidden group-hover:scale-105 transition-transform duration-200">
                        {tool.name === 'Adobe Photoshop' && <span className="text-blue-600 font-extrabold text-base">Ps</span>}
                        {tool.name === 'Adobe Illustrator' && <span className="text-orange-500 font-extrabold text-base">Ai</span>}
                        {tool.name === 'Canva Pro' && <span className="text-cyan-500 font-extrabold text-base font-serif">C</span>}
                        {tool.name === 'Figma' && <span className="text-rose-500 font-extrabold text-base">Fg</span>}
                      </div>

                      <div className="text-left">
                        <h5 className="text-xs font-bold text-slate-900 leading-none">{tool.name}</h5>
                        <span className="text-[10px] text-slate-400 mt-1 block">{categoryLabel}</span>
                        {/* Interactive Level Meter */}
                        <div className="flex items-center space-x-1.5 mt-1.5">
                          <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-900 rounded-full" style={{ width: `${tool.level}%` }} />
                          </div>
                          <span className="text-[9px] font-mono text-slate-500 font-semibold">{tool.level}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
