import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface NextPageBannerProps {
  badge?: string;
  nextPageTitle: string;
  description: string;
  buttonLabel?: string;
  targetPageId: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const NextPageBanner: React.FC<NextPageBannerProps> = ({
  badge = 'NEXT SECTION',
  nextPageTitle,
  description,
  buttonLabel,
  targetPageId,
  onNavigate,
}) => {
  return (
    <div className="flex justify-between items-center bg-[#3D4F3F] text-white p-6 sm:p-8 border border-black/10 flex-wrap gap-4 shadow-sm">
      <div className="space-y-1">
        <span className="editorial-badge text-emerald-200">{badge}</span>
        <h4 className="font-bold text-white text-lg sm:text-xl font-serif-tc">
          前往：{nextPageTitle}
        </h4>
        <p className="text-xs sm:text-sm text-white/80">{description}</p>
      </div>
      <button
        onClick={() => {
          onNavigate(targetPageId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="px-5 py-3 bg-white text-[#3D4F3F] hover:bg-[#1C1C1C] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer"
      >
        <span>{buttonLabel || `查看${nextPageTitle}`}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
