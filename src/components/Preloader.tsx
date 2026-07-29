import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { YUSHAN_HERO_IMAGE } from '../data/content';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'peak' | 'done'>('peak');

  const handleFinish = () => {
    setPhase('done');
    if (onComplete) onComplete();
  };

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#070b09] text-[#F8F6F2] flex items-center justify-center select-none">
      <AnimatePresence>
        <motion.div
          key="peak-phase"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#0a120c]"
        >
          {/* Authentic High Definition Yushan Peak Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              initial={{ scale: 1.18, filter: 'brightness(0.75) contrast(1.12)' }}
              animate={{ scale: 1.02, filter: 'brightness(0.95) contrast(1.12)' }}
              transition={{ duration: 10, ease: 'easeOut' }}
              src={YUSHAN_HERO_IMAGE}
              alt="玉山主峰壯麗夕照"
              className="w-full h-full object-cover object-center"
            />

            {/* Slow, Elegant Golden Sunlight Sweeping Ray Effect (Runs Once) */}
            <motion.div
              initial={{ x: '-150%', opacity: 0 }}
              animate={{
                x: ['-150%', '150%'],
                opacity: [0, 0.85, 0.9, 0.6, 0],
              }}
              transition={{
                duration: 6.0,
                delay: 0.3,
                ease: [0.3, 0, 0.2, 1],
              }}
              className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-amber-300/60 via-yellow-100/80 to-transparent blur-2xl transform skew-x-12 pointer-events-none"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1710] via-[#0d1710]/40 to-amber-500/10" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-200/20 to-transparent pointer-events-none" />
          </div>

          {/* Golden Crest Line & Title Block */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            {/* Main Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 border border-[#C5A059]/60 rounded-full text-xs font-bold text-amber-200 tracking-widest uppercase shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>玉山頂峰 ‧ 曙光重現</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white font-serif-tc tracking-widest drop-shadow-lg">
                台灣玉山創見會
              </h1>

              <p className="text-xs sm:text-sm text-emerald-100 font-mono tracking-[0.25em] uppercase max-w-lg mx-auto drop-shadow-md">
                以玉山獨立高瞻之精神 ‧ 開創台灣前程新局
              </p>
            </motion.div>

            {/* Action Button to enter site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-2 flex items-center justify-center gap-4"
            >
              <button
                onClick={handleFinish}
                className="group px-9 py-4 bg-gradient-to-r from-[#3D4F3F] to-[#28382A] hover:from-black hover:to-[#3D4F3F] text-white font-bold text-xs uppercase tracking-widest border border-[#C5A059]/80 shadow-2xl flex items-center gap-3 transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>開啟創見視野</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Skip Button */}
          <button
            onClick={handleFinish}
            className="absolute bottom-6 right-6 z-20 text-[11px] text-white/70 hover:text-white underline font-mono tracking-wider transition-colors cursor-pointer"
          >
            進入網站 ✕
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
