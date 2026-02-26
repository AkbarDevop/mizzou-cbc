"use client";

import { EVENTS } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";

export default function Events() {
  const heading = useAnimateOnScroll();
  const cards = useAnimateOnScroll(0.1);

  return (
    <section id="events" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`mb-16 text-center animate-fade-up ${heading.isVisible ? "visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Workshops, hackathons, and demo nights — come build with us.
          </p>
        </div>

        <div
          ref={cards.ref}
          className={`grid gap-6 sm:grid-cols-2 stagger-children ${cards.isVisible ? "visible" : ""}`}
        >
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Date badge */}
              <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-gold/10">
                <span className="text-lg font-bold leading-tight text-gold">
                  {event.date.split(" ")[0]}
                </span>
                <span className="text-2xl font-extrabold leading-tight text-[#1a1a1a]">
                  {event.date.split(" ")[1]}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold text-[#1a1a1a]">
                  {event.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                  {event.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span>📍 {event.location}</span>
                  <span>🕐 {event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
