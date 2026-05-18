import { useEffect, useState } from 'react';
import init, { get_greeting } from '../src-rust/pkg/core_wasm.js';
import './index.css';

function App() {
  const [wasmMessage, setWasmMessage] = useState('Loading Wasm...');

  useEffect(() => {
    init().then(() => {
      const greeting = get_greeting();
      setWasmMessage(greeting);
    }).catch((err) => {
      console.error("Failed to load Wasm:", err);
      setWasmMessage("Error loading Wasm module");
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. NAVIGATION HEADER */}
      <nav className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">
            A&G<span className="text-gold">.</span> Brand Consultants
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300">Services</a>
            <a href="#approach" className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300">Our Approach</a>
            <a href="#team" className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300">Team</a>
            <a href="#contact" className="px-6 py-2 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO BANNER SECTION */}
      <section className="relative flex flex-col justify-center min-h-[85vh] px-6 py-20 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Big Agency Thinking.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Built for Startups.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed mb-12 max-w-3xl">
            We combine the creative depth of veteran agency leaders with the practical execution of seasoned entrepreneurs. We build brand systems, design identities, and launch campaigns directly with founders—with zero junior teams and zero agency bloat.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a href="#services" className="px-8 py-4 bg-white text-neutral-900 font-bold text-center uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300">
              Explore Our Services
            </a>
            <a href="#contact" className="px-8 py-4 border border-neutral-600 text-white font-bold text-center uppercase tracking-widest hover:border-white transition-colors duration-300">
              Book a Strategic Consultation
            </a>
          </div>
          <p className="text-sm text-neutral-500 uppercase tracking-widest leading-loose">
            Managed by leaders who have spent 20+ years at top-tier global networks like WPP and Publicis, shaping over 50 diverse brands and winning 75+ international creative awards.
          </p>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="bg-neutral-950 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-neutral-400 max-w-2xl">Design-first solutions built to help early-stage and growing ventures scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">Core Brand Identity & Design Systems</h3>
              <p className="text-neutral-400 leading-relaxed">Comprehensive visual architecture built from scratch or refined for your next growth stage. Deliverables include core brand marks, custom logos, typography rules, color palettes, and integrated visual brand guidelines.</p>
            </div>
            {/* Card 2 */}
            <div className="border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">Product, Menu & Packaging Design</h3>
              <p className="text-neutral-400 leading-relaxed">Specialized design systems for physical products, retail presentation, and functional layouts. Creating consumer touchpoints optimized for both physical environments and digital storefronts.</p>
            </div>
            {/* Card 3 */}
            <div className="border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">Visual Comm. & Integrated Campaigns</h3>
              <p className="text-neutral-400 leading-relaxed">High-impact creative execution designed to solve real-world customer acquisition problems. Complete design suites tailored for digital-first media, performance ads, print, and major outdoor brand activations.</p>
            </div>
            {/* Card 4 */}
            <div className="border border-neutral-800 p-10 hover:border-gold transition-colors duration-500 group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">Brand Narrative & Digital Content</h3>
              <p className="text-neutral-400 leading-relaxed">Content strategies that shift your brand voice from a functional product description to a compelling story that builds audience loyalty. Development of multi-channel digital content, video assets, and foundational marketing materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS & BUSINESS IMPACT SECTION */}
      <section id="approach" className="py-32 px-6 bg-neutral-900 border-t border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Growth Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-neutral-800/30 border-l-4 border-gold">
              <p className="text-2xl font-light italic leading-relaxed mb-8 text-neutral-300">"They skipped the typical agency onboarding process and rebuilt our visual identity to match our growth ambitions. The new brand system directly supported our transition from a local startup to a national presence."</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gold">— Founder & CEO, Consumer Retail Venture</p>
            </div>
            <div className="p-12 bg-neutral-800/30 border-l-4 border-gold">
              <p className="text-2xl font-light italic leading-relaxed mb-8 text-neutral-300">"Working directly with senior creatives who understand business metrics saved us months of trial and error. Our landing page conversions and ad creative performance improved almost immediately."</p>
              <p className="text-sm font-bold uppercase tracking-widest text-gold">— VP of Marketing, Series A Technology Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section id="team" className="py-32 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Partners</h2>
            <p className="text-xl text-neutral-400 max-w-3xl">The people who build your strategy are the exact same individuals who execute the work.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Partner 1 */}
            <div className="border border-neutral-800 p-12">
              <h3 className="text-3xl font-bold mb-2">Ashu <span className="text-xl text-neutral-500 font-normal">(Shailender Mahajan)</span></h3>
              <p className="text-gold uppercase tracking-widest text-sm mb-10">Creative & Design Lead</p>
              
              <ul className="space-y-6 text-neutral-400">
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Background:</strong> Spent over two decades as an Executive Creative Director at premier global advertising networks, including Ogilvy.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Track Record:</strong> Directed the creative vision for over 50 diverse brands, managing multi-member creative teams and earning more than 75 national and international awards for creative effectiveness.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Focus:</strong> Oversees all design-first solutions, visual communication systems, and brand packaging architectures.</span>
                </li>
              </ul>
            </div>

            {/* Partner 2 */}
            <div className="border border-neutral-800 p-12">
              <h3 className="text-3xl font-bold mb-2">Gaveesh Jain</h3>
              <p className="text-gold uppercase tracking-widest text-sm mb-10">Strategy & Growth Lead</p>
              
              <ul className="space-y-6 text-neutral-400">
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Background:</strong> Seasoned entrepreneur and strategist who has founded, operated, and successfully scaled multiple startup ventures across technological and consumer markets.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Track Record:</strong> Deep hands-on experience navigating the precise challenges of seed-stage incubation, product-market fit, capital modeling, and early growth constraints.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Focus:</strong> Aligns all creative briefs with operational realities, investor expectations, and unit economics.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Full-Width Row Below Partners */}
          <div className="bg-neutral-900 p-12 md:p-16 border border-neutral-800 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">Our Empanelled Expert Network</h3>
            <p className="text-lg text-neutral-400 leading-relaxed">
              We do not use junior account managers or generalist staff. For specialized execution needs—such as advanced animation, technical development, copy-heavy strategy, or high-end video production—we tap into our pre-vetted network of independent senior professionals. Every external specialist is hand-selected and directly managed by Ashu and Gaveesh, ensuring your startup receives top-tier agency quality without the structural overhead.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FOOTER / FINAL CALL TO ACTION */}
      <footer id="contact" className="bg-white text-neutral-900">
        <div className="max-w-4xl mx-auto py-32 px-6 text-center border-b border-neutral-200">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Ready to build an investor-ready brand?</h2>
          <p className="text-2xl text-neutral-600 mb-12">Let’s skip the pitch meetings and discuss your business goals directly.</p>
          <button className="px-10 py-5 bg-neutral-900 text-white font-bold text-center uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300 w-full sm:w-auto">
            Schedule a Briefing Call
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-medium text-neutral-500">
            © 2026 A&G Brand Consultants. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#services" className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-gold transition-colors">Services</a>
            <a href="#approach" className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-gold transition-colors">Our Approach</a>
            <a href="#team" className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-gold transition-colors">Team</a>
          </div>
        </div>
        <div className="bg-neutral-100 py-2 text-center text-xs text-neutral-400">
          Wasm Core Status: {wasmMessage}
        </div>
      </footer>
    </div>
  );
}

export default App;
