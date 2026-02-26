"use client";

import { PROJECTS } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";
import { useTilt } from "@/lib/use-tilt";

export default function Projects() {
  const heading = useAnimateOnScroll();
  const cards = useAnimateOnScroll(0.1);
  const tilt = useTilt();

  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`mb-16 text-center animate-fade-up ${heading.isVisible ? "visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
            Member{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Check out what our members are building with Claude.
          </p>
        </div>

        <div
          ref={cards.ref}
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${cards.isVisible ? "visible" : ""}`}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="tilt-card group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a]">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-sm font-medium text-gold transition-colors hover:text-gold-dark"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
