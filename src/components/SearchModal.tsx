import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, HeartHandshake, Users, Compass, Flag } from 'lucide-react';
import { PageId } from '../types';
import { PURPOSES, BELIEFS, OUTLOOK_TEXT, ABOUT_STORY, ORGANIZATION_DATA, MENU_ITEMS } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageId: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();

    const results: { pageId: PageId; pageTitle: string; title: string; snippet: string }[] = [];

    // Search Purposes
    PURPOSES.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        results.push({
          pageId: 'beliefs',
          pageTitle: '創會宗旨',
          title: `宗旨 ${p.number}：${p.title}`,
          snippet: p.description,
        });
      }
    });

    // Search Beliefs
    BELIEFS.forEach((b) => {
      if (
        b.title.toLowerCase().includes(q) ||
        b.subtitle.toLowerCase().includes(q) ||
        b.detail.toLowerCase().includes(q)
      ) {
        results.push({
          pageId: 'beliefs',
          pageTitle: '創會宗旨',
          title: `信念 ${b.numeral}：${b.title}`,
          snippet: `${b.subtitle} - ${b.detail}`,
        });
      }
    });

    // Search Outlook
    if (OUTLOOK_TEXT.toLowerCase().includes(q) || '本會展望'.includes(q)) {
      results.push({
        pageId: 'about',
        pageTitle: '本會簡介',
        title: '本會展望',
        snippet: OUTLOOK_TEXT,
      });
    }

    // Search About Story
    ABOUT_STORY.mainParagraphs.forEach((p, idx) => {
      if (p.toLowerCase().includes(q)) {
        results.push({
          pageId: 'about',
          pageTitle: '本會簡介',
          title: `簡介內容 (${idx + 1})`,
          snippet: p,
        });
      }
    });

    // Search Committees
    ORGANIZATION_DATA.forEach((group) => {
      group.committees?.forEach((c) => {
        if (c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) {
          results.push({
            pageId: 'organization',
            pageTitle: '本會組織',
            title: `組織：${c.name}`,
            snippet: c.description,
          });
        }
      });
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div className="bg-[#F8F6F2] w-full max-w-2xl shadow-2xl overflow-hidden border border-black/20 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-black/10 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#3D4F3F] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋宗旨、信念、組織、任務關鍵字（例如：環保、文創、周朝陽、茶道）..."
            className="w-full bg-transparent text-[#1C1C1C] text-base font-bold focus:outline-hidden placeholder:text-black/40"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#1C1C1C]/60 hover:text-[#1C1C1C] text-xs font-bold uppercase tracking-widest px-2 py-1 bg-black/5"
            >
              CLEAR
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#1C1C1C]/60 hover:text-[#1C1C1C] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Links / Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {!query.trim() ? (
            <div>
              <span className="editorial-badge text-[#3D4F3F] block mb-2 px-2">
                QUICK NAVIGATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3.5 bg-white border border-black/10 hover:border-[#3D4F3F] text-left transition-all group"
                  >
                    <span className="font-bold text-[#1C1C1C] text-xs uppercase tracking-wider font-serif-tc">{item.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#3D4F3F] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-2">
              <span className="editorial-badge text-[#3D4F3F] block mb-2 px-2">
                FOUND {searchResults.length} RESULTS
              </span>
              {searchResults.map((res, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onNavigate(res.pageId);
                    onClose();
                  }}
                  className="w-full text-left p-4 bg-white border border-black/10 hover:border-[#3D4F3F] transition-all space-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="editorial-badge text-white bg-[#3D4F3F] px-2 py-0.5">
                      {res.pageTitle}
                    </span>
                    <span className="text-[10px] font-bold text-[#3D4F3F] group-hover:underline flex items-center gap-1 uppercase tracking-widest">
                      GO TO PAGE <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  <h4 className="font-bold text-[#1C1C1C] text-sm font-serif-tc">{res.title}</h4>
                  <p className="text-xs text-[#1C1C1C]/80 line-clamp-2">{res.snippet}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-[#1C1C1C]/60 space-y-1">
              <p className="text-base font-bold font-serif-tc text-[#1C1C1C]">找不到與「{query}」相關的內容</p>
              <p className="text-xs">請嘗試搜尋「認同」、「環保」、「三大宗旨」、「六大信念」等關鍵字</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
