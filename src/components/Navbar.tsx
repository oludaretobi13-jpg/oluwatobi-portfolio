import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Hire Me', id: 'hire-me' },
    { label: 'Contact Me', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background solid change
      setIsScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Branding */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-slate-900 flex items-center">
              TOBI
              <span className="inline-block w-2.5 h-2.5 bg-gradient-to-tr from-accent-red to-accent-blue rounded-full ml-1.5 group-hover:scale-135 transition-transform duration-300"></span>
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 border border-slate-200 text-slate-500 rounded bg-slate-50/50">
              Designer
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative py-1.5 transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'text-slate-900 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-red to-accent-blue rounded-full"
                        style={{ originY: '0px' }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick action button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center space-x-1.5 hover:shadow-md cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white shadow-xl border-b border-gray-100 lg:hidden p-6 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <ul className="space-y-4 font-display font-medium text-lg text-slate-800">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full py-2.5 text-left border-b border-slate-50 flex justify-between items-center cursor-pointer ${
                      activeSection === item.id
                        ? 'text-accent-red font-semibold pl-2 border-l-2 border-l-accent-blue'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-accent-red to-accent-blue'
                          : 'bg-transparent'
                      }`}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full justify-center p-4 bg-gradient-to-r from-accent-red to-accent-blue hover:from-red-650 hover:to-blue-650 text-white rounded-xl text-sm font-semibold tracking-wide shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Hire Me Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
