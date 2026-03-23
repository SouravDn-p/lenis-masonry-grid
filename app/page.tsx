"use client";

import ReactLenis, { useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis((lenis) => {
    // Optional: console.log(lenis.scroll)
  });

  // Manually defined positions to ensure 2-3 per row across 8 columns
  // col: 1-8, row: 1-N
  const galleryItems = [
    { row: 1, col: 2 },
    { row: 1, col: 5 },
    { row: 1, col: 7 }, // Row 1 (3 items)
    { row: 2, col: 1 },
    { row: 2, col: 4 }, // Row 2 (2 items)
    { row: 3, col: 3 },
    { row: 3, col: 6 },
    { row: 3, col: 8 }, // Row 3 (3 items)
    { row: 4, col: 2 },
    { row: 4, col: 5 }, // Row 4 (2 items)
    { row: 5, col: 1 },
    { row: 5, col: 4 },
    { row: 5, col: 7 }, // Row 5 (3 items)
    { row: 6, col: 3 },
    { row: 6, col: 8 }, // Row 6 (2 items)
    { row: 7, col: 2 },
    { row: 7, col: 5 },
    { row: 7, col: 6 }, // Row 7 (3 items)
    { row: 8, col: 1 },
    { row: 8, col: 4 }, // Row 8 (2 items)
  ];

  return (
    <div className="bg-zinc-50 dark:bg-black font-sans min-h-screen">
      <ReactLenis root />

      <main className=" mx-auto py-20 px-4">
        {/* Grid Configuration:
          - grid-cols-8: divides space into 8 equal parts
          - gap-4: spacing between images
        */}
        <div className="grid grid-cols-8 gap-4 auto-rows-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{
                gridColumnStart: item.col,
                gridRowStart: item.row,
              }}
              className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-lg bg-zinc-900 shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/img-${index}/260/260`}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-opacity hover:opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Spacer for Lenis scroll demo */}
        <div className="h-[50vh]" />
      </main>
    </div>
  );
}
