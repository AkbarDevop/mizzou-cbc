"use client";

import { useEffect, useRef, useState } from "react";
import { LINKS } from "@/lib/constants";
import HeroParticles from "./hero-particles";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (orb1Ref.current)
        orb1Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (orb2Ref.current)
        orb2Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Magnetic button handlers
  const onBtnMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const onBtnMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a2a2a]">
      <HeroParticles />
      <div
        ref={orb1Ref}
        className="parallax-orb absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]"
      />
      <div
        ref={orb2Ref}
        className="parallax-orb absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-anthropic-tan/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div
          className={`mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Part of the Anthropic Campus Program
        </div>

        <h1
          className={`mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white transition-all duration-700 delay-150 sm:text-6xl lg:text-7xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Claude Builders Club
          <br />
          <span className="bg-gradient-to-r from-gold via-[#f5ce5e] to-anthropic-tan bg-clip-text text-transparent">
            @ Mizzou
          </span>
        </h1>

        <p
          className={`mx-auto mb-10 max-w-2xl text-lg text-gray-300 transition-all duration-700 delay-300 sm:text-xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Learn, Build, and Ship with Claude AI at the University of Missouri.
          Free Claude Pro access, monthly API credits, and a community of
          builders across every major.
        </p>

        <div
          className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-500 sm:flex-row ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href={LINKS.joinForm}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={onBtnMouseMove}
            onMouseLeave={onBtnMouseLeave}
            className="magnetic btn-gold-glow rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
          >
            Join the Club
          </a>
          <a
            href={LINKS.groupMe}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={onBtnMouseMove}
            onMouseLeave={onBtnMouseLeave}
            className="magnetic rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            Join GroupMe
          </a>
        </div>
      </div>
    </section>
  );
}
