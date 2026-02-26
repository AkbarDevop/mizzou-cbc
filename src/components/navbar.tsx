"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold text-dark-gray">
            <span className="text-gold">CBC</span> Mizzou
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-underline text-sm font-medium text-gray-700 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKS.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glow rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-gold-dark"
            >
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-dark-gray transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-dark-gray transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-dark-gray transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINKS.joinForm}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-gold px-5 py-2 text-center text-sm font-semibold text-black"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
