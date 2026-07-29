import React from 'react';

const FIREFLIES = [
  { top: '9%', left: '8%', size: 4, duration: 7.8, delay: -1.2 },
  { top: '15%', left: '29%', size: 3, duration: 9.4, delay: -5.1 },
  { top: '11%', left: '66%', size: 5, duration: 11.2, delay: -3.7 },
  { top: '21%', left: '88%', size: 3, duration: 8.6, delay: -6.4 },
  { top: '32%', left: '16%', size: 5, duration: 10.7, delay: -8.2 },
  { top: '38%', left: '44%', size: 3, duration: 7.3, delay: -2.8 },
  { top: '29%', left: '73%', size: 4, duration: 12.1, delay: -7.6 },
  { top: '47%', left: '93%', size: 5, duration: 9.8, delay: -4.3 },
  { top: '55%', left: '7%', size: 3, duration: 11.7, delay: -9.4 },
  { top: '61%', left: '25%', size: 4, duration: 8.9, delay: -3.1 },
  { top: '53%', left: '57%', size: 5, duration: 10.2, delay: -6.8 },
  { top: '67%', left: '79%', size: 3, duration: 7.6, delay: -1.9 },
  { top: '76%', left: '13%', size: 5, duration: 12.4, delay: -5.9 },
  { top: '83%', left: '38%', size: 3, duration: 9.1, delay: -7.1 },
  { top: '74%', left: '63%', size: 4, duration: 10.9, delay: -2.3 },
  { top: '88%', left: '89%', size: 5, duration: 8.2, delay: -4.9 },
];

export const AnimatedBackground: React.FC = () => {
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
        }}
      />
      <div
        className="absolute -bottom-[10%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(61,79,63,0.3) 0%, rgba(248,246,242,0) 70%)',
        }}
      />

      {/* Fireflies with varied positions and unsynchronised glow cycles */}
      {FIREFLIES.map((firefly, index) => (
        <span
          key={index}
          className="firefly"
          style={{
            top: firefly.top,
            left: firefly.left,
            width: firefly.size,
            height: firefly.size,
            animationDuration: `${firefly.duration}s`,
            animationDelay: `${firefly.delay}s`,
          }}
        />
      ))}

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
    </div>
  );
};
