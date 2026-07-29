import React, { useState } from 'react';
import {
  Menu,
  X,
  Search,
  BookOpen,
  HeartHandshake,
  Flag,
  Users,
  Home,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Mountain,
} from 'lucide-react';
import { PageId, MenuItem } from '../types';
import { MENU_ITEMS, SITE_INFO, YUSHAN_HERO_IMAGE } from '../data/content';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (pageId: PageId) => void;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onViewModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenSearch: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  HeartHandshake: <HeartHandshake className="w-4 h-4" />,
  Flag: <Flag className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
};

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  viewMode,
  onViewModeChange,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-black/10 shadow-xs">
      {/* Top domain badge bar */}
      <div className="bg-[#3D4F3F] text-[#F8F6F2] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded text-[11px] font-mono text-emerald-100">
              <Mountain className="w-3 h-3 text-emerald-200" />
              {SITE_INFO.domain}
            </span>
            <span className="hidden md:inline text-white/80 text-[11px] font-serif italic tracking-wide">
              {SITE_INFO.slogan}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Device Responsive Simulation Switcher */}
            <div className="flex items-center bg-black/30 rounded-lg p-0.5 border border-white/20">
              <button
                onClick={() => onViewModeChange('desktop')}
                title="桌上型電腦檢視"
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'desktop'
                    ? 'bg-white text-[#3D4F3F] font-bold shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onViewModeChange('tablet')}
                title="平板電腦檢視"
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'tablet'
                    ? 'bg-white text-[#3D4F3F] font-bold shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onViewModeChange('mobile')}
                title="行動裝置手機檢視"
                className={`p-1 rounded text-xs transition-all ${
                  viewMode === 'mobile'
                    ? 'bg-white text-[#3D4F3F] font-bold shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={SITE_INFO.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] text-white/90 hover:text-white transition-colors uppercase tracking-widest font-bold"
            >
              原本Weebly網站
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Association Title */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center space-x-3 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#C5A059] overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0 bg-[#0d1710]">
              <img
                src={YUSHAN_HERO_IMAGE}
                alt="玉山主峰"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-[#1C1C1C] font-serif-tc group-hover:text-[#3D4F3F] transition-colors">
                {SITE_INFO.title}
              </span>
              {SITE_INFO.subtitle && (
                <span className="block text-[10px] text-[#1C1C1C]/60 font-bold uppercase tracking-[0.2em]">
                  {SITE_INFO.subtitle}
                </span>
              )}
            </div>
          </button>

          {/* Header Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {MENU_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center space-x-1.5 px-2.5 lg:px-3.5 py-1.5 lg:py-2 text-xs font-bold transition-all whitespace-nowrap rounded ${
                    isActive
                      ? 'bg-[#3D4F3F] text-white shadow-xs font-extrabold'
                      : 'text-[#1C1C1C]/80 hover:text-[#3D4F3F] hover:bg-black/5'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-[#3D4F3F]'}>
                    {ICON_MAP[item.iconName]}
                  </span>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#1C1C1C]/70 hover:text-[#3D4F3F] hover:bg-black/5 rounded transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              title="搜尋會務與內容"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">搜尋</span>
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1C1C1C] hover:text-[#3D4F3F] hover:bg-black/5 rounded transition-colors focus:outline-hidden min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="選單按鈕"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Sub-Header Navigation Tabs Bar */}
      <div className="md:hidden bg-[#EFECE6] border-t border-b border-black/10 px-3 py-1.5 overflow-x-auto flex items-center space-x-1.5 whitespace-nowrap scrollbar-none">
        {MENU_ITEMS.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex items-center space-x-1 px-3 py-1.5 text-xs font-bold transition-all shrink-0 rounded ${
                isActive
                  ? 'bg-[#3D4F3F] text-white shadow-xs'
                  : 'text-[#1C1C1C]/80 hover:bg-black/5'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-[#3D4F3F]'}>
                {ICON_MAP[item.iconName]}
              </span>
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F6F2] border-b border-black/10 px-4 pt-2 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-bold text-[#1C1C1C]/50 uppercase tracking-[0.2em] px-3 py-2 border-b border-black/5 mb-2">
            選單導覽 ‧ MENU
          </div>
          {MENU_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold tracking-wider transition-all min-h-[48px] border-b border-black/5 ${
                  isActive
                    ? 'bg-[#3D4F3F] text-white'
                    : 'text-[#1C1C1C] hover:bg-black/5'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={isActive ? 'text-white' : 'text-[#3D4F3F]'}>
                    {ICON_MAP[item.iconName]}
                  </span>
                  <span>{item.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
