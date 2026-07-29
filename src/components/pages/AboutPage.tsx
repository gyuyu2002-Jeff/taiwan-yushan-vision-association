import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { ABOUT_STORY } from '../../data/content';
import { PageId } from '../../types';
import { NextPageBanner } from '../NextPageBanner';

interface AboutPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
            <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
            <span>創會歷史與成立宗旨</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-serif-tc text-white">
            本會簡介
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            台灣玉山創見會於 {ABOUT_STORY.foundingYear} 由 {ABOUT_STORY.founderName} 發起成立，以玉山聖山精神為依歸，展現高瞻遠矚、生態保育與文創商機。
          </p>
        </div>
      </motion.section>

      {/* Main Story Narrative */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="editorial-card p-6 sm:p-10 space-y-8"
      >
        <div className="flex items-center space-x-3 border-b border-black/10 pb-4">
          <div className="w-10 h-10 bg-[#3D4F3F] text-white flex items-center justify-center font-bold text-lg font-serif shadow-md">
            玉
          </div>
          <div>
            <span className="editorial-badge text-[#3D4F3F]">ORIGIN & SPIRIT</span>
            <h2 className="text-2xl font-bold text-[#1C1C1C] font-serif-tc">緣起與立會精神</h2>
            <p className="text-xs text-[#1C1C1C]/60">發起人：{ABOUT_STORY.founderName} ({ABOUT_STORY.foundingYear})</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-[#1C1C1C] leading-relaxed text-base space-y-6">
          {ABOUT_STORY.mainParagraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-justify sm:text-left bg-[#F8F6F2] p-5 border-l-4 border-[#3D4F3F] text-[#1C1C1C] font-normal hover:border-emerald-700 transition-colors shadow-xs"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.section>

      {/* Next Page Banner */}
      <NextPageBanner
        badge="VISION & OUTLOOK"
        nextPageTitle="本會展望"
        description="了解本會獨立高瞻之願景與未來展望"
        buttonLabel="查看本會展望"
        targetPageId="missions"
        onNavigate={onNavigate}
      />
    </div>
  );
};

