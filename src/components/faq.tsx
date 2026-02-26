"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { useAnimateOnScroll } from "@/lib/use-animate-on-scroll";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heading = useAnimateOnScroll();
  const items = useAnimateOnScroll(0.1);

  return (
    <section id="faq" className="bg-warm-cream py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`mb-16 text-center animate-fade-up ${heading.isVisible ? "visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-gold to-anthropic-tan bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about joining CBC Mizzou.
          </p>
        </div>

        <div
          ref={items.ref}
          className={`space-y-3 stagger-children ${items.isVisible ? "visible" : ""}`}
        >
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.question} className="rounded-xl bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-base font-medium text-[#1a1a1a]">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 text-xl text-gold transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
              >
                <div>
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
