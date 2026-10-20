import PageShell, {
  Wrapper,
  PageHeader,
  Eyebrow,
  NextModule,
} from "../components/layout/PageShell";
import { EquationRow } from "../components/media";

function PassivityRow({ label, value, note }) {
  return (
    <div className="rounded-2xl border border-line bg-tint-soft px-4 py-3.5">
      <div className="label-xs text-zinc-500">{label}</div>
      <div className="font-heading mt-1.5 text-sm text-zinc-100">{value}</div>
      {note && <div className="mt-1 text-[11px] text-zinc-400">{note}</div>}
    </div>
  );
}

export default function Reaksi() {
  return (
    <PageShell activeId="reaksi">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 07 · Reaktivitas Kimia"
          titleTop="Reaksi"
          titleAccent="Kimia Gallium"
          lead="Gallium bersifat reaktif namun terkendali: ia teroksidasi perlahan, membentuk senyawa trivalen dengan halogen, melarut dalam asam encer, dan menjadi pasif di hadapan asam nitrat pekat."
          meta={["OKSIDASI TRIVALEN", "HIDROLISIS", "DISSOLUSI ASAM", "KEPASAIFAN"]}
        />

        {/* ── Top row: two cards ── */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* #01 Halogen / Oksigen / Kalkogen */}
          <section className="module-card flex flex-col">
            <div className="px-7 pt-7">
              <Eyebrow num="01" label="Oxidation & Trivalent Synthesis" />
              <h2 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100 md:text-[2rem]">
                1. Reaksi dengan Halogen, Oksigen, dan Kalkogen
              </h2>
              <p className="body-copy mt-3 text-sm">
                Pada pemanasan, Gallium bereaksi dengan oksigen membentuk gallium oksida
                stabil. Halogen menghasilkan gallium trihalida, sedangkan kalkogen
                membentuk sulfida dan senyaku analog.
              </p>
            </div>

            <div className="mt-6 space-y-2.5 px-7 pb-7">
              <EquationRow
                eq="4Ga + 3O₂ → 2Ga₂O₃"
                tag="Oxide Formation"
                tone="hot"
              />
              <EquationRow
                eq="2Ga + 3X₂ → 2GaX₃  (X = Cl, Br, I)"
                tag="Halogenation"
              />
              <EquationRow
                eq="2Ga + 3S → Ga₂S₃"
                tag="Chalcogenide"
              />
            </div>

            <div className="mt-auto border-t border-line px-7 py-5">
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Oksida", "Ga₂O₃"],
                  ["Klorida", "GaCl₃"],
                  ["Sulfida", "Ga₂S₃"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="rounded-xl border border-line bg-tint-soft px-3 py-2.5 text-center"
                  >
                    <div className="label-xs text-zinc-500">{a}</div>
                    <div className="eq mt-1 text-sm text-zinc-200">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* #03 Passivity */}
          <section className="module-card flex flex-col">
            <div className="px-7 pt-7">
              <Eyebrow num="03" label="Passivity & Surface Passivation" />
              <h2 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100 md:text-[2rem]">
                3. Gejala Kepasaian (Passivity) terhadap Asam Nitrat
              </h2>
              <p className="body-copy mt-3 text-sm">
                Berbeda dari reaksi asam kuat umumnya, Gallium menjadi pasif di hadapan
                asam nitrat pekat dan panas. Lapisan oksida yang rapat membentuk film
                protektif dan memperlambat laju pelarutan hingga nyaris nol.
              </p>
            </div>

            <div className="mt-6 space-y-2.5 px-7">
              <PassivityRow
                label="Mekanisme"
                value="Ga₂O₃ Passivation Film"
                note="Coherent & Dense"
              />
              <PassivityRow
                label="Reagen"
                value="Hot Conc. HNO₃"
                note="Asam nitrat pekat panas"
              />
              <PassivityRow
                label="Laju Korosi"
                value="~0 mm/yr"
                note="Passivated Surface"
              />
            </div>

            <div className="mt-auto px-7 pb-7 pt-6">
              <div className="amber-box px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[22px] text-zinc-300">
                    verified
                  </span>
                  <div>
                    <div className="label-xs text-zinc-200">Passivation Confirmed</div>
                    <div className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                      Perilaku analog dengan kromium dan aluminium — pembentukan lapisan
                      oksida inert yang tidak larut kembali dalam medium yang sama.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── Bottom: full-width acid + video card ── */}
        <section className="module-card mt-8 overflow-hidden">
          <div className="px-7 pt-7 md:px-10">
            <Eyebrow num="02" label="Acid Dissolution & Reductant Dynamics" />
            <h2 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100 md:text-[2rem]">
              2. Reaksi dengan Asam Encer dan Asam Sulfat Pekat Panas
            </h2>
            <p className="body-copy mt-3 max-w-3xl text-sm">
              Dalam asam encer, Gallium melarut dengan efervescen gas hidrogen. Dengan
              asam sulfat pekat panas, ia mereduksi sulfur menjadi sulfur dioksida —
              reaksi pelepasan gas yang dramatis dan merupakan salah satu demonstrasi
              klasik laboratorium.
            </p>
          </div>

          {/* Text LEFT on desktop, 9:16 Shorts RIGHT; stacks on mobile */}
          <div className="flex flex-col gap-8 px-7 py-8 md:px-10 lg:flex-row lg:items-start lg:gap-12">
            {/* Equations + chips */}
            <div className="min-w-0 flex-1 space-y-3">
              <div className="label-xs text-zinc-500">Reaksi Utama</div>

              <EquationRow
                eq="2Ga + 6H⁺ + 12H₂O → 2[Ga(H₂O)₆]³⁺ + 3H₂↑"
                tag="Effervescence"
                tone="hot"
              />
              <EquationRow
                eq="2Ga + 6H₂SO₄ (pekat, panas) → Ga₂(SO₄)₃ + 3SO₂↑ + 6H₂O"
                tag="Gas Release"
              />

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="panel-soft px-4 py-4">
                  <div className="label-xs text-zinc-500">Gas (encer)</div>
                  <div className="stat-value mt-1.5 text-2xl">H₂</div>
                  <div className="mt-1 text-[11px] text-zinc-500">Efervescence</div>
                </div>
                <div className="panel-soft px-4 py-4">
                  <div className="label-xs text-zinc-500">Gas (pekat)</div>
                  <div className="stat-value mt-1.5 text-2xl">SO₂</div>
                  <div className="mt-1 text-[11px] text-zinc-500">Reduced Sulfur</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="pill bg-zinc-100 px-3 py-1.5 text-[10px] font-medium text-zinc-900">
                  Reductant
                </span>
                <span className="pill pill-glass px-3 py-1.5 text-[10px]">Trivalent Ion</span>
                <span className="pill pill-glass px-3 py-1.5 text-[10px]">
                  [Ga(H₂O)₆]³⁺
                </span>
              </div>
            </div>

            {/* YouTube Shorts — vertical 9:16, height-capped so it never dominates */}
            <figure className="panel-media w-full shrink-0 lg:w-auto">
              <div className="flex items-center justify-center px-4 py-4">
                <div className="mx-auto aspect-[9/16] max-h-[500px] w-[281px] max-w-full overflow-hidden rounded-xl lg:mx-0">
                  <iframe
                    src="https://www.youtube.com/embed/FSRqu2whQ40"
                    title="YouTube Shorts player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover rounded-xl"
                  ></iframe>
                </div>
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
                <div className="flex min-w-0 items-start gap-2">
                  <span className="material-symbols-outlined shrink-0 text-[16px] text-zinc-500">
                    smart_display
                  </span>
                  <span className="label-xs text-zinc-400">
                    Reaksi Gallium dengan Asam — Demonstrasi Laboratorium (YouTube Shorts)
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/shorts/FSRqu2whQ40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ext-link shrink-0"
                  title="YouTube"
                >
                  <span>YouTube</span>
                  <span className="material-symbols-outlined text-[13px]">
                    open_in_new
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Completion — all 7 core modules done */}
        <NextModule
          fromLabel="Modul Lengkap · Seluruh 7 Modul Eksplorasi Selesai"
          to={{
            num: "00",
            title: "Learning Hub",
            blurb:
              "Anda telah menelusuri sifat fisik, kimia, aplikasi, metode produksi, kelimpahan alam, sejarah penemuan, dan reaktivitas Gallium. Kembali ke peta eksplorasi.",
            href: "#/",
            icon: "space_dashboard",
          }}
        />

        {/* Bonus — 3D interactive module (tighter gap so it reads as secondary) */}
        <NextModule
          mt="mt-8"
          fromLabel="Bonus · Modul Tambahan"
          to={{
            num: "08",
            title: "Simulasi 3D Sel Interaktif",
            blurb:
              "Sel 3D interaktif: struktur atom, kisi ortorombik, dan transisi fase.",
            href: "#/simulasi-3d",
            icon: "deployed_code",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
