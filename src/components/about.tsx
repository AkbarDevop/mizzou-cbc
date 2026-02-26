"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_STATS } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const numMatch = value.match(/[\d,]+/);
          if (!numMatch) {
            setDisplay(value);
            return;
          }

          const target = parseInt(numMatch[0].replace(/,/g, ""), 10);
          const prefix = value.slice(0, value.indexOf(numMatch[0]));
          const suffix = value.slice(
            value.indexOf(numMatch[0]) + numMatch[0].length
          );

          const duration = 1500;
          const steps = 40;
          const stepTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            setDisplay(
              `${prefix}${current.toLocaleString()}${suffix}`
            );
            if (step >= steps) {
              clearInterval(timer);
              setDisplay(value);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{display}</div>;
}

export default function About() {
  const text = useAnimateOnScroll();
  const stats = useAnimateOnScroll(0.1);

  return (
    <section id="about" className="bg-warm-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div
            ref={text.ref}
            className={`animate-fade-up ${text.isVisible ? "visible" : ""}`}
          >
            <h2 className="mb-6 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-gold to-anthropic-tan bg-clip-text text-transparent">
                CBC Mizzou
              </span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Claude Builders Club at Mizzou is a student-led community for
              builders of all backgrounds. Whether you&apos;re a computer
              science major or a journalism student, we believe AI tools like
              Claude can amplify what you create.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              As part of Anthropic&apos;s nationwide Campus Program, our chapter
              gives Mizzou students free access to the most capable AI tools,
              hands-on workshops, and a collaborative community to learn and
              build together.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We&apos;re building at the intersection of Mizzou&apos;s
              world-class journalism, engineering, and business programs —
              bringing diverse perspectives to AI development and responsible
              innovation.
            </p>
          </div>

          {/* Stats grid */}
          <div
            ref={stats.ref}
            className={`grid grid-cols-2 gap-6 stagger-children ${stats.isVisible ? "visible" : ""}`}
          >
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="stat-hover rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-2 text-4xl font-extrabold text-gold">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
