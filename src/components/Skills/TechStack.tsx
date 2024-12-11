import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  color: string;
  icon: string;
}

const techStack: TechItem[] = [
  { name: 'HTML', color: '#E44D26', icon: '🌐' },
  { name: 'CSS', color: '#264DE4', icon: '🎨' },
  { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
  { name: 'React', color: '#61DAFB', icon: '⚛️' },
  { name: 'Bootstrap', color: '#7952B3', icon: '📐' },
  { name: 'GSAP', color: '#88CE02', icon: '🎭' },
  { name: 'Tailwind CSS', color: '#38B2AC', icon: '🌊' },
  { name: 'Redux', color: '#764ABC', icon: '🔄' }
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!container || !cards.every(Boolean)) return;

    // Initial setup - hide cards
    gsap.set(cards, { opacity: 0, y: 50 });

    // Create animation for each card
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Hover animations
    cards.forEach((card) => {
      card?.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card?.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="py-12" ref={containerRef}>
      <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
        Tech Stack
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            ref={el => cardsRef.current[index] = el}
            className="relative group"
            style={{
              backgroundColor: tech.color + '1A', // Adding transparency to the background
              borderLeft: `4px solid ${tech.color}`
            }}
            aria-label={tech.name}
          >
            <div className="p-6 rounded-lg backdrop-blur-sm transition-all duration-300">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h4 className="font-semibold text-lg mb-1">{tech.name}</h4>
              <div
                className="h-1 w-16 rounded"
                style={{ backgroundColor: tech.color }}
              />
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
              style={{ backgroundColor: tech.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}