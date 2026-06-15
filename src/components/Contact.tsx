import { useState, FormEvent } from 'react';
import { Mail, Phone, MessageSquare, Linkedin, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate swift server-side capture or form trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-10 left-10 w-44 h-44 bg-gradient-to-tr from-accent-red/5 to-transparent rounded-full blur-2xl pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-gradient-to-tr from-accent-blue/5 to-transparent rounded-full blur-2xl pointer-events-none animate-float-slower"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-blue font-mono underline decoration-accent-blue underline-offset-8 decoration-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter uppercase leading-[1.1] pt-3">
            Let’s Discuss Your Project
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed pt-2">
            Have an upcoming branding, packaging, or marketing project? Settle your requirements here or reach out via direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tighter">
                Contact Coordinates
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Connect directly for emergency agency supports or simple freelance consults.
              </p>
            </div>

            <div className="space-y-4.5">
              {/* Email Connection */}
              <a
                href="mailto:oludaretobi13@gmail.com"
                className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-150 transition-colors group"
                id="contact-email-link"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Direct Email Address</span>
                  <span className="text-xs md:text-sm font-semibold text-slate-900 group-hover:text-accent-red transition-colors">oludaretobi13@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp Connection */}
              <a
                href="https://wa.me/2348163533418"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-150 transition-colors group"
                id="contact-whatsapp-link"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Fast Chat (WhatsApp)</span>
                  <span className="text-xs md:text-sm font-semibold text-slate-900 group-hover:text-accent-blue transition-colors flex items-center space-x-1.5ClassName">
                    <span>Chat with Tobi</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 inline" />
                  </span>
                </div>
              </a>

              {/* LinkedIn ID */}
              <a
                href="https://www.linkedin.com/in/tobi-oludare-a8b036380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-150 transition-colors group"
                id="contact-linkedin-link"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">LinkedIn Network</span>
                  <p className="text-xs md:text-sm font-semibold text-slate-900 group-hover:text-accent-red transition-colors flex items-center space-x-1">
                    <span>Tobi Oludare</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 inline" />
                  </p>
                </div>
              </a>

              {/* Geography location */}
              <div className="flex items-center p-4 bg-slate-55/60 rounded-xl border border-slate-150 select-none">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Base Location</span>
                  <span className="text-xs md:text-sm font-semibold text-slate-900">Abuja, Nigeria • Remote Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form Card */}
          <div className="lg:col-span-7 bg-slate-90 p-1 rounded-2xl bg-gradient-to-tr from-accent-red/20 to-accent-blue/20">
            <div className="bg-white p-6 md:p-8 rounded-2xl space-y-6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h4 className="text-lg font-display font-bold text-slate-950">Send a Secure Brief</h4>
                      <p className="text-slate-400 text-xs mt-1">
                        Fill in your coordinates and design specifications to trigger instant capture.
                      </p>
                    </div>

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 tracking-wide uppercase">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue rounded-lg bg-slate-50/20 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 tracking-wide uppercase">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue rounded-lg bg-slate-50/20 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Message description box */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 tracking-wide uppercase">Project Details</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hello Tobi, I need a luxury logo & brand guidelines design designed for my new tech startup..."
                        className="w-full px-4 py-3 text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue rounded-lg bg-slate-50/20 text-sm font-medium transition-all resize-none"
                      />
                    </div>

                    {/* Clear CTA button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center space-x-2 border border-slate-850 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Securing Connection...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Secured Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-bold text-slate-900">Brief Secured Successfully</h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                        "Thanks for reaching out! I’ll get back to you within 24–48 hours."
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
