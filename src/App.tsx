/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen bg-white text-slate-800 antialiased font-sans select-text">
      {/* Sticky navigation header */}
      <Navbar />

      {/* Main Single-page Layout Flow */}
      <main id="portfolio-content-main">
        {/* Welcome section with custom visual graphics */}
        <Hero />

        {/* Story tell, metric counts, and professional stack indicators */}
        <AboutMe />

        {/* 15 projects filterable case studies grid list */}
        <Portfolio />

        {/* Core graphic design service lists detailed in clear visual cards */}
        <HireMe />

        {/* Contact briefs capture with direct shortcuts to Wa, Link, Mail */}
        <Contact />
      </main>

      {/* Modern custom dark information footer */}
      <Footer />
    </div>
  );
}
