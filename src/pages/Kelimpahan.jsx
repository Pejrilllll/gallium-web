import PageShell, {
  Wrapper,
  PageHeader,
  Eyebrow,
  NextModule,
} from "../components/layout/PageShell";
import { DonutVisual, SectionMedia } from "../components/media";

function Chip({ children, active = false }) {
  return (
    <span
      className={`pill px-3 py-1.5 text-[10px] ${
        active ? "bg-zinc-100 text-zinc-900 font-medium" : "pill-glass"
      }`}
    >
      {children}
    </span>
  );
}

/** Spesimen mineral inang — Item 02 (3 foto → carousel). */
const MINERAL_IMAGES = [
  {
    src: "/assets/kelimpahan/section2(3).jpg",
    alt: "Spesimen bauksit merah kecoklatan berbutir pisolitik — inang utama gallium",
  },
  {
    src: "/assets/kelimpahan/section2.webp",
    alt: "Spesimen sfalerit (ZnS) hitam keabu-abuan dengan kilap logam",
  },
  {
    src: "/assets/kelimpahan/section2(2).jpg",
    alt: "Bijih sulfida polimetalik — pirit keemasan dengan galena kubik dan sfalerit",
  },
];

/** Peta cadangan global — Item 03 (1 foto → statis). */
const RESERVE_IMAGES = [
  {
    src: "/assets/kelimpahan/section3.jpg",
    alt: "Peta dunia dengan Tiongkok disorot sebagai penguasa cadangan gallium global",
  },
];

export default function Kelimpahan() {
  return (
    <PageShell activeId="kelimpahan">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 05 · Geokimia"
          titleTop="Kelimpahan"
          titleAccent="di Alam"
          lead="Gallium adalah unsur jejak yang terdispersi sangat luas — kelimpahan rata-ratanya hanya 0.0015% dari kerak bumi. Tidak ada mineral yang didominasi Gallium; ia hidup sebagai tamu di dalam bijih aluminium dan seng."
          meta={["19 ppm", "UNSUR JEJAK", "BAUKSIT & SFALERIT", "CABANG DUNIA"]}
        />

        {/* ── Featured: #01 Kerak Bumi ── */}
        <section className="module-card overflow-hidden">
          <div className="border-b border-line px-7 py-6 md:px-10">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <Eyebrow num="01" label="Crustal Distribution" />
                <h2 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100 md:text-[2rem]">
                  Konsentrasi di Kerak Bumi
                </h2>
                <p className="body-copy mt-3 max-w-2xl text-sm">
                  Kelimpahan relatif Gallium berada pada orde 1.5 × 10⁻³ persen — setara
                  sekitar 15–19 ppm. Sebagai perbandingan, aluminium, silikon, dan besi
                  mendominasi hampir 99.9985% massa kerak bumi.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip active>Ga [Z=31]</Chip>
                <Chip>Terdispersi</Chip>
                <Chip>Trace Element</Chip>
              </div>
            </div>
          </div>

          <div className="grid gap-8 px-7 py-8 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
            {/* Donut */}
            <div className="panel-media relative aspect-square w-full max-w-[360px] justify-self-center">
              <div className="absolute left-4 top-4">
                <span className="pill bg-zinc-100 px-3 py-1.5 text-[9px] font-medium text-zinc-900">
                  KELIMPAHAN RELATIF · 1.5 × 10⁻³%
                </span>
              </div>
              <div className="grid h-full w-full place-items-center p-6">
                <DonutVisual />
              </div>
            </div>

            {/* Legend + stats */}
            <div>
              <div className="label-xs text-zinc-500">Komposisi Kerak Bumi</div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-line-strong bg-tint px-4 py-3.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-100" />
                  <div className="flex-1">
                    <div className="font-heading text-sm text-zinc-100">
                      Gallium · Unsur Jejak
                    </div>
                    <div className="text-[11px] text-zinc-400">0.0015% · 15–19 ppm</div>
                  </div>
                  <div className="font-heading text-sm tabular-nums text-zinc-200">0.0015%</div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-tint-soft px-4 py-3.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-500" />
                  <div className="flex-1">
                    <div className="font-heading text-sm text-zinc-100">Al · Si · Fe · Lainnya</div>
                    <div className="text-[11px] text-zinc-400">Komponen utama kerak bumi</div>
                  </div>
                  <div className="font-heading text-sm tabular-nums text-zinc-300">99.9985%</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["Kelimpahan", "19 ppm", "Rata-rata kerak"],
                  ["Relatif", "1.5×10⁻³%", "Mass fraction"],
                  ["Sebanding", "Pb & Co", "Similar rarity"],
                ].map(([a, b, c]) => (
                  <div
                    key={a}
                    className="panel-soft px-3.5 py-4"
                  >
                    <div className="label-xs text-zinc-500">{a}</div>
                    <div className="stat-value mt-1.5 text-xl">{b}</div>
                    <div className="mt-1 text-[10px] text-zinc-500">{c}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom 2-col ── */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* #02 Mineral */}
          <section className="module-card flex flex-col">
            <div className="px-7 pt-7">
              <Eyebrow num="02" label="Mineral Hosts" />
              <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100">
                Keberadaan dalam Mineral
              </h3>
              <p className="body-copy mt-3 text-sm">
                Gallium tidak membentuk mineral sendiri. Ia menggantikan aluminium dalam
                lattice bauksit dan seng dalam sfalerit — dua inang utama yang menjadi
                sumber komersial dunia.
              </p>
            </div>

            <div className="px-7 pt-6">
              <SectionMedia
                images={MINERAL_IMAGES}
                badge="MINERAL INANG"
                caption="Bauksit, Sfalerit, dan Bijih Sulfida — Inang Utama Gallium (3 foto)"
              />
            </div>

            <div className="mt-6 space-y-2.5 px-7">
              {[
                ["Bauksit", "Al(OH)₃", "50–100 ppm Ga"],
                ["Sfalerit", "ZnS", "hingga 0.1% Ga"],
                ["Flue Dusts", "Zn smelter", "hingga 1.5% Ga"],
              ].map(([name, formula, pct]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-tint-soft px-4 py-3"
                >
                  <div>
                    <div className="font-heading text-sm text-zinc-100">{name}</div>
                    <div className="eq text-[11px] text-zinc-500">{formula}</div>
                  </div>
                  <span className="pill bg-zinc-100 px-2.5 py-1 text-[9px] font-medium text-zinc-900">
                    {pct}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 px-7 pb-7">
              <Chip active>Substitusi Al³⁺</Chip>
              <Chip>Resin Capture</Chip>
              <Chip>Byproduct Only</Chip>
            </div>
          </section>

          {/* #03 Cadangan */}
          <section className="module-card flex flex-col">
            <div className="px-7 pt-7">
              <Eyebrow num="03" label="World Reserves" />
              <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100">
                Cadangan di Seluruh Dunia
              </h3>
              <p className="body-copy mt-3 text-sm">
                Tiongkok menguasai produksi dan cadangan Gallium global, terutama dari
                deposito vanadium-titanium Panzhihua. Dominasi ini menjadikan Gallium
                sebagai material strategis dalam rantai pasok teknologi.
              </p>
            </div>

            <div className="px-7 pt-6">
              <SectionMedia
                images={RESERVE_IMAGES}
                badge="CADANGAN GLOBAL"
                caption="Peta Cadangan Gallium Dunia — Tiongkok Mendominasi Suplai Global"
              />
            </div>

            <div className="mt-6 space-y-3 px-7">
              <div>
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <div>
                    <div className="font-heading text-sm text-zinc-100">China</div>
                    <div className="text-[11px] text-zinc-500">190.000 Ton</div>
                  </div>
                  <div className="font-heading text-sm tabular-nums text-zinc-200">68%</div>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "68%" }} />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <div>
                    <div className="font-heading text-sm text-zinc-100">Dunia Lainnya</div>
                    <div className="text-[11px] text-zinc-500">89.300 Ton</div>
                  </div>
                  <div className="font-heading text-sm tabular-nums text-zinc-300">32%</div>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: "32%",
                      background: "var(--svg-dim)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 px-7">
              <div className="panel-soft px-4 py-4">
                <div className="label-xs text-zinc-500">Produksi Global</div>
                <div className="stat-value mt-1.5 text-xl">92.400 Ton</div>
              </div>
              <div className="panel-soft px-4 py-4">
                <div className="label-xs text-zinc-500">Total Cadangan</div>
                <div className="stat-value mt-1.5 text-xl">279.300 Ton</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 px-7 pb-7">
              <Chip active>Panzhihua</Chip>
              <Chip>V-Ti Deposit</Chip>
              <Chip>Strategic Supply</Chip>
            </div>
          </section>
        </div>

        <NextModule
          fromLabel="Modul Berikutnya · 06"
          to={{
            num: "06",
            title: "Sejarah Penemuan Gallium",
            blurb:
              "Dari prediksi Mendeleev 1869 hingga isolasi Lecoq de Boisbaudran pada 1875 — timeline lengkap penemuan unsur.",
            href: "#/sejarah",
            icon: "history_edu",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
