import { useState } from "react";

export default function Accordion({ title, items, badge }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <div>
          <span className="mb-1 block text-xs font-semibold uppercase text-primary">{badge}</span>
          <span className="text-base font-medium text-text">{title}</span>
        </div>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-text/60 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <ol className="space-y-3 pb-6 pl-4 text-sm text-text/80">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-primary/50">{String(i + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
