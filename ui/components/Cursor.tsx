"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "sine",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }
  });

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white mix-blend-difference lg:block"
    ></div>
  );
};

export default Cursor;
