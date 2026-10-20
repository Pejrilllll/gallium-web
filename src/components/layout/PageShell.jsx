import Navbar from "./Navbar";
import SubNav from "./SubNav";
import Footer from "./Footer";

export function Wrapper({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-7xl px-6 md:px-12 py-16 ${className}`}>{children}</div>
  );
}

export function PageHeader({ eyebrow, titleTop, titleAccent, lead, meta = [] }) {
  return (
    <header className="mb-14">
      {eyebrow && (
        <div className="mb-5">
          <span className="label-xs text-zinc-500">{eyebrow}</span>
        </div>
      )}
      <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-100">
        {titleTop && <span className="block">{titleTop}</span>}
        {titleAccent && <span className="block text-zinc-400">{titleAccent}</span>}
      </h1>
      {lead && <p className="body-copy mt-6 max-w-3xl text-base md:text-lg">{lead}</p>}
      {meta.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-2.5">
          {meta.map((m) => (
            <span key={m} className="pill pill-glass px-3.5 py-2 text-[10px]">
              {m}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

export function Eyebrow({ num, label }) {
  return (
    <div className="pill pill-glass px-3.5 py-1.5 text-[10px]">
      <span className="tabular-nums opacity-60">#{num}</span>
      <span>{label}</span>
    </div>
  );
}

export function StatChip({ label, value, hint, icon }) {
  return (
    <div className="panel-soft flex items-start gap-3 px-4 py-3.5">
      {icon && (
        <span className="material-symbols-outlined mt-0.5 text-[20px] text-zinc-400">{icon}</span>
      )}
      <div className="min-w-0">
        <div className="label-xs text-zinc-500">{label}</div>
        <div className="stat-value mt-1 text-xl">{value}</div>
        {hint && <div className="mt-1 text-[11px] text-zinc-500">{hint}</div>}
      </div>
    </div>
  );
}

export function NextModule({ fromLabel, to, mt = "mt-20" }) {
  if (!to) return null;
  return (
    <section className={mt}>
      <a
        href={to.href}
        className="module-card group flex flex-col items-start gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between md:px-12"
      >
        <div>
          <div className="label-xs text-zinc-500">{fromLabel ?? "Modul Berikutnya"}</div>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-heading text-sm tabular-nums text-zinc-500">{to.num}</span>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
              {to.title}
            </h3>
          </div>
          <p className="body-copy mt-3 max-w-xl text-sm">{to.blurb}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-line-strong bg-tint">
            <span className="material-symbols-outlined text-[26px] text-zinc-300">{to.icon}</span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-tint transition group-hover:bg-tint-strong">
            <span className="material-symbols-outlined text-zinc-100">arrow_forward</span>
          </div>
        </div>
      </a>
    </section>
  );
}

export default function PageShell({ activeId, children, noSubnav = false }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-void">
      <Navbar activeId={activeId} />
      {!noSubnav && <SubNav activeId={activeId} />}
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
