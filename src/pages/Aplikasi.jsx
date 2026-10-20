import PageShell, {
  Wrapper,
  PageHeader,
  Eyebrow,
  NextModule,
} from "../components/layout/PageShell";
import { ImageEmbed, ImageCarousel } from "../components/media";

function AppCard({ eyebrow, icon, title, children, media, metaLeft, metaRight, body }) {
  return (
    <article className="module-card flex h-full flex-col overflow-hidden">
      <div className="flex items-start gap-3 px-6 pt-6">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-tint">
          <span className="material-symbols-outlined text-[22px] text-zinc-300">{icon}</span>
        </div>
        <div>
          <Eyebrow num={eyebrow.num} label={eyebrow.label} />
          <h3 className="font-display mt-2 text-xl font-semibold leading-tight text-zinc-100 md:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="px-6 pt-5">{media}</div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <p className="body-copy text-sm">{body}</p>
        {children}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          <div className="rounded-2xl border border-line bg-tint-soft px-3.5 py-3">
            <div className="label-xs text-zinc-500">{metaLeft.label}</div>
            <div className="stat-value mt-1 text-lg">{metaLeft.value}</div>
          </div>
          <div className="rounded-2xl border border-line bg-tint-soft px-3.5 py-3">
            <div className="label-xs text-zinc-500">{metaRight.label}</div>
            <div className="stat-value mt-1 text-lg">{metaRight.value}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Aplikasi() {
  return (
    <PageShell activeId="aplikasi">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 03 · Rekayasa Material"
          titleTop="Aplikasi &"
          titleAccent="Kegunaan Gallium"
          lead="Empat ranah utama yang mengubah Gallium dari kuriositas laboratorium menjadi material strategis: termometri cair, semikonduktor berkecepatan tinggi, optoelektronik biru, dan fisika partikel bawah tanah."
          meta={["GALINSTAN", "GaAs", "GaN", "DETEKSI NEUTRINO"]}
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* 1 — Galinstan */}
          <AppCard
            eyebrow={{ num: "01", label: "Paduan Cair" }}
            icon="thermostat"
            title="Termometer dan Paduan Logam"
            media={
              <ImageEmbed
                src="/assets/aplikasi/termometer-paduan.webp"
                alt="Termometer klinis kaca pada meja kayu — aplikasi termometri paduan Gallium nir-raksa"
                badge="TERMOMETRI"
                caption="Termometer Klinis — Aplikasi Paduan Galinstan Nir-Raksa"
                fit="contain"
              />
            }
            body="Galinstan (Ga–In–Sn) adalah paduan cair nir-raksa dengan titik leleh −19°C. Ia menggantikan raksa pada termometer medis, pasta termal berperforma tinggi, dan cairan transmisi panas presisi."
            metaLeft={{ label: "Melting Point", value: "−19°C" }}
            metaRight={{ label: "Komposisi", value: "68.5% Ga" }}
          >
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["Ga", "68.5%"],
                ["In", "21.5%"],
                ["Sn", "10.0%"],
              ].map(([el, pct]) => (
                <div
                  key={el}
                  className="rounded-xl border border-line bg-tint-soft px-3 py-2 text-center"
                >
                  <div className="font-heading text-xs text-zinc-300">{el}</div>
                  <div className="font-heading mt-0.5 text-sm tabular-nums text-zinc-100">{pct}</div>
                </div>
              ))}
            </div>
          </AppCard>

          {/* 2 — Semikonduktor */}
          <AppCard
            eyebrow={{ num: "02", label: "Semikonduktor III-V" }}
            icon="memory"
            title="Semikonduktor dan Perangkat Elektronik"
            media={
              <ImageCarousel
                images={[
                  {
                    src: "/assets/aplikasi/semikonduktor-1.jpg",
                    alt: "Wafer semikonduktor Gallium Arsenida berwarna nila",
                  },
                  {
                    src: "/assets/aplikasi/semikonduktor-2.png",
                    alt: "Struktur kristal zinc blende GaAs — atom gallium dan arsenik",
                  },
                  {
                    src: "/assets/aplikasi/semikonduktor-3.webp",
                    alt: "Koleksi wafer semikonduktor GaAs dalam kaset cleanroom",
                  },
                ]}
                badge="GaAs WAFER"
                caption="Wafer GaAs, Struktur Zinc Blende, dan Koleksi Wafer (3 foto)"
                aspect="aspect-[4/3]"
                fit="contain"
              />
            }
            body="Gallium Arsenida (GaAs) memiliki mobilitas elektron jauh melampaui silikon dan celah pita langsung, menjadikannya standar industri untuk RF frekuensi tinggi, sel surya efisiensi tinggi, dan laser dioda."
            metaLeft={{ label: "Frekuensi Kerja", value: "250 GHz" }}
            metaRight={{ label: "Electron Mobility", value: "8500 cm²/V·s" }}
          >
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-line bg-tint-soft px-3 py-2">
                <div className="label-xs text-zinc-500">Bandgap</div>
                <div className="font-heading mt-1 text-sm text-zinc-100">3.42 eV · Direct</div>
              </div>
              <div className="rounded-xl border border-line bg-tint-soft px-3 py-2">
                <div className="label-xs text-zinc-500">Lattice</div>
                <div className="font-heading mt-1 text-sm text-zinc-100">Zinc Blende</div>
              </div>
            </div>
          </AppCard>

          {/* 3 — Optoelektronik */}
          <AppCard
            eyebrow={{ num: "03", label: "Fotonik & Fosfor" }}
            icon="lightbulb"
            title="Optoelektronik dan Fosfor"
            media={
              <ImageEmbed
                src="/assets/aplikasi/optoelektronik.png"
                alt="Mikrochip optoelektronik biru berpendar pada papan sirkuit"
                badge="GaN · OPTOELEKTRONIK"
                caption="Chip Optoelektronik — Emisi Fotonik GaN pada Papan Sirkuit"
                fit="contain"
              />
            }
            body="Nitrida Gallium (GaN) merevolusi pencahayaan LED biru dan penyimpanan optik Blu-ray. Fosfor MgGa₂O₄:Mn²⁺ yang ditemukan berbasis Gallium menjadi dasar layar fluoresen modern — inovasi yang meraih Nobel Fisika 2014."
            metaLeft={{ label: "Panjang Gelombang", value: "405 nm" }}
            metaRight={{ label: "Nobel Fisika", value: "2014" }}
          >
            <div className="mt-4 space-y-2">
              {[
                ["GaN Blue LED", "Solid-state lighting"],
                ["405nm Blu-ray", "Optical storage"],
                ["MgGa₂O₄:Mn²⁺", "Phosphor host lattice"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-tint-soft px-3.5 py-2.5"
                >
                  <span className="font-heading text-xs text-zinc-100">{a}</span>
                  <span className="label-xs text-zinc-500">{b}</span>
                </div>
              ))}
            </div>
          </AppCard>

          {/* 4 — Eksperimen Ilmiah */}
          <AppCard
            eyebrow={{ num: "04", label: "Fisika Partikel" }}
            icon="flare"
            title="Eksperimen Ilmiah: Deteksi Neutrino"
            media={
              <ImageCarousel
                images={[
                  {
                    src: "/assets/aplikasi/neutrino-1.jpg",
                    alt: "Skema sistem reaktor kimia dan target galium eksperimen GALLEX",
                  },
                  {
                    src: "/assets/aplikasi/neutrino-2.jpg",
                    alt: "Perangkat keras detektor neutrino GALLEX — target galium 2-zona dan kalorimeter",
                  },
                ]}
                badge="GALLEX · GRAN SASSO"
                caption="Skema Reaktor GALLEX dan Target Galium 2-Zona (2 foto)"
                aspect="aspect-[4/3]"
                fit="contain"
              />
            }
            body="Eksperimen GALLEX di laboratorium bawah tanah Gran Sasso menggunakan 30.3 ton GaCl₃ untuk menangkap neutrino matahari melalui reaksi ⁷¹Ga(νₑ,e⁻)⁷¹Ge — detektor neutrino radio-kimia paling sensitif pada masanya."
            metaLeft={{ label: "Massa Detektor", value: "30.3 Ton" }}
            metaRight={{ label: "Kedalaman", value: "1,400 m" }}
          >
            <div className="eq mt-4 rounded-2xl border border-line bg-tint-soft px-4 py-3 text-[13px] text-zinc-100">
              ⁷¹Ga (νₑ, e⁻) ⁷¹Ge
            </div>
          </AppCard>
        </div>

        <NextModule
          fromLabel="Modul Berikutnya · 04"
          to={{
            num: "04",
            title: "Cara Pembuatan Gallium",
            blurb:
              "Diagram proses Bayer, ekstraksi dari limbah seng, dan metode alternatif produksi Gallium.",
            href: "#/cara-pembuatan",
            icon: "factory",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
