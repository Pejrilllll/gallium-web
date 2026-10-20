import { MODULES } from "../../data/modules";

export default function SubNav({ activeId }) {
  return (
    <div className="sticky top-[73px] z-40 border-b border-line bg-void/95">
      {/* Horizontal slider — swipeable, snap-aligned, last pill never flush to the edge */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center gap-2 overflow-x-auto snap-x snap-mandatory whitespace-nowrap scroll-smooth scrollbar-hide py-3 pr-8">
          {MODULES.map((m) => {
            const active = m.id === activeId;
            return (
              <a
                key={m.id}
                href={m.href}
                className={`pill snap-start shrink-0 px-3.5 py-2 text-[11px] ${
                  active
                    ? "bg-zinc-100 text-zinc-900 font-medium"
                    : "pill-glass hover:bg-tint-strong hover:text-zinc-200"
                }`}
              >
                <span className="tabular-nums opacity-60">{m.num}</span>
                <span>{m.short}</span>
              </a>
            );
          })}
          {/* Trailing spacer so the final pill clears the container edge on scroll */}
          <span aria-hidden className="w-2 shrink-0" />
        </div>
      </div>
    </div>
  );
}
