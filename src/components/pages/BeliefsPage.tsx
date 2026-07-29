import React from 'react';
import { motion } from 'motion/react';
import {
  HeartHandshake,
  Landmark,
  Trees,
  Sparkles,
  Palette,
  MapPin,
  Leaf,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { PURPOSES, BELIEFS } from '../../data/content';
import { PageId } from '../../types';
import { NextPageBanner } from '../NextPageBanner';

const PURPOSE_ICONS: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6 text-emerald-600" />,
  Trees: <Trees className="w-6 h-6 text-emerald-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-600" />,
  Palette: <Palette className="w-6 h-6 text-emerald-600" />,
};

const BELIEF_ICONS: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-5 h-5 text-emerald-700" />,
  Leaf: <Leaf className="w-5 h-5 text-emerald-700" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-700" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
  Handshake: <Handshake className="w-5 h-5 text-emerald-700" />,
  Heart: <Heart className="w-5 h-5 text-emerald-700" />,
};

interface BeliefsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const BeliefsPage: React.FC<BeliefsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Page Header Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-[#3D4F3F] text-[#F8F6F2] p-8 sm:p-12 shadow-2xl border border-black/10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8F6F2] border border-white/20">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-300" />
            <span>核心價值精神</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-serif-tc text-white">
            創會宗旨
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            以「認同台灣、環保生態、文創商機、文化推廣」為核心宗旨，貫徹六大立會信念，凝聚社會共識，弘揚聖山玉山獨立崇高精神。
          </p>

        </div>
      </motion.section>

      {/* Section 1: 四大宗旨 (Purposes) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black/10 pb-4 gap-2">
          <div>
            <span className="editorial-badge text-[#3D4F3F] block mb-1">
              CORE PURPOSES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-tc">
              四大宗旨（推動方針）
            </h2>
          </div>
          <p className="text-xs text-[#1C1C1C]/60 max-w-sm">
            記載於原網頁，包含本土認同、永續生態、文創商機及文化藝術維護。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PURPOSES.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group editorial-card p-6 sm:p-8 hover:border-[#3D4F3F] transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-[#F8F6F2] border border-black/10 flex items-center justify-center group-hover:bg-[#3D4F3F] group-hover:text-white transition-colors">
                    {PURPOSE_ICONS[item.icon]}
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold font-serif text-black/15 group-hover:text-[#3D4F3F]/30 transition-colors">
                    0{item.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1C] font-serif-tc group-hover:text-[#3D4F3F] transition-colors">
                  {item.number}、{item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1C1C1C]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-black/10 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-[#F8F6F2] text-[#1C1C1C] px-2.5 py-1 border border-black/10 group-hover:border-[#3D4F3F] transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#3D4F3F]" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 2: 六大信念 (Beliefs) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="space-y-6 pt-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black/10 pb-4 gap-2">
          <div>
            <span className="editorial-badge text-[#3D4F3F] block mb-1">
              SIX CORE BELIEFS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-tc">
              六大信念
            </h2>
          </div>
          <p className="text-xs text-[#1C1C1C]/60 max-w-sm">
            貫徹本會六大核心信念與實踐精神。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BELIEFS.map((belief, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              translate="no"
              className="editorial-card p-6 hover:border-[#3D4F3F] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border relative notranslate flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 font-serif font-bold text-sm flex items-center justify-center bg-[#3D4F3F] text-white">
                    {belief.numeral}
                  </span>
                  <div className="p-2 bg-[#F8F6F2] text-[#3D4F3F]">
                    {BELIEF_ICONS[belief.icon]}
                  </div>
                </div>

                <h3
                  translate="no"
                  className="text-lg sm:text-xl font-bold font-serif-tc mb-1 text-[#1C1C1C] notranslate"
                >
                  {belief.numeral}、{belief.title}
                </h3>

                <p className="editorial-badge mb-3 text-[#3D4F3F]">
                  {belief.subtitle}
                </p>

                <p className="text-xs leading-relaxed text-[#1C1C1C]/80">
                  {belief.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Next Page Banner */}
      <NextPageBanner
        badge="ASSOCIATION FLAG"
        nextPageTitle="本會會旗"
        description="了解玉山創見會會旗設計與視覺象徵意涵"
        buttonLabel="查看本會會旗"
        targetPageId="flag"
        onNavigate={onNavigate}
      />
    </div>
  );
};
