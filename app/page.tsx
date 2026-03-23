"use client";

import ReactLenis, { useLenis } from "lenis/react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  useLenis((lenis) => {
    // Optional: console.log(lenis.scroll)
  });

  useGSAP(
    () => {
      const boxes = gridRef.current?.querySelectorAll(".imgBox");

      boxes?.forEach((box) => {
        const xTransform = gsap.utils.random(-150, 150);

        // FIXED: Added comma and parentheses for the .to() method
        gsap.to(box, {
          scale: 0,
          x: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: box,
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false, // Turned off markers for production
          },
        });
        gsap.to(box, {
          x: xTransform,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "bounce",
        });
      });
    },
    { scope: gridRef },
  );

  // Manually defined positions to ensure 2-3 per row across 8 columns
  // col: 1-8, row: 1-N
  const galleryItems = [
    { row: 1, col: 2 },
    { row: 1, col: 5 },
    { row: 1, col: 7 },
    { row: 2, col: 1 },
    { row: 2, col: 4 },
    { row: 3, col: 3 },
    { row: 3, col: 6 },
    { row: 3, col: 8 },
    { row: 4, col: 2 },
    { row: 4, col: 5 },
    { row: 5, col: 1 },
    { row: 5, col: 4 },
    { row: 5, col: 7 },
    { row: 6, col: 3 },
    { row: 6, col: 8 },
    { row: 7, col: 2 },
    { row: 7, col: 5 },
    { row: 7, col: 6 },
    { row: 8, col: 1 },
    { row: 8, col: 4 },
  ];

  return (
    <div className="bg-black font-sans min-h-screen relative overflow-hidden">
      <ReactLenis root />
      <div className="fixed items-center z-50 top-[45%] left-[36%]  w-140 h-40 rounded-sm p-2 text-white shadow-md text-center">
        <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100 font-['Montserrat']  uppercase">
          Lenis
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          A lightweight, performant, and customizable scroll library for React.
        </p>
      </div>

      <main className=" mx-auto py-20 px-4">
        <div className="grid grid-cols-8 gap-4 auto-rows-auto" ref={gridRef}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{
                gridColumnStart: item.col,
                gridRowStart: item.row,
              }}
              className="relative aspect-square w-full max-w-90 overflow-hidden rounded-lg bg-zinc-900 shadow-md imgBox"
            >
              <Image
                width={300}
                height={300}
                loading="eager"
                src={`https://picsum.photos/seed/img-${index}/260/260`}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-opacity hover:opacity-80 "
              />
            </div>
          ))}
        </div>

        {/* Spacer for Lenis scroll demo */}
        <div className="h-[50vh]" />

        <section className="flex items-center justify-center min-h-screen bg-[#FDFCF8] p-10">
          {/* Container with Linen-like background and subtle texture */}
          <div className="relative w-full max-w-7xl p-16 ">
            {/* Subtle Linen Grain Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none "></div>

            <div className="relative z-10 flex flex-col items-center text-left tracking-wide ">
              <p className="text-4xl font-light text-stone-700 leading-relaxed font-sans text-justify">
                Linen is a textile of enduring strength and breathable elegance,
                much like the robust architectures I build as a
                <span className="font-semibold text-stone-900">
                  {" "}
                  MERN-stack developer
                </span>
                . Just as raw flax is meticulously woven into a refined fabric,
                I weave together{" "}
                <span className="italic">Next.js, TypeScript, and SQL</span> to
                create seamless digital experiences. Whether I am drafting
                academic reports at{" "}
                <span className="text-stone-900">Green University</span> or
                optimizing full-stack applications, I strive for the same
                balance of organic simplicity and structural integrity found in
                the finest weave.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
