import { Check, ClipboardList, Briefcase, ArrowUpRight, TrendingUp, Sparkles, Layout } from 'lucide-react';
import { SERVICES } from '../data';

export default function HireMe() {
  const handleScrollToContact = (serviceTitle?: string) => {
    const contactSection = document.getElementById('contact');
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement | null;
    
    if (contactSection) {
      if (messageInput && serviceTitle) {
        messageInput.value = `Hi Tobi, I am interested in your "${serviceTitle}" package. Let me know your current availability and the next steps to get started!`;
      }
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hire-me" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      {/* Absolute grid vector highlights */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Value Proposition Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 text-left">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-red font-mono underline decoration-accent-red underline-offset-8 decoration-2">
              Core Services
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter uppercase leading-[1.05] pt-3">
              Design That Inspires Confidence & Converts
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl pt-2">
              I do not just deliver standard layouts. I build tailored visual narratives that transform how consumers perceive your business. Every pixel is calculated to project premium trust, clarity, and market authority.
            </p>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-tr from-accent-red/5 to-accent-blue/5 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm">
              <TrendingUp className="w-5 h-5 text-accent-blue" />
              <span>Conversion-First Approach</span>
            </div>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
              Every design is conceptualized to solve a direct conversion bottleneck, helping you convert visitors into active, paying clients.
            </p>
            <button
              onClick={() => handleScrollToContact('General Inquiry')}
              className="mt-4 text-xs font-bold text-accent-red flex items-center space-x-1 hover:text-accent-blue transition-colors cursor-pointer"
            >
              <span>Consult free of charge</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Services Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6.5 border border-slate-150 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Visual marker */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800 group-hover:bg-gradient-to-tr group-hover:from-accent-red/10 group-hover:to-accent-blue/10 transition-colors">
                  {idx === 0 && <Sparkles className="w-5 h-5 text-accent-red" />}
                  {idx === 1 && <Layout className="w-5 h-5 text-slate-800" />}
                  {idx === 2 && <ClipboardList className="w-5 h-5 text-accent-blue" />}
                  {idx === 3 && <Briefcase className="w-5 h-5 text-purple-600" />}
                  {idx === 4 && <Layout className="w-5 h-5 text-emerald-600" />}
                  {idx === 5 && <Sparkles className="w-5 h-5 text-cyan-600" />}
                </div>

                {/* Listing content */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900 group-hover:text-accent-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Bullet lists */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block">
                    What You Receive:
                  </span>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instant CTA inside card */}
              <button
                onClick={() => handleScrollToContact(service.title)}
                className="w-full mt-6 py-3 bg-slate-50 hover:bg-gradient-to-r hover:from-accent-red hover:to-accent-blue group-hover:bg-slate-900 hover:text-white rounded-xl text-xs font-semibold text-slate-700 transition-all border border-slate-200 hover:border-transparent flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Hire For {service.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </button>
            </div>
          ))}
        </div>

        {/* Master Section Action Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-xl border border-slate-850">
          {/* Neon absolute glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-red/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-red">
              Partner With Tobi
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-semibold tracking-tight">
              Ready to elevate your brand’s visual presence?
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Let's craft graphic designs that stand out, communicate clearly, and leave lasting impressions on your paying clients. Simply fill out the brief below and secure your spot.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <button
              onClick={() => handleScrollToContact('Master Creative Request')}
              className="px-8 py-4 bg-gradient-to-r from-accent-red to-accent-blue hover:from-red-650 hover:to-blue-650 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
