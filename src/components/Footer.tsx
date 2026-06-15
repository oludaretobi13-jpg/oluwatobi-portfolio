import { Mail, Phone, MessageSquare, Linkedin, MapPin, ArrowUpCircle } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSocials = [
    { icon: <Mail className="w-4.5 h-4.5" />, href: 'mailto:oludaretobi13@gmail.com', label: 'Email' },
    { icon: <Phone className="w-4.5 h-4.5" />, href: 'tel:+2348163533418', label: 'Call' },
    { icon: <MessageSquare className="w-4.5 h-4.5" />, href: 'https://wa.me/2348163533418', label: 'WhatsApp' },
    { icon: <Linkedin className="w-4.5 h-4.5" />, href: 'https://www.linkedin.com/in/tobi-oludare-a8b036380', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-900 pb-12 text-left">
          
          {/* Logo Brand column */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-display font-bold text-2xl tracking-normal text-white flex items-center">
              TOBI OLUDARE
              <span className="inline-block w-2 h-2 bg-gradient-to-tr from-accent-red to-accent-blue rounded-full ml-1.5 animate-pulse"></span>
            </span>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Premium visual architecture for elite growing brands, startups, agencies, and luxury product lines worldwide.
            </p>
          </div>

          {/* Quick links & Details */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="block text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">Operation Base</span>
              <p className="text-xs text-slate-350 flex items-center space-x-1.5 select-none">
                <MapPin className="w-3.5 h-3.5 text-accent-red shrink-0" />
                <span>Abuja, Nigeria • Remote</span>
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">Fast Contact</span>
              <p className="text-xs text-slate-350 flex items-center space-x-1.5 select-none">
                <Phone className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>+234 816 353 3418</span>
              </p>
            </div>
          </div>

          {/* Social icons Column */}
          <div className="md:col-span-3 flex md:justify-end items-center space-x-3">
            {footerSocials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-lg bg-slate-900/60 hover:bg-gradient-to-tr hover:from-accent-red hover:to-accent-blue border border-slate-900 hover:border-transparent text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* bottom copyright section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-600 text-[11px] font-medium text-left space-y-4 sm:space-y-0 select-none">
          <div>
            <p>© {new Date().getFullYear()} Tobi Oludare. All Individual Copyrights Reserved.</p>
            <p className="text-[10px] text-slate-700 mt-1">Certified Graphic Design Solutions • Code & Visuals Architecture.</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="text-slate-500 hover:text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUpCircle className="w-4 h-4 text-slate-600 hover:text-accent-blue transition-colors" />
          </button>
        </div>

      </div>
    </footer>
  );
}
