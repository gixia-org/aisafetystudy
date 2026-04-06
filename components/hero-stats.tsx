"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

interface StatsDisplayProps {
  stats: {
    members: { value: string; label: string };
    events: { value: string; label: string };
    views: { value: string; label: string };
  };
}

// Positions for 3 stats placed around the orbital rings
const positions: Array<{ top: string; left?: string; right?: string; translate: string; delay: string }> = [
  { top: '8%', left: '50%', translate: '-50%', delay: '0s' },
  { top: '58%', left: '5%', translate: '0', delay: '0.2s' },
  { top: '58%', right: '5%', translate: '0', delay: '0.4s' },
];

export function HeroStats({ stats }: StatsDisplayProps) {
  const items = [
    { ...stats.members, num: 200, suffix: '+' },
    { ...stats.events, num: 10, suffix: '+' },
    { ...stats.views, num: 1000, suffix: '+' },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer ring — slow spin */}
        <div className="absolute w-[92%] h-[92%] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/30" />
        </div>
        {/* Middle ring — reverse */}
        <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-primary/[0.08] animate-[spin_25s_linear_infinite_reverse]">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-tertiary/40" />
        </div>
        {/* Inner ring */}
        <div className="absolute w-[48%] h-[48%] rounded-full border border-tertiary/[0.08] animate-[spin_18s_linear_infinite]">
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/25" />
        </div>
      </div>

      {/* Center shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center shadow-lg shadow-primary/20">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        </div>
      </div>

      {/* Stat nodes floating on the rings */}
      {items.map((item, i) => {
        const pos = positions[i];
        return (
          <div
            key={i}
            className="absolute z-20 text-center animate-[fadeInUp_0.6s_ease-out_both]"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              transform: `translateX(${pos.translate})`,
              animationDelay: pos.delay,
            }}
          >
            <div className="text-2xl md:text-3xl font-extrabold font-headline text-primary tracking-tight leading-none">
              <AnimatedCounter end={item.num} suffix={item.suffix} />
            </div>
            <div className="text-[11px] md:text-xs text-on-surface-variant font-medium mt-0.5 whitespace-nowrap">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
