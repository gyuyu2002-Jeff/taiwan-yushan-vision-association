import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Coffee,
  Activity,
  Target,
  Music,
  Mountain,
  Smile,
  Drum,
  Sparkle,
  Briefcase,
  Search,
  Building,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ORGANIZATION_DATA } from '../../data/content';
import { PageId } from '../../types';
import { NextPageBanner } from '../NextPageBanner';

const COMMITTEE_ICONS: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-emerald-600" />,
  Activity: <Activity className="w-5 h-5 text-emerald-600" />,
  Target: <Target className="w-5 h-5 text-emerald-600" />,
  Music: <Music className="w-5 h-5 text-emerald-600" />,
  Mountain: <Mountain className="w-5 h-5 text-emerald-600" />,
  Smile: <Smile className="w-5 h-5 text-emerald-600" />,
  Drum: <Drum className="w-5 h-5 text-emerald-600" />,
  Sparkle: <Sparkle className="w-5 h-5 text-emerald-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-emerald-600" />,
};

interface OrganizationPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const OrganizationPage: React.FC<OrganizationPageProps> = ({ onNavigate }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string>('一、總會');

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
            <Users className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
            <span>組織架構與分會</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-serif-tc text-white">
            本會組織
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            總會下設九大專業委員會與特設團隊，並於桃園及高雄設立分會，推動跨界交流與服務。
          </p>
        </div>
      </motion.section>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="editorial-card p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
      >
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-3" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="搜尋委員會名稱或關鍵字（例：茶道、創富、青年）..."
            className="w-full pl-10 pr-4 py-2 bg-[#F8F6F2] border border-black/10 text-xs font-bold focus:outline-hidden focus:border-[#3D4F3F] transition-colors"
          />
        </div>
        <p className="text-xs text-[#1C1C1C]/60 font-mono">
          包含：總會 9 大委員會/團隊、桃園分會、高雄分會
        </p>
      </motion.div>

      {/* Organization Groups */}
      <div className="space-y-8">
        {ORGANIZATION_DATA.map((group, groupIdx) => {
          const isExpanded = expandedSection === group.region || !!filterQuery;

          // Filter committees if search query exists
          const filteredCommittees = group.committees?.filter((c) =>
            filterQuery
              ? c.name.includes(filterQuery) || c.description.includes(filterQuery)
              : true
          );

          if (filterQuery && group.committees && filteredCommittees?.length === 0) {
            return null;
          }

          return (
            <motion.div
              key={group.region}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="editorial-card overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setExpandedSection(isExpanded ? '' : group.region)
                }
                className="w-full p-6 sm:p-8 bg-[#F8F6F2] hover:bg-black/5 flex items-center justify-between text-left transition-colors border-b border-black/10 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#3D4F3F] text-white flex items-center justify-center font-bold shadow-xs">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1C] font-serif-tc group-hover:text-[#3D4F3F] transition-colors">
                      {group.region}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#1C1C1C]/60 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="p-2 border border-black/10 text-[#1C1C1C] group-hover:border-[#3D4F3F] transition-colors">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && group.committees && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 sm:p-8 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredCommittees?.map((c, idx) => (
                        <motion.div
                          key={c.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-5 bg-[#F8F6F2] border border-black/10 hover:border-[#3D4F3F] transition-all space-y-2 group hover:shadow-md hover:-translate-y-0.5"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2.5 bg-white border border-black/10 group-hover:bg-[#3D4F3F] group-hover:text-white transition-colors">
                              {COMMITTEE_ICONS[c.icon]}
                            </div>
                            <div>
                              <span className="editorial-badge text-[#3D4F3F] block">
                                COMMITTEE 0{idx + 1}
                              </span>
                              <h3 className="font-bold text-[#1C1C1C] text-base font-serif-tc">
                                {c.name}
                              </h3>
                            </div>
                          </div>
                          <p className="text-xs text-[#1C1C1C]/80 leading-relaxed pl-1">
                            {c.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {isExpanded && !group.committees && (
                <div className="p-8 text-center text-[#1C1C1C]/80 text-sm space-y-2">
                  <p className="font-bold text-[#1C1C1C] font-serif-tc">
                    {group.region}正式立會運作中
                  </p>
                  <p className="text-xs text-[#1C1C1C]/60 max-w-md mx-auto">
                    由在地代表積極擴展會友交流，定期舉辦研討會與文創體驗座談。
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Next Page Banner */}
      <NextPageBanner
        badge="OFFICIAL HOME"
        nextPageTitle="官網首頁"
        description="回到社團法人台灣玉山創見會官方網站首頁"
        buttonLabel="返回官網首頁"
        targetPageId="home"
        onNavigate={onNavigate}
      />
    </div>
  );
};

