'use client';

import React, { useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function RevealOnScroll({ children, className = '' }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`opacity-0 translate-y-10 transition-all duration-1000 ease-out ${className}`}>
      {children}
    </div>
  );
} 