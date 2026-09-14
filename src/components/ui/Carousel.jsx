import { Children, useEffect, useRef, useState } from "react";

export default function Carousel({ children, itemClassName = "" }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    const child = track?.children[i];
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          aria-label="Предыдущий слайд"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-text/60 transition-colors hover:border-primary hover:text-primary"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === active ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
          aria-label="Следующий слайд"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-text/60 transition-colors hover:border-primary hover:text-primary"
        >
          ›
        </button>
      </div>
    </div>
  );
}
