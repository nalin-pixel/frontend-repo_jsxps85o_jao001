import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Support</a>
        </div>
      </div>
    </footer>
  );
}
