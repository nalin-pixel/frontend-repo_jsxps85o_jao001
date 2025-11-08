import React from 'react';
import { Mic, Image as ImageIcon, Code2, MessageSquare, Wand2, Music, Bot } from 'lucide-react';

const tools = [
  { icon: Bot, title: 'Chat Assistant', desc: 'Conversational AI with memory and function calling.' },
  { icon: Mic, title: 'Voice Agent', desc: 'Real-time speech-to-speech AI with natural prosody.' },
  { icon: ImageIcon, title: 'Image Generator', desc: 'High-fidelity, prompt-based image synthesis.' },
  { icon: Code2, title: 'Code Copilot', desc: 'Pair-programming assistant for your IDE and CLI.' },
  { icon: Music, title: 'Audio Studio', desc: 'Generate stems, loops, and voice with AI.' },
  { icon: Wand2, title: 'Automation', desc: 'Connect APIs and orchestrate workflows visually.' },
  { icon: MessageSquare, title: 'Summarizer', desc: 'Condense long documents into crisp insights.' },
];

export default function ToolsGrid() {
  return (
    <section id="tools" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Curated AI Toolkit</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A selection of production-ready AI utilities. Each optimized for speed, quality, and simplicity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
                  <Icon size={18} />
                </div>
                <h3 className="font-medium text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-indigo-600">
                <span className="group-hover:translate-x-0.5 transition">Try it</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2 h-64 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,0.25)_0%,transparent_70%)]" />
    </section>
  );
}
