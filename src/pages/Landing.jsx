import PageShell, { Wrapper } from "../components/layout/PageShell";
import { MODULES } from "../data/modules";
import { OrbitVisual } from "../components/media";

function HeroStat({ label, value, hint }) {
  return (
    <div className="panel-soft px-5 py-4">
      <div className="label-xs text-zinc-500">{label}</div>
      <div className="stat-value mt-2 text-2xl md:text-[1.65rem]">{value}</div>
      <div className="mt-1.5 text-[11px] text-zinc-500">{hint}</div>
    </div>
  );
}

function ModuleCard({ mod, featured = false }) {
  return (
    <a
      href={mod.href}
      className={`module-card group relative flex h-full flex-col overflow-hidden p-6 ${
        featured ? "border-line-strong" : ""
      }`}
    >
      {featured && (
        <div className="absolute right-5 top-5">
          <span className="pill bg-zinc-100 px-3 py-1.5 text-[9px] font-medium text-zinc-900">
            Interactive
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line-strong bg-tint">
          <span className="material-symbols-outlined text-[22px] text-zinc-300">{mod.icon}</span>
        </div>
        <span className="label-xs tabular-nums text-zinc-500">{mod.num}</span>
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold leading-snug text-zinc-100">
        {mod.title}
      </h3>
      <p className="body-copy mt-3 flex-1 text-[13px]">{mod.blurb}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="label-xs text-zinc-400">
          {featured ? "Mulai Eksplorasi" : "Buka Modul"}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-tint transition group-hover:bg-tint-strong">
          <span className="material-symbols-outlined text-[18px] text-zinc-100">arrow_forward</span>
        </span>
      </div>
    </a>
  );
}

export default function Landing() {
  return (
    <PageShell activeId="overview">
      {/* HERO */}
      <section className="relative">
        <Wrapper className="relative">
          {/* Telemetry pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-2.5">
            {[
              "Atomic No. 31 // Group 13",
              "Mass: 69.723 U",
              "Post-Transition Metalloid",
            ].map((t) => (
              <span key={t} className="pill pill-glass px-4 py-2 text-[10px]">
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-display mb-7 whitespace-nowrap px-2 text-center text-[clamp(2.15rem,7vw,5.5rem)] font-semibold leading-[1] tracking-[-0.025em] text-zinc-100">
            Gallium (Ga)
          </h1>

          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-zinc-400 md:text-xl">
            Eksplorasi Mendalam Logam yang{" "}
            <span className="text-zinc-200">Meleleh di Telapak Tangan</span>.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#/sifat-fisika" className="btn-chrome">
              <span className="material-symbols-outlined text-[20px]">explore</span>
              Mulai Eksplorasi
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <HeroStat label="Titik Leleh" value="29.76°C" hint="Meleleh di telapak tangan" />
            <HeroStat label="Anomali Fase" value="Padat Anomali" hint="Memuai saat membeku" />
            <HeroStat label="Kelimpahan" value="19 ppm" hint="Unsur jejak di kerak bumi" />
          </div>
        </Wrapper>
      </section>

      {/* MODULE GRID */}
      <Wrapper className="pt-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-4">
              <span className="label-xs text-zinc-500">Navigasi Utama</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-zinc-100">
              Pilih Materi Pembelajaran
            </h2>
          </div>
          <div className="panel-soft flex items-center gap-3 px-5 py-3.5">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line-strong bg-tint">
              <span className="material-symbols-outlined text-[22px] text-zinc-300">
                deployed_code
              </span>
            </div>
            <div>
              <div className="label-xs text-zinc-500">Live Preview</div>
              <div className="font-heading text-sm text-zinc-100">Simulasi 3D Cell</div>
            </div>
          </div>
        </div>

        {/* Exactly 8 unique module cards — no duplicates */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.slice(1).map((m) => (
            <ModuleCard key={m.id} mod={m} featured={m.id === "simulasi-3d"} />
          ))}
        </div>

        {/* Orbital strip */}
        <div className="panel mt-12 grid items-center gap-8 overflow-hidden px-7 py-8 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div>
            <div className="label-xs text-zinc-500">Konfigurasi Elektron</div>
            <h3 className="font-display mt-3 text-2xl font-semibold text-zinc-100 md:text-3xl">
              [Ar] 3d¹⁰ 4s² 4p¹
            </h3>
            <p className="body-copy mt-4 max-w-xl text-sm">
              Elektron valensi tunggal di orbital 4p menjelaskan sifat trivalen Gallium,
              pembentukan Ga₂O₃, dan perilaku amfoternya — kunci kimia yang dieksplorasi
              pada setiap modul.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill bg-zinc-100 px-3.5 py-1.5 text-[10px] font-medium text-zinc-900">
                Valensi 3
              </span>
              <span className="pill pill-glass px-3.5 py-1.5 text-[10px]">Amfoter</span>
              <span className="pill pill-glass px-3.5 py-1.5 text-[10px]">3d¹⁰ Core</span>
            </div>
          </div>
          <div className="panel-media aspect-[4/3] w-full">
            <OrbitVisual />
          </div>
        </div>
      </Wrapper>
    </PageShell>
  );
}
