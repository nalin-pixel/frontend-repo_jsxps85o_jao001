import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
          <div className="h-8 w-8 grid place-items-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
            <Rocket size={16} />
          </div>
          <span className="tracking-tight">AI Tools Hub</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#tools" className="hover:text-slate-900 transition-colors">Tools</a>
          <a href="#showcase" className="hover:text-slate-900 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <a href="#tools" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-md hover:shadow-lg transition-all">
          <Sparkles size={16} />
          Try Now
        </a>
      </div>
    </header>
  );
}
