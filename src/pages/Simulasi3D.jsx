import { useState, useMemo, Suspense } from "react";
import PageShell, { Wrapper } from "../components/layout/PageShell";
import Scene from "../three/Scene";

const MELT_POINT = 29.76;

function OverlayPanel({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-line-strong bg-trough/95 px-4 py-3.5 ${className}`}
    >
      {children}
    </div>
  );
}

function ToggleButton({ active, label, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`pill px-3.5 py-2 text-[10px] transition-colors ${
        active
          ? "bg-zinc-100 text-zinc-900 font-medium"
          : "pill-glass hover:bg-surface"
      }`}
    >
      <span className="material-symbols-outlined text-[15px]">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function StatLine({ label, value, tone = "default" }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-line py-1.5 last:border-0">
      <span className="label-xs text-zinc-500">{label}</span>
      <span
        className={`font-heading text-xs tabular-nums ${
          tone === "hot" ? "text-zinc-100" : "text-zinc-300"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default function Simulasi3D() {
  const [view, setView] = useState("atomic");
  const [temperature, setTemperature] = useState(22);
  const [autoRotate, setAutoRotate] = useState(true);

  const state = useMemo(() => {
    const melting = temperature >= MELT_POINT;
    return {
      melting,
      phase: melting ? "CAIR" : "PADAT",
      phaseEn: melting ? "Liquid" : "Solid",
      melt: Math.min(1, Math.max(0, (temperature - MELT_POINT) / 40)),
    };
  }, [temperature]);

  return (
    <PageShell activeId="simulasi-3d">
      <Wrapper>
        {/* ── Header bar ── */}
        <header className="panel mb-6 flex flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-4">
            <a
              href="#/"
              className="btn-glass !px-3.5 !py-2.5"
              aria-label="Kembali ke Learning Hub"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </a>
            <div>
              <div className="label-xs text-zinc-500">Modul 08 · Live Simulation</div>
              <h1 className="font-display mt-1.5 text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
                Interactive 3D Cell:{" "}
                <span className="text-zinc-100">Gallium [Ga, 31]</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="pill pill-glass px-3.5 py-2 text-[10px]">
              <span
                className={`h-2 w-2 rounded-full ${
                  state.melting ? "bg-zinc-100" : "bg-zinc-500"
                }`}
              />
              {state.phase}
            </span>
            <span className="pill bg-zinc-100 px-3.5 py-2 text-[10px] font-medium tabular-nums text-zinc-900">
              {temperature.toFixed(2)}°C
            </span>
          </div>
        </header>

        {/* ── Main 3D stage ── */}
        <section className="relative">
          <div className="relative h-[70vh] min-h-[440px] w-full overflow-hidden rounded-2xl border border-line-strong bg-void">
            <Suspense
              fallback={
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-line-strong border-t-zinc-300" />
                    <div className="label-xs mt-4 text-zinc-500">
                      Loading 3D Cell…
                    </div>
                  </div>
                </div>
              }
            >
              <Scene
                view={view}
                temperature={temperature}
                autoRotate={autoRotate}
              />
            </Suspense>

            {/* corner brackets — quiet frame */}
            <div className="pointer-events-none absolute inset-0">
              {[
                "left-4 top-4 border-l border-t",
                "right-4 top-4 border-r border-t",
                "left-4 bottom-4 border-b border-l",
                "right-4 bottom-4 border-b border-r",
              ].map((pos) => (
                <div
                  key={pos}
                  className={`absolute h-6 w-6 border-line-strong ${pos}`}
                />
              ))}
            </div>

            {/* ── Overlay: view toggle (top-left) ── */}
            <OverlayPanel className="absolute left-5 top-5 w-[228px]">
              <div className="label-xs mb-2.5 text-zinc-500">Structure Mode</div>
              <div className="flex flex-col gap-2">
                <ToggleButton
                  active={view === "atomic"}
                  label="Atomic Structure"
                  icon="atom"
                  onClick={() => setView("atomic")}
                />
                <ToggleButton
                  active={view === "crystal"}
                  label="Orthorhombic Lattice"
                  icon="grid_on"
                  onClick={() => setView("crystal")}
                />
              </div>
            </OverlayPanel>

            {/* ── Overlay: telemetry (top-right) ── */}
            <OverlayPanel className="absolute right-5 top-5 hidden w-[210px] md:block">
              <div className="label-xs mb-2 text-zinc-500">Telemetry</div>
              <StatLine label="Element" value="Gallium" />
              <StatLine label="Z / Mass" value="31 / 69.723 u" />
              <StatLine
                label="Phase"
                value={`${state.phase} · ${state.phaseEn}`}
                tone="hot"
              />
              <StatLine label="Elec. Config" value="[Ar] 3d¹⁰ 4s² 4p¹" />
              <StatLine label="View" value={view === "atomic" ? "Atomic" : "Crystal"} />
            </OverlayPanel>

            {/* ── Overlay: temperature (bottom-left) ── */}
            <OverlayPanel className="absolute bottom-5 left-5 right-5 md:right-auto md:w-[340px]">
              <div className="mb-2.5 flex items-center justify-between gap-4">
                <div className="label-xs text-zinc-400">Temperature</div>
                <div className="flex items-center gap-2">
                  <span className="font-heading text-sm tabular-nums text-zinc-100">
                    {temperature.toFixed(1)}°C
                  </span>
                  <span
                    className={`pill px-2 py-0.5 text-[9px] ${
                      state.melting
                        ? "bg-zinc-100 text-zinc-900 font-medium"
                        : "pill-glass"
                    }`}
                  >
                    {state.phase}
                  </span>
                </div>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min={-20}
                  max={100}
                  step={0.5}
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  aria-label="Suhu simulasi Gallium"
                  className="temp-slider w-full cursor-pointer"
                />
                {/* melt-point marker at 29.76°C */}
                <div
                  className="pointer-events-none absolute top-0 h-full w-px bg-zinc-500/60"
                  style={{ left: `${((MELT_POINT + 20) / 120) * 100}%` }}
                  aria-hidden
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="label-xs text-zinc-500">−20°C</span>
                <span className="label-xs text-zinc-400">
                  ▲ Titik Leleh {MELT_POINT}°C
                </span>
                <span className="label-xs text-zinc-500">100°C</span>
              </div>
            </OverlayPanel>

            {/* ── Overlay: controls (bottom-right) ── */}
            <OverlayPanel className="absolute bottom-5 right-5 hidden w-[188px] md:block">
              <div className="label-xs mb-2.5 text-zinc-500">Controls</div>
              <div className="flex flex-col gap-2">
                <ToggleButton
                  active={autoRotate}
                  label={autoRotate ? "Auto-Rotate On" : "Auto-Rotate Off"}
                  icon="360"
                  onClick={() => setAutoRotate((v) => !v)}
                />
                <div className="rounded-xl border border-line-strong bg-tint-soft px-3 py-2">
                  <div className="label-xs text-zinc-500">Orbit</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                    Drag · Rotate
                    <br />
                    Scroll · Zoom
                    <br />
                    Right-drag · Pan
                  </div>
                </div>
              </div>
            </OverlayPanel>
          </div>
        </section>

        {/* ── Info strip below stage ── */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="panel relative overflow-hidden px-6 py-6">
            {/* Decorative watermark — stacked behind the readable content */}
            <div
              className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none opacity-5"
              aria-hidden="true"
            >
              <span className="font-display text-[7rem] font-semibold leading-none tracking-tight text-zinc-100">
                ATOM
              </span>
            </div>
            {/* Readable content — always above the watermark */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-line-strong bg-tint">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    className="text-zinc-300"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
                  </svg>
                </div>
                <h3 className="font-heading text-base font-semibold text-zinc-100">
                  Atomic Structure
                </h3>
              </div>
              <p className="body-copy mt-4 text-sm">
                Inti bercahaya dengan empat kulit elektron (2 · 8 · 18 · 3 = 31 elektron)
                yang mengorbit pada bidang miring berbeda — representasi visual konfigurasi
                [Ar] 3d¹⁰ 4s² 4p¹.
              </p>
            </div>
          </div>

          <div className="panel px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-line-strong bg-tint">
                <span className="material-symbols-outlined text-[20px] text-zinc-300">
                  grid_on
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-zinc-100">
                Orthorhombic Lattice
              </h3>
            </div>
            <p className="body-copy mt-4 text-sm">
              Sel unit Gallium bersistem kristal ortorombik dengan pasangan dimer.
              Setiap atom berikatan kovalen tunggal terhadap tetangga terdekatnya,
              menjelaskan sifat lunak dan densitasnya yang rendah.
            </p>
          </div>

          <div className="panel px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-line-strong bg-tint">
                <span className="material-symbols-outlined text-[20px] text-zinc-300">
                  thermostat
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-zinc-100">
                Phase Transition
              </h3>
            </div>
            <p className="body-copy mt-4 text-sm">
              Geser suhu melampaui <span className="text-zinc-100">29.76°C</span> untuk
              mensimulasikan peleburan. Di atas titik leleh, elektron melebar, kisi
              memuai, dan sel mengalami transisi fase solid-to-liquid.
            </p>
          </div>
        </section>

        {/* ── CTA back ── */}
        <section className="panel mt-10 flex flex-col items-start justify-between gap-5 px-8 py-8 md:flex-row md:items-center">
          <div>
            <div className="label-xs text-zinc-500">Selesai Simulasi</div>
            <h3 className="font-display mt-2.5 text-2xl font-semibold text-zinc-100">
              Kembali ke Learning Hub
            </h3>
          </div>
          <a href="#/" className="btn-chrome">
            <span className="material-symbols-outlined text-[20px]">home</span>
            Learning Hub
          </a>
        </section>
      </Wrapper>
    </PageShell>
  );
}
