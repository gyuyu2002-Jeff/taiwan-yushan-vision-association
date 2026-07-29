import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Maximize2,
  X,
} from 'lucide-react';
import { PageId } from '../../types';
import { SITE_INFO, GALLERY_ITEMS, YUSHAN_HERO_IMAGE } from '../../data/content';
import { NextPageBanner } from '../NextPageBanner';

const GALLERY_LABELS = ['集會活動', '總會活動', '環保生態', '會務餐會', '商機交流', '機關拜訪'];

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section - Editorial Banner with Diagonal Color Blocks & Skew Masking */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden bg-[#1C1C1C] text-[#F8F6F2] min-h-[480px] flex items-center shadow-2xl border border-black/10 group"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)',
        }}
      >
        {/* Background Overlay with Vivid Golden Sunset Yushan Peak */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={YUSHAN_HERO_IMAGE}
            alt="玉山主峰金黃夕照"
            className="w-full h-full object-cover object-center opacity-75 scale-105 filter brightness-95 contrast-110 group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          {/* Subtle Ambient Color Glow Overlays */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/20 -rotate-12 transform blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C5A059]/30 rotate-12 transform blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1710] via-[#0d1710]/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-14 sm:p-20 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#F8F6F2] border border-[#C5A059]/50 shadow-xl rounded-full"
          >
            <div className="w-5 h-5 rounded-full border border-[#C5A059] overflow-hidden shrink-0 shadow-xs">
              <img src={YUSHAN_HERO_IMAGE} alt="玉山小圖" className="w-full h-full object-cover object-center" />
            </div>
            <span>{SITE_INFO.slogan}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-6xl font-black tracking-tight leading-tight text-white font-serif-tc drop-shadow-md"
          >
            {SITE_INFO.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-normal leading-relaxed space-y-1"
          >
            {SITE_INFO.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 bg-[#3D4F3F] hover:bg-black text-white font-bold tracking-wider uppercase text-xs transition-all border border-white/20 shadow-lg flex items-center gap-2 min-h-[48px] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-amber-200" />
              <span>創會緣起與簡介</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Activity Photo Gallery (Original Weebly Uploads) with Scroll Trigger */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black/10 pb-4 gap-2">
          <div>
            <span className="editorial-badge text-[#3D4F3F] block mb-1">
              ACTIVITY GALLERY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-serif-tc">
              會務與活動剪影
            </h3>
          </div>
          <p className="text-xs text-[#1C1C1C]/60 max-w-sm">
            記載於原 Weebly 網站之活動紀錄照片與會友交流剪影。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveImage(item.imageUrl)}
              className="group editorial-card hover:border-[#3D4F3F] transition-all duration-300 overflow-hidden cursor-pointer relative aspect-4/3 bg-[#F8F6F2] hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title || '活動照片'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2.5 bg-white text-[#1C1C1C] rounded-full shadow-lg flex items-center gap-2 text-xs font-bold transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-4 h-4 text-[#3D4F3F]" />
                  <span>點擊放大相片</span>
                </div>
              </div>
              <span className="absolute top-3 left-3 bg-[#3D4F3F] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-xs">
                {GALLERY_LABELS[index]}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Advance to Next Page Banner */}
      <NextPageBanner
        badge="ABOUT US"
        nextPageTitle="本會簡介"
        description="了解創會起源、發展歷程與核心價值"
        buttonLabel="查看本會簡介"
        targetPageId="about"
        onNavigate={onNavigate}
      />

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden border border-white/20">
            <img
              src={activeImage}
              alt="放大相片"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2 bg-black hover:bg-[#3D4F3F] text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
