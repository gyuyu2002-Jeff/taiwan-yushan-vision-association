import React, { useState, useEffect } from 'react';
import { ArrowUp, Search, Layers, Check, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { MENU_ITEMS } from '../data/content';

interface FloatingToolsProps {
  activePage: PageId;
  onNavigate: (pageId: PageId) => void;
  onOpenSearch: () => void;
  onReplayIntro?: () => void;
}

export const FloatingTools: React.FC<FloatingToolsProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
  onReplayIntro,
}) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
      setShowTopBtn(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* Quick Navigation Popover */}
      {menuOpen && (
        <div className="bg-[#FFFFFF] border border-[#1C1C1C]/15 shadow-2xl rounded-xl p-3 w-64 space-y-1 mb-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
          <div className="px-3 py-1.5 border-b border-black/10 flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#3D4F3F] tracking-wider uppercase font-mono">
              快速頁面切換
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xs text-gray-400 hover:text-black"
            >
              ✕
            </button>
          </div>
          <div className="space-y-0.5 pt-1 max-h-[280px] overflow-y-auto">
            {MENU_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs font-bold rounded flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#3D4F3F] text-white'
                      : 'text-[#1C1C1C] hover:bg-[#F8F6F2] hover:text-[#3D4F3F]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.title}</span>
                  </span>
                  {isActive && <Check className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Action Buttons Cluster */}
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-black/10 shadow-lg text-[#1C1C1C]">
        {/* Replay Intro Splash Button */}
        {onReplayIntro && (
          <button
            onClick={onReplayIntro}
            className="p-2.5 rounded-full hover:bg-[#3D4F3F] hover:text-white transition-colors text-gray-700 focus:outline-none"
            title="播放開場動畫"
            aria-label="播放開場動畫"
          >
            <Sparkles className="w-4 h-4 text-amber-600 hover:text-amber-300" />
          </button>
        )}

        {/* Search Quick Button */}
        <button
          onClick={onOpenSearch}
          className="p-2.5 rounded-full hover:bg-[#3D4F3F] hover:text-white transition-colors text-gray-700 focus:outline-none"
          title="搜尋全站"
          aria-label="搜尋全站"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Quick Page Jump Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-2.5 rounded-full transition-colors focus:outline-none ${
            menuOpen
              ? 'bg-[#3D4F3F] text-white'
              : 'hover:bg-[#3D4F3F] hover:text-white text-gray-700'
          }`}
          title="快速切換頁面"
          aria-label="快速切換頁面"
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Scroll To Top Button with Circular Progress indicator */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="relative p-2.5 rounded-full bg-[#3D4F3F] text-white hover:bg-black transition-all shadow-md focus:outline-none flex items-center justify-center group"
            title="回到頂部"
            aria-label="回到頂部"
          >
            {/* SVG Progress Ring around button */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
              <circle
                cx="50%"
                cy="50%"
                r="18"
                className="stroke-white/20 fill-none"
                strokeWidth="2"
              />
              <circle
                cx="50%"
                cy="50%"
                r="18"
                className="stroke-emerald-400 fill-none transition-all duration-150"
                strokeWidth="2"
                strokeDasharray="113"
                strokeDashoffset={113 - (113 * scrollProgress) / 100}
              />
            </svg>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};

