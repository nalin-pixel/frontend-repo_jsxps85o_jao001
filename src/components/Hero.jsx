import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1020] via-[#0f0b20] to-[#1b0e1f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25)_0%,rgba(17,24,39,0.0)_60%)]" />

      <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 animate-pulse" />
          Futuristic AI Tools • Minimal, Fast, Beautiful
        </div>
        <h1 className="font-semibold text-4xl md:text-6xl leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Build with the next wave of AI tools
        </h1>
        <p className="mt-5 text-white/70 max-w-2xl mx-auto">
          Explore a curated set of AI utilities — from text and image generation to audio, code, and automation. Responsive, fast, and delightful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#tools" className="pointer-events-auto inline-flex justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition">Explore Tools</a>
          <a href="#showcase" className="pointer-events-auto inline-flex justify-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-medium border border-white/15 hover:bg-white/15 transition">Live Demos</a>
        </div>
      </div>
    </section>
  );
}
