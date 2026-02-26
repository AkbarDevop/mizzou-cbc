"use client";

import { BENEFITS } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";

export default function Benefits() {
  const heading = useAnimateOnScroll();
  const cards = useAnimateOnScroll(0.1);

  return (
    <section id="benefits" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`mb-16 text-center animate-fade-up ${heading.isVisible ? "visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
            Member{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to start building with AI — completely free for
            Mizzou students.
          </p>
        </div>

        <div
          ref={cards.ref}
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children ${cards.isVisible ? "visible" : ""}`}
        >
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a]">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
