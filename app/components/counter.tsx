"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ start = 0, end, duration = 1.5 }: { start?: number; end: number; duration?: number }) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { innerText: start },
        {
          innerText: end,
          duration,
          snap: { innerText: 1 },
          ease: "power1.inOut",
          onUpdate: function () {
            counterRef.current!.innerText = Math.round(+this.targets()[0].innerText).toString();
          },
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top bottom",
            end: "top top",
            toggleActions: "restart pause resume pause",
            onEnter: () => {
              gsap.set(counterRef.current, { innerText: start });
            }
          }
        }
      );
    }
  }, [start, end, duration]);

  return (
    <span ref={counterRef}>
      {start}
    </span>
  );
};

export default Counter;
