import React, { useEffect, useRef } from 'react';

function useParallax(multiplier = 0.3) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      const y = window.scrollY * multiplier;
      node.style.transform = `translateY(${y}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [multiplier]);
  return ref;
}

export default function ParallaxShowcase() {
  const slow = useParallax(0.1);
  const mid = useParallax(0.2);
  const fast = useParallax(0.35);

  return (
    <section id="showcase" className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Parallax Showcase</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A subtle parallax collage highlighting different AI tool categories.</p>
        </div>
        <div className="relative h-[520px]">
          <div ref={slow} className="absolute left-0 top-10 w-72 h-48 rounded-3xl bg-gradient-to-br from-indigo-500/80 to-fuchsia-500/80 blur-[1px] shadow-2xl" />
          <div ref={mid} className="absolute right-10 top-20 w-80 h-56 rounded-3xl bg-white border border-slate-200 shadow-xl p-6">
            <h3 className="font-medium text-slate-900 mb-2">Chat + Voice</h3>
            <p className="text-sm text-slate-600">Real-time assistants that listen, think, and respond with lifelike speech.</p>
          </div>
          <div ref={fast} className="absolute left-10 bottom-0 w-[28rem] h-64 rounded-3xl bg-white border border-slate-200 shadow-xl p-6">
            <h3 className="font-medium text-slate-900 mb-2">Vision + Images</h3>
            <p className="text-sm text-slate-600">Generate, edit, and understand images with high fidelity models.</p>
          </div>
          <div ref={mid} className="absolute right-0 bottom-6 w-72 h-48 rounded-3xl bg-gradient-to-br from-amber-400/80 to-pink-500/80 blur-[1px] shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
