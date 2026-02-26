"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on devices with hover (not touch)
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let cursorX = 0,
      cursorY = 0;
    let dotX = 0,
      dotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      dot.style.left = cursorX + "px";
      dot.style.top = cursorY + "px";
    };

    function animateCursor() {
      dotX += (cursorX - dotX) * 0.15;
      dotY += (cursorY - dotY) * 0.15;
      cursor!.style.left = dotX + "px";
      cursor!.style.top = dotY + "px";
      requestAnimationFrame(animateCursor);
    }

    document.addEventListener("mousemove", onMouseMove);
    animateCursor();

    // Enlarge on interactive elements
    const onEnter = () => cursor.classList.add("cursor-hover");
    const onLeave = () => cursor.classList.remove("cursor-hover");

    const interactives = document.querySelectorAll(
      "a, button, .tilt-card, .faq-btn"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
