import { ArrowRight, Sparkles, ShieldCheck, Trophy, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { TOBI_HEADSHOT } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Decorative organic gradient glow behind the hero */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-accent-red/10 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-accent-blue/10 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slower"></div>

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-150 text-[10px] sm:text-xs font-bold text-slate-600 tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red"></span>
              <span className="font-mono">
                Certified Graphic Designer
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7.5xl font-display font-black leading-[0.92] tracking-tighter text-slate-900 uppercase"
              >
                Hi, I'm <span className="bg-gradient-to-r from-accent-red via-slate-900 to-accent-blue bg-clip-text text-transparent">Tobi Oludare</span><br/>
                DESIGNING <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-accent-blue">BRANDS</span> THAT STAND OUT.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg font-medium text-slate-600 leading-relaxed max-w-xl"
              >
                Certified Graphic Designer specializing in custom branding, luxury packaging, and conversion-focused marketing assets.
              </motion.p>
            </div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* Primary CTA (Bold Gradient Hire Me) */}
              <button
                id="hero-cta-hire"
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 text-sm font-semibold tracking-wide text-white rounded-xl bg-gradient-to-r from-accent-red to-accent-blue hover:from-accent-red hover:to-accent-blue hover:shadow-xl hover:shadow-accent-blue/20 transition-all duration-300 transform hover:-translate-y-0.5 filter hover:brightness-110 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Hire Me Now</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              {/* Secondary CTA (View Portfolio Action) */}
              <button
                id="hero-cta-portfolio"
                onClick={() => handleScrollTo('portfolio')}
                className="px-8 py-4 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-slate-200/60 hover:border-slate-350 flex items-center justify-center cursor-pointer"
              >
                <span>View Portfolio Case Studies</span>
              </button>
            </motion.div>
          </div>

          {/* Right Headshot Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Visual background elements */}
            <div className="absolute w-[110%] h-[110%] rounded-full bg-gradient-to-tr from-accent-red/20 via-transparent to-accent-blue/20 blur-2xl pointer-events-none"></div>
            
            {/* Red and blue absolute outline highlights */}
            <div className="absolute top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent-blue/40 rounded-tl-xl font-normal"></div>
            <div className="absolute bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent-red/40 rounded-br-xl font-normal"></div>

            {/* Dotted geometric graphic element */}
            <div className="absolute -top-6 -right-6 grid grid-cols-5 gap-1.5 opacity-30">
              {Array.from({ length: 25 }).map((_, idx) => (
                <div key={idx} className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
              ))}
            </div>

            {/* Headshot Card wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring' }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 z-10 w-full max-w-sm md:max-w-md aspect-square border-4 border-white"
            >
              {/* Main headshot image with no-referrer policy */}
              <img
                id="tobi-headshot-img"
                src="https://i.ibb.co/vCGWxW1L/passport.png"
                alt="Tobi Oludare"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none object-center"
              />

              {/* Floating micro info card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between text-left">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Available for Freelance</h3>
                  <p className="text-[10px] text-emerald-600 font-semibold flex items-center mt-0.5 space-x-1 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Accepting Q3 Projects</span>
                  </p>
                </div>
                <div className="text-right font-normal">
                  <span className="text-[10px] uppercase font-mono bg-slate-100 px-2 py-1 text-slate-600 rounded">
                    Abuja, Nigeria
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
