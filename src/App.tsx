import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { getPageIdFromPath, MENU_ITEMS } from './data/content';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { MissionsPage } from './components/pages/MissionsPage';
import { BeliefsPage } from './components/pages/BeliefsPage';
import { FlagPage } from './components/pages/FlagPage';
import { OrganizationPage } from './components/pages/OrganizationPage';
import { SearchModal } from './components/SearchModal';
import { DeviceSimulator } from './components/DeviceSimulator';
import { AnimatedBackground } from './components/AnimatedBackground';
import { FloatingTools } from './components/FloatingTools';
import { Preloader } from './components/Preloader';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home'); // Default to home page
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [searchOpen, setSearchOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // Sync state with browser location path
  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      const detectedId = getPageIdFromPath(currentPath);
      setActivePage(detectedId);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (pageId: PageId) => {
    setActivePage(pageId);
    const menuItem = MENU_ITEMS.find((m) => m.id === pageId);
    if (menuItem) {
      // Sync browser address bar URL with original Weebly path
      const targetPath = menuItem.urlPath === '/'
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}${menuItem.urlPath.slice(1)}`;
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'missions':
        return <MissionsPage onNavigate={handleNavigate} />;
      case 'beliefs':
        return <BeliefsPage onNavigate={handleNavigate} />;
      case 'flag':
        return <FlagPage onNavigate={handleNavigate} />;
      case 'organization':
        return <OrganizationPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {/* Intro Preloader / Splash Screen */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      <DeviceSimulator viewMode={viewMode} onViewModeChange={setViewMode}>
        <div className="relative min-h-screen flex flex-col bg-[#F8F6F2] text-[#1C1C1C] font-sans selection:bg-[#3D4F3F] selection:text-white overflow-x-hidden">
          {/* Living Ambient Animated Background */}
          <AnimatedBackground />

          {/* Responsive Header */}
          <Header
            activePage={activePage}
            onNavigate={handleNavigate}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenSearch={() => setSearchOpen(true)}
          />

          {/* Main Content Area */}
          <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div key={activePage} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {renderCurrentPage()}
            </div>
          </main>

          {/* Floating Quick Interactive Bar */}
          <FloatingTools
            activePage={activePage}
            onNavigate={handleNavigate}
            onOpenSearch={() => setSearchOpen(true)}
            onReplayIntro={() => setShowPreloader(true)}
          />

        {/* Global Search Modal */}
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onNavigate={handleNavigate}
        />

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </DeviceSimulator>
  </>
);
}
