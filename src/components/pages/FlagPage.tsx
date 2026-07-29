import React from 'react';
import { motion } from 'motion/react';
import { Flag, ShieldCheck, Sparkles } from 'lucide-react';
import { FLAG_INFO, SITE_INFO } from '../../data/content';
import { PageId } from '../../types';
import { NextPageBanner } from '../NextPageBanner';

interface FlagPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const FlagPage: React.FC<FlagPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Banner */}
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
            <Flag className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
            <span>精神圖騰標誌</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-serif-tc text-white">
            本會會旗
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            社團法人台灣玉山創見會官方精神會旗，象徵聖山高聳挺拔、綠色生態永續與創見創富精神。
          </p>
        </div>
      </motion.section>

      {/* Flag Display Card */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="editorial-card p-6 sm:p-10 space-y-8"
      >
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <span className="editorial-badge text-[#3D4F3F]">OFFICIAL EMBLEM & FLAG</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-tc">
              {SITE_INFO.title} 官方會旗
            </h2>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/70 max-w-none mx-auto lg:whitespace-nowrap">
              金黃底色象徵大地豐盛與光明，中央藍天圓徽融合聖山玉山、旭日初升、金色月舟與歡喜笑臉。
            </p>
          </div>

          {/* Original Flag Image Display */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-8 bg-[#F8F6F2] border border-black/10 shadow-md rounded-none group"
          >
            <div className="max-w-2xl mx-auto overflow-hidden shadow-2xl border border-black/10 group-hover:shadow-2xl transition-shadow duration-300">
              <img
                src={FLAG_INFO.imageUrl}
                alt={FLAG_INFO.title}
                className="w-full h-auto block object-cover select-none"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-[#1C1C1C]/70 font-bold uppercase tracking-wider font-serif-tc">
              <Sparkles className="w-3.5 h-3.5 text-[#3D4F3F]" />
              <span>官方會旗原貌典藏存檔</span>
            </div>
          </motion.div>
        </div>

        {/* Flag Meanings Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-black/10">
          {FLAG_INFO.meaning.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#F8F6F2] p-6 border border-black/10 space-y-3 hover:border-[#3D4F3F] hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-[#3D4F3F] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#1C1C1C] text-lg font-serif-tc">{item.title}</h3>
              <p className="text-xs text-[#1C1C1C]/80 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Next Page Banner */}
      <NextPageBanner
        badge="ORGANIZATION"
        nextPageTitle="本會組織"
        description="認識總會、桃園分會與高雄分會架構團隊"
        buttonLabel="查看本會組織"
        targetPageId="organization"
        onNavigate={onNavigate}
      />
    </div>
  );
};
