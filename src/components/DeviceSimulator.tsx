import React from 'react';
import { Monitor, Tablet, Smartphone, X } from 'lucide-react';

interface DeviceSimulatorProps {
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onViewModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  children: React.ReactNode;
}

export const DeviceSimulator: React.FC<DeviceSimulatorProps> = ({
  viewMode,
  onViewModeChange,
  children,
}) => {
  if (viewMode === 'desktop') {
    return <div className="min-h-screen bg-[#F8F6F2] text-[#1C1C1C]">{children}</div>;
  }

  const isTablet = viewMode === 'tablet';

  return (
    <div className="min-h-screen bg-[#1C1C1C] py-6 px-2 sm:px-4 flex flex-col items-center justify-start overflow-x-auto">
      {/* Device frame header bar */}
      <div className="mb-4 flex items-center justify-between w-full max-w-4xl bg-black/60 text-[#F8F6F2] px-4 py-2 text-xs border border-white/10 shadow-md">
        <div className="flex items-center space-x-2">
          {isTablet ? <Tablet className="w-4 h-4 text-emerald-300" /> : <Smartphone className="w-4 h-4 text-emerald-300" />}
          <span className="font-bold tracking-wider">
            {isTablet ? '平板電腦響應式模式 (768px)' : '行動手機響應式模式 (375px)'}
          </span>
        </div>

        <button
          onClick={() => onViewModeChange('desktop')}
          className="text-emerald-300 hover:text-white flex items-center gap-1 font-bold uppercase tracking-wider"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>切換全螢幕桌機</span>
        </button>
      </div>

      {/* Simulated Device Frame */}
      <div
        className={`bg-[#F8F6F2] text-[#1C1C1C] border-[10px] border-black/80 shadow-2xl overflow-hidden transition-all duration-300 w-full ${
          isTablet ? 'max-w-[768px]' : 'max-w-[390px]'
        }`}
      >
        {/* Device Notch / Camera */}
        <div className="bg-black/80 h-6 flex items-center justify-center">
          <div className="w-16 h-3 bg-black rounded-full" />
        </div>

        {/* Content Container */}
        <div className="max-h-[82vh] overflow-y-auto">{children}</div>

        {/* Device Home Bar */}
        <div className="bg-[#F8F6F2] h-6 flex items-center justify-center border-t border-black/10">
          <div className="w-28 h-1 bg-black/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};
