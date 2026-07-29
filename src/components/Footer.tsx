import React from 'react';
import { ArrowUp, Heart, Facebook, Youtube, Mail } from 'lucide-react';
import { PageId } from '../types';
import { SITE_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1C] text-[#F8F6F2] pt-16 pb-12 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand Logo & Title Header */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3D4F3F] flex items-center justify-center text-white font-bold text-lg font-serif">
                玉
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif-tc tracking-tight">
                  {SITE_INFO.title}
                </h3>
                {SITE_INFO.subtitle && (
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-[0.2em]">{SITE_INFO.subtitle}</p>
                )}
              </div>
            </div>
            <p className="text-xs text-white/60 max-w-sm">
              認同台灣 ‧ 環保生態 ‧ 文創商機 ‧ 文化推廣
            </p>
          </div>

          {/* FB / YT / Email Links */}
          <div className="w-full md:max-w-md space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-2">
              聯絡與社群 ‧ CONTACT & SOCIAL
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {/* FB Link */}
              <a
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold group"
              >
                <div className="w-7 h-7 rounded bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:scale-110 transition-transform shrink-0">
                  <Facebook className="w-4 h-4 fill-[#1877F2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-white/50 uppercase tracking-wider font-mono">Facebook</span>
                  <span className="truncate text-xs">FB 粉絲專頁</span>
                </div>
              </a>

              {/* YT Link */}
              <a
                href={SITE_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold group"
              >
                <div className="w-7 h-7 rounded bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] group-hover:scale-110 transition-transform shrink-0">
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-white/50 uppercase tracking-wider font-mono">YouTube</span>
                  <span className="truncate text-xs">YT 頻道</span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-3 p-2.5 rounded bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold group"
              >
                <div className="w-7 h-7 rounded bg-[#3D4F3F] flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-white/50 uppercase tracking-wider font-mono">Email</span>
                  <span className="truncate text-xs">{SITE_INFO.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {SITE_INFO.title}. 保留所有權利。</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 text-white/70">
              以 <Heart className="w-3.5 h-3.5 text-emerald-400 inline fill-emerald-400" /> 打造現代化回應式體驗
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-[#3D4F3F] text-white transition-colors flex items-center gap-1 uppercase text-[10px] font-bold tracking-widest"
              title="回到頂部"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
