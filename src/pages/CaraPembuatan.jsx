import PageShell, {
  Wrapper,
  PageHeader,
  Eyebrow,
  NextModule,
} from "../components/layout/PageShell";
import { BayerFlow, MetricBars, ImageEmbed, ImageCarousel } from "../components/media";

function Chip({ children, tone = "ghost" }) {
  return (
    <span
      className={`pill px-3 py-1.5 text-[10px] ${
        tone === "solid" ? "bg-zinc-100 text-zinc-900 font-medium" : "pill-glass"
      }`}
    >
      {children}
    </span>
  );
}

export default function CaraPembuatan() {
  return (
    <PageShell activeId="cara-pembuatan">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 04 · Proses Ekstraksi"
          titleTop="Cara"
          titleAccent="Pembuatan Gallium"
          lead="Gallium tidak pernah ditemukan dalam bentuk mineral murni. Ia diekstraksi sebagai produk sampingan dari industri bauksit dan seng — melalui resin adsorpsi selektif, lixiviasi hidrometalurgi, dan jalur biolah yang sedang berkembang."
          meta={["BAAYER PROCESS", "HYDROMETALLURGY", "BIOLEACHING", "ELECTROWINNING"]}
        />

        {/* ── Featured top card: #01 Bayer ── */}
        <section className="module-card overflow-hidden">
          <div className="border-b border-line px-7 py-6 md:px-10">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <Eyebrow num="01" label="Primary Industrial Source" />
                <h2 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100 md:text-[2rem]">
                  Ekstraksi dari Proses Bayer
                </h2>
                <p className="body-copy mt-3 max-w-2xl text-sm">
                  Sumber industri utama Gallium: residu liquor merah dari proses Bayer
                  alumina ditangkap secara selektif oleh resin amidoxime LS-600, lalu
                  dipulihkan melalui desorpsi asam dan electrowinning.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip tone="solid">Resin Amidoxime LS-600</Chip>
                <Chip>Selectivity Ga/Al &gt; 120×</Chip>
                <Chip>Recovery 85–92%</Chip>
              </div>
            </div>
          </div>

          <div className="px-7 py-8 md:px-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="label-xs text-zinc-500">
                Bayer Diagram // Resin Adsorption Flow
              </div>
              <div className="label-xs text-zinc-400">LS-600 · ACTIVE STAGE</div>
            </div>
            <BayerFlow />

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Produk Samping", "Liquor Merah", "Bayer alumina plant"],
                ["Media Pemisah", "Resin LS-600", "Amidoxime functional"],
                ["Output Akhir", "Ga 99.99%", "Electrowinning cathode"],
              ].map(([a, b, c]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-line bg-tint-soft px-4 py-4"
                >
                  <div className="label-xs text-zinc-500">{a}</div>
                  <div className="font-heading mt-1.5 text-base text-zinc-100">{b}</div>
                  <div className="mt-1 text-[11px] text-zinc-500">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom 2-col ── */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* #02 Limbah Seng */}
          <section className="module-card flex flex-col">
            <div className="px-7 pt-7">
              <Eyebrow num="02" label="Secondary Source" />
              <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100">
                Ekstraksi dari Limbah Seng dan Terak Vanadium
              </h3>
              <p className="body-copy mt-3 text-sm">
                Debu tungku dan residu hidrometalurgi seng menyimpan Gallium terdispersi.
                Pelarutan asam selektif dengan ekstraktan organofosforus memisahkan Ga dari
                Zn, Fe, dan pengotor transisi lain.
              </p>
            </div>

            <div className="px-7 pt-6">
              <ImageCarousel
                images={[
                  {
                    src: "/assets/cara-pembuatan/limbah-seng-1.jpg",
                    alt: "Spesimen bijih dan residu logam dalam cawan heksagonal dengan skala ukur",
                  },
                  {
                    src: "/assets/cara-pembuatan/limbah-seng-2.jpg",
                    alt: "Tumpukan limbah industri dan residu kimia di situs pengolahan seng",
                  },
                  {
                    src: "/assets/cara-pembuatan/limbah-seng-3.jpg",
                    alt: "Peralatan berat di situs limbah dan terak logam",
                  },
                ]}
                badge="LIMBAH SENG · TERAK V"
                caption="Limbah Seng & Terak Vanadium — Spesimen, Residu, dan Situs Ekstraksi (3 foto)"
                aspect="aspect-[4/3]"
                fit="contain"
              />
            </div>

            <div className="px-7 pt-6">
              <div className="rounded-2xl border border-line bg-tint-soft px-5 py-5">
                <div className="label-xs mb-4 text-zinc-400">
                  Hydrometallurgical Metrics
                </div>
                <MetricBars
                  rows={[
                    { label: "Cyanex 923 Efficiency", value: "94%", pct: 94 },
                    { label: "D2EHPA Selectivity", value: "88%", pct: 88 },
                    { label: "Ga Yield", value: ">90%", pct: 91 },
                    { label: "Fe Rejection", value: "97%", pct: 97 },
                  ]}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 px-7 pb-7">
              <Chip tone="solid">Cyanex 923</Chip>
              <Chip>D2EHPA</Chip>
              <Chip>&gt;90% Ga Yield</Chip>
            </div>
          </section>

          {/* #03 Alternatif */}
          <section className="module-card flex flex-col">
            <div className="px-7 pt-7">
              <Eyebrow num="03" label="Emerging Route" />
              <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100">
                Metode Alternatif: Biolah dan Reduksi Hijau
              </h3>
              <p className="body-copy mt-3 text-sm">
                Pendekatan berkelanjutan menggunakan bakteri asidofilik untuk melixiviasi
                Gallium dari bijih rendah konsentrasi — tanpa reagen toksik dan dengan
                jejak efluen yang jauh lebih ringan.
              </p>
            </div>

            <div className="px-7 pt-6">
              <ImageEmbed
                src="/assets/cara-pembuatan/bioleaching.jpg"
                alt="Infografis Bioleaching — bakteri asidofilik dan logam hasil ekstraksi"
                badge="BIOLEACHING"
                caption="Bioleaching — Lixiviasi Biologis untuk Ekstraksi Gallium"
                fit="contain"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 px-7">
              <div className="rounded-2xl border border-line bg-tint-soft px-4 py-4">
                <div className="label-xs text-zinc-500">Toxic Effluent</div>
                <div className="stat-value mt-1.5 text-2xl">0%</div>
              </div>
              <div className="rounded-2xl border border-line bg-tint-soft px-4 py-4">
                <div className="label-xs text-zinc-500">Optimal pH</div>
                <div className="stat-value mt-1.5 text-2xl">3.2</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 px-7 pb-7">
              <Chip tone="solid">Green Process</Chip>
              <Chip>Acidithiobacillus</Chip>
              <Chip>Low-Grade Ore</Chip>
            </div>
          </section>
        </div>

        <NextModule
          fromLabel="Modul Berikutnya · 05"
          to={{
            num: "05",
            title: "Kelimpahan di Alam",
            blurb:
              "Distribusi Gallium di kerak bumi, mineral inang utama, dan peta cadangan dunia.",
            href: "#/kelimpahan",
            icon: "public",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
