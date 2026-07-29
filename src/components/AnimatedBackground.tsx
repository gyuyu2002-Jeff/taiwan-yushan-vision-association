import React, { useEffect, useState } from 'react';

export const AnimatedBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
      if (!isHovered) setIsHovered(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Gradient Halos */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-25 animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(61,79,63,0.4) 0%, rgba(248,246,242,0) 70%)',
          animationDuration: '12s',
        }}
      />
      <div
        className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(197,160,89,0.3) 0%, rgba(248,246,242,0) 70%)',
          transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`,
          transition: 'transform 0.8s ease-out',
        }}
      />
      <div
        className="absolute -bottom-[10%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(61,79,63,0.3) 0%, rgba(248,246,242,0) 70%)',
        }}
      />

      {/* Mouse Follow Glow */}
      {isHovered && (
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-15 transition-opacity duration-500"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(61,79,63,0.6) 0%, rgba(212,175,55,0.2) 50%, transparent 80%)',
          }}
        />
      )}

      {/* Subtle Mountain Silhouette SVG vector in bottom background */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.035] text-[#3D4F3F]"
        viewBox="0 0 1440 320"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,218.7C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.025] text-[#C5A059]"
        viewBox="0 0 1440 320"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>

      {/* Floating Particle Orbs */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#3D4F3F]/20 animate-ping duration-[3000ms]" />
      <div className="absolute top-2/3 right-12 w-3 h-3 rounded-full bg-[#C5A059]/25 animate-pulse duration-[4000ms]" />
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-[#3D4F3F]/30 animate-ping duration-[5000ms]" />
    </div>
  );
};
