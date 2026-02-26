"use client";

import { TEAM } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";

export default function Team() {
  const heading = useAnimateOnScroll();
  const cards = useAnimateOnScroll(0.1);

  return (
    <section id="team" className="bg-warm-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`mb-16 text-center animate-fade-up ${heading.isVisible ? "visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-gold to-anthropic-tan bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            The student leaders making CBC Mizzou happen.
          </p>
        </div>

        <div
          ref={cards.ref}
          className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${cards.isVisible ? "visible" : ""}`}
        >
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-anthropic-tan/20">
                  <span className="text-3xl font-bold text-gold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}

              <h3 className="mb-1 text-lg font-semibold text-[#1a1a1a]">
                {member.name}
              </h3>
              <p className="mb-1 text-sm font-medium text-gold">
                {member.role}
              </p>
              <p className="mb-4 text-sm text-gray-500">{member.major}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-gray-400 transition-colors hover:text-gold"
              >
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
