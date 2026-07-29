import React, { useEffect, useRef } from 'react';

type Firefly = {
  x: number;
  y: number;
  angle: number;
  targetAngle: number;
  turnSeed: number;
  speed: number;
  size: number;
  depth: number;
  pulseRate: number;
  phase: number;
  color: string;
  nextTurn: number;
};

const FIREFLY_COLORS = ['#F1D58A', '#B8DFA4'];

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let previousTime = performance.now();
    const fireflies: Firefly[] = [];

    const createFirefly = (): Firefly => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        angle,
        targetAngle: angle,
        turnSeed: Math.random() * Math.PI * 2,
        speed: 38 + Math.random() * 54,
        size: 1.15 + Math.random() * 0.65,
        depth: 0.72 + Math.random() * 0.56,
        pulseRate: 1.2 + Math.random() * 2.8,
        phase: Math.random() * Math.PI * 2,
        color: FIREFLY_COLORS[Math.random() > 0.22 ? 0 : 1],
        nextTurn: 0,
      };
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const targetCount = width < 640 ? 45 : 70;
      while (fireflies.length < targetCount) fireflies.push(createFirefly());
      if (fireflies.length > targetCount) fireflies.length = targetCount;
    };

    const draw = (time: number) => {
      const elapsed = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      context.clearRect(0, 0, width, height);

      fireflies.forEach((firefly) => {
        const movement = reduceMotion ? 0.08 : 1.25;
        if (time >= firefly.nextTurn) {
          firefly.targetAngle = Math.random() * Math.PI * 2;
          firefly.nextTurn = time + 650 + Math.random() * 1850;
        }

        const angleDifference = Math.atan2(
          Math.sin(firefly.targetAngle - firefly.angle),
          Math.cos(firefly.targetAngle - firefly.angle),
        );
        firefly.angle += angleDifference * elapsed * 1.45;
        firefly.angle += Math.sin(time * 0.0014 + firefly.turnSeed) * elapsed * 0.65;

        const wave = Math.max(0, Math.sin(time * 0.001 * firefly.pulseRate + firefly.phase));
        const flash = Math.pow(wave, 9);
        const dart = 1 + flash * 0.65;
        firefly.x += Math.cos(firefly.angle) * firefly.speed * firefly.depth * movement * dart * elapsed;
        firefly.y += Math.sin(firefly.angle) * firefly.speed * firefly.depth * movement * dart * elapsed;
        firefly.y += Math.sin(time * 0.004 + firefly.turnSeed) * 11 * movement * elapsed;

        const margin = 18;
        if (firefly.x < -margin) firefly.x = width + margin;
        if (firefly.x > width + margin) firefly.x = -margin;
        if (firefly.y < -margin) firefly.y = height + margin;
        if (firefly.y > height + margin) firefly.y = -margin;

        const displayY = firefly.y + Math.sin(time * 0.0032 + firefly.phase) * 7 * firefly.depth;
        context.save();
        context.globalAlpha = 0.1 + flash * 0.9;
        context.fillStyle = firefly.color;
        context.shadowColor = firefly.color;
        context.shadowBlur = 5 + flash * 22;
        context.beginPath();
        context.arc(
          firefly.x,
          displayY,
          firefly.size * (1.3 + flash * 1.25),
          0,
          Math.PI * 2,
        );
        context.fill();
        context.restore();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
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

      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-20 h-full w-full pointer-events-none select-none"
        aria-hidden="true"
      />
    </>
  );
};
