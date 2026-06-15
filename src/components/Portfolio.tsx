import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Briefcase, FileText, BarChart3, Users, ArrowUpRight, Check } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    return [
      'All',
      'Logo Design',
      'Brand Identity',
      'Flyer Design',
      'Social Media Design',
      'Poster Design',
      'Packaging Design',
      'Business Card Design',
      'Banner Design',
      'Illustration',
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleModalCTA = () => {
    handleCloseModal();
    const contactForm = document.getElementById('contact');
    const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement | null;
    
    if (contactForm) {
      if (messageInput && selectedProject) {
        messageInput.value = `Hi Tobi, I saw your case study for "${selectedProject.title}" (${selectedProject.category}) and would love to hire you for a similar project! Let me know your availability.`;
      }
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactForm.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-blue font-mono underline decoration-accent-blue underline-offset-8 decoration-2">
            Featured Works
          </span>
          <h2 className="text-3xl md:text-6xl font-display font-black text-slate-900 tracking-tighter uppercase leading-[1.05] pt-3">
            Case Studies & Design Showcase
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Explore 15 of my professional design executions across multiple categories. Each slide represents a real business challenge solved through clean aesthetics, custom geometries, and conversion psychology.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-6 mb-12">
          {/* Search Input bar */}
          <div className="max-w-md mx-auto relative group">
            <Search className="w-5 h-5 absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent-blue transition-colors" />
            <input
              type="text"
              placeholder="Search design disciplines (e.g. logo, coffee, SaaS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4.5 py-3.5 bg-slate-50/60 hover:bg-slate-50 focus:bg-white text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            )}
          </div>

          {/* Categories Horizontal scroll tab list */}
          <div className="flex justify-center items-center">
            <div className="flex gap-2 max-w-full overflow-x-auto pb-4 pt-1.5 px-2 px-auto scrollbar-thin scrollbar-thumb-slate-200 no-scrollbar select-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                    }}
                    className={`px-4.5 py-2 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-150/50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    id={`project-card-${project.id}`}
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-150/60 shadow-sm hover:shadow-xl hover:border-slate-300/80 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
                    onClick={() => handleOpenModal(project)}
                  >
                    <div>
                      {/* Image Frame with crop / zoom */}
                      <div className="aspect-[4/3] bg-slate-50 overflow-hidden relative border-b border-slate-100">
                        {/* Red and blue gradient hover vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md shadow-sm border border-slate-100 z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 font-mono">
                            {project.category}
                          </span>
                        </div>

                        {/* Interactive hover scale image with no-referrer */}
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out object-center"
                        />
                      </div>

                      {/* Content Card details */}
                      <div className="p-6 space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-accent-blue font-semibold">
                          Client: {project.clientType}
                        </span>
                        <h3 className="font-display font-bold text-base md:text-lg text-slate-900 group-hover:text-accent-red transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-slate-50/50 flex justify-between items-center bg-slate-50/10">
                      <span className="text-xs font-semibold text-slate-800 flex items-center group-hover:text-accent-red transition-colors">
                        Read Case Study Case
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-accent-red group-hover:to-accent-blue flex items-center justify-center text-slate-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center text-slate-500 space-y-4 max-w-sm mx-auto"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 rounded-full mx-auto">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">No Projects Found</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Try adjusting your search criteria or choosing another graphic category.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-850 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* CASE STUDY DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-55 overflow-y-auto" role="dialog" aria-modal="true">
            {/* Backdrop Blur screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 relative z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden text-left flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
              >
                {/* Left Side: Mockup Frame */}
                <div className="md:w-1/2 bg-slate-50 relative min-h-[220px] md:min-h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover absolute inset-0 object-center select-none"
                  />
                  {/* Decorative badge card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white select-none hidden sm:block">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-accent-red font-bold">
                      Interactive Client Spotlight
                    </span>
                    <h4 className="text-xs font-bold leading-tight mt-1">{selectedProject.title}</h4>
                  </div>
                  {/* Category Stamp */}
                  <div className="absolute top-4 left-4 bg-slate-900 border border-slate-700/50 px-3.5 py-1.5 rounded-lg shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white font-mono">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Right Side: Case Study Metadata */}
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[calc(90vh-220px)] md:max-h-full">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2 relative">
                      <button
                        onClick={handleCloseModal}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-800 rounded-lg absolute -top-2 right-0 transition-colors cursor-pointer"
                        aria-label="Close case study details"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <div className="flex items-center space-x-2 text-xs font-semibold text-accent-blue font-mono">
                        <Users className="w-4 h-4" />
                        <span>Client Segment: {selectedProject.clientType}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 pr-10">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed italic">
                        "{selectedProject.description}"
                      </p>
                    </div>

                    {/* Objective */}
                    <div className="space-y-2 border-l-2 border-slate-300 pl-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center space-x-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>01. Core Challenge</span>
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {selectedProject.objective}
                      </p>
                    </div>

                    {/* Process */}
                    <div className="space-y-2 border-l-2 border-accent-blue/65 pl-4">
                      <h4 className="text-xs font-bold text-accent-blue uppercase tracking-widest font-mono flex items-center space-x-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>02. Design Process</span>
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {selectedProject.process}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="space-y-2 border-l-2 border-accent-red/65 pl-4">
                      <h4 className="text-xs font-bold text-accent-red uppercase tracking-widest font-mono flex items-center space-x-1.5">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>03. Business Result</span>
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                        {selectedProject.result}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic CTA Footer alignment */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleModalCTA}
                      className="flex-1 px-5 py-3 bg-gradient-to-r from-accent-red to-accent-blue text-white rounded-xl text-xs font-semibold tracking-wide hover:shadow-lg transition-all text-center cursor-pointer"
                    >
                      Hire Me for This Service
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="px-5 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer"
                    >
                      Close Details
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
