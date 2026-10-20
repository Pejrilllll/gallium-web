import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-line bg-void/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <a href="#/" className="brand-link flex items-center gap-3">
            <div className="brand-mark grid h-10 w-10 place-items-center rounded-xl border border-line-strong bg-tint">
              <span className="font-display text-base font-semibold text-zinc-100">Ga</span>
            </div>
            <div className="brand-word font-display text-sm font-medium tracking-[0.16em] text-zinc-100">
              GALLIUM
            </div>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
