import { useEffect, useRef } from 'react';
import { Mountain } from 'lucide-react';

export function MouseMountain() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!logo || !finePointer.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      logo.style.transform = `translate3d(${event.clientX + 14}px, ${event.clientY + 14}px, 0)`;
      logo.style.opacity = '1';
    };
    const hideLogo = () => {
      logo.style.opacity = '0';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', hideLogo);
    window.addEventListener('blur', hideLogo);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', hideLogo);
      window.removeEventListener('blur', hideLogo);
    };
  }, []);

  return (
    <div
      ref={logoRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[100] hidden h-8 w-8 items-center justify-center rounded-full border border-[#C5A059] bg-[#3D4F3F]/90 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-150 md:flex pointer-events-none"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <Mountain className="h-4 w-4" strokeWidth={2} />
    </div>
  );
}
