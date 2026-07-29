import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Globe } from 'lucide-react';
import { ABOUT_STORY, OUTLOOK_TEXT } from '../../data/content';
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
        className="relative overflow-hidden bg-[#E7EBDD] text-[#1C1C1C] p-8 sm:p-12 shadow-2xl border border-[#3D4F3F]/15"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3D4F3F] border border-[#3D4F3F]/20">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>創會歷史與成立宗旨</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-serif-tc text-[#1C1C1C]">
            本會簡介
          </h1>

          <p className="text-base sm:text-lg text-[#1C1C1C]/75 leading-relaxed font-normal">
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

      {/* Next Page Banner */}
      <NextPageBanner
        badge="CORE BELIEFS"
        nextPageTitle="創會宗旨"
        description="深入了解四大核心宗旨與六大立會信念。"
        buttonLabel="查看創會宗旨"
        targetPageId="beliefs"
        onNavigate={onNavigate}
      />
    </div>
  );
};
