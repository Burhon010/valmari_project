import { useEffect, useRef } from "react";

const COLORS = ["#b3001b", "#8b0000", "#d0021b", "#a4030f"];

export default function ClickBloodEffect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      // Не мешаем обычному клику по кнопкам, ссылкам и полям ввода
      if (e.target.closest("button, a, input, textarea, select, label, [role='button']")) {
        return;
      }

      const count = 6 + Math.floor(Math.random() * 5);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 55;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const size = 5 + Math.random() * 8;
        const duration = 500 + Math.random() * 350;

        const drop = document.createElement("span");
        drop.className = "blood-drop";
        drop.style.left = `${e.clientX}px`;
        drop.style.top = `${e.clientY}px`;
        drop.style.width = `${size}px`;
        drop.style.height = `${size}px`;
        drop.style.setProperty("--tx", `${tx}px`);
        drop.style.setProperty("--ty", `${ty}px`);
        drop.style.animationDuration = `${duration}ms`;
        drop.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];

        container.appendChild(drop);
        setTimeout(() => drop.remove(), duration + 50);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true" />;
}
