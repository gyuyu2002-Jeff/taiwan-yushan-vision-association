import React from 'react';
import { motion } from 'motion/react';
import { Compass, Globe } from 'lucide-react';
import { OUTLOOK_TEXT } from '../../data/content';
import { PageId } from '../../types';
import { NextPageBanner } from '../NextPageBanner';

interface MissionsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const MissionsPage: React.FC<MissionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-[#1C1C1C] text-[#F8F6F2] p-8 sm:p-12 shadow-2xl border border-black/10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8F6F2] border border-white/20">
            <Compass className="w-3.5 h-3.5 text-emerald-300" />
            <span>願景與展望</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-serif-tc text-white">
            本會展望
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            以玉山獨立高瞻之精神開創台灣前景，實踐本土認同、環保生態與文創產業榮景。
          </p>
        </div>
      </motion.section>

      {/* Outlook Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="editorial-card-dark p-8 sm:p-12 space-y-4 shadow-xl"
      >
        <div className="flex items-center space-x-3 text-emerald-300">
          <Globe className="w-6 h-6" />
          <span className="editorial-badge text-emerald-300">OUTLOOK</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif-tc">本會展望 (Outlook)</h2>
        <p className="text-base sm:text-xl font-normal text-white/90 leading-relaxed max-w-3xl font-serif-tc">
          「{OUTLOOK_TEXT}」
        </p>
      </motion.section>

      {/* Link to Beliefs */}
      <NextPageBanner
        badge="CORE BELIEFS"
        nextPageTitle="創會宗旨"
        description="細讀四大宗旨與六大信念全文說明"
        buttonLabel="查看創會宗旨"
        targetPageId="beliefs"
        onNavigate={onNavigate}
      />
    </div>
  );
};

