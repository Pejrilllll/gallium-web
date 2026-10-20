import PageShell, { Wrapper, PageHeader, Eyebrow, StatChip, NextModule } from "../components/layout/PageShell";
import {
  MediaFrame,
  ImageEmbed,
  VerticalVideoEmbed,
  SpectrumVisual,
} from "../components/media";

function ZigRow({ reverse = false, children, text, media }) {
  return (
    <section
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reverse ? "" : ""
      }`}
    >
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>{text}</div>
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>{media}</div>
      {children}
    </section>
  );
}

export default function SifatFisika() {
  return (
    <PageShell activeId="sifat-fisika">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 01 · Fisik Matriks"
          titleTop="Sifat Fisika"
          titleAccent="Gallium"
          lead="Dari anomali titik leleh 29.76°C hingga struktur kristal ortorombik dan spektrum isotop alami — lima dimensi fisik yang menjelaskan mengapa Gallium meleleh di telapak tangan."
          meta={[
            "5 PROPERSI INTI",
            "ANOMALI TITIK LELEH",
            "STRUKTUR ORTOROMBIK",
            "ISOTOPI ALAMI",
          ]}
        />

        {/* 1 — Identitas & Penampakan */}
        <ZigRow
          text={
            <div>
              <Eyebrow num="01" label="Identitas Unsur" />
              <h2 className="font-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                Identitas dan Penampakan Fisik
              </h2>
              <p className="body-copy mt-5">
                Gallium adalah logam pasca-transisi lunak dengan kilap keperakan kebiruan.
                Dalam bentuk padat murni, ia memantulkan cahaya seperti cermin basah —
                rapuh pada suhu rendah, namun mulai melunak mendekati suhu tubuh.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <StatChip label="Simbol" value="Ga" hint="Nomor atom 31" icon="token" />
                <StatChip label="Massa Atom" value="69.723 u" hint="Standar IUPAC" icon="monitor_weight" />
                <StatChip label="Konfigurasi" value="[Ar] 3d¹⁰" hint="4s² 4p¹" icon="settings_suggest" />
                <StatChip label="Kelas" value="Post-Transition" hint="Metalloid lemah" icon="category" />
              </div>
            </div>
          }
          media={
            <ImageEmbed
              src="/assets/identitas-penampakan-fisik.jpg"
              alt="Penampakan fisik Gallium — logam pasca-transisi berkilap keperakan kebiruan"
              badge="SPECIMEN · Ga INGOT"
              caption="Identitas dan Penampakan Fisik Gallium"
              fit="cover"
            />
          }
        />

        {/* 2 — Wujud / Titik Leleh (media left) */}
        <div className="mt-20 lg:mt-28">
          <ZigRow
            reverse
            text={
              <div>
                <Eyebrow num="02" label="Wujud & Fase" />
                <h2 className="font-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                  Wujud, Titik Leleh, dan Titik Didih
                </h2>
                <p className="body-copy mt-5">
                  Titik leleh Gallium hanya 29.76°C — sedikit di atas suhu kamar — sehingga
                  meleleh di tangan manusia. Jaraknya yang ekstrem ke titik didih 2204°C
                  menjadikannya salah satu rentang cair terpanjang di antara semua unsur.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <StatChip label="Titik Leleh" value="29.76°C" hint="Meleleh di tangan" icon="thermostat" />
                  <StatChip label="Titik Didih" value="2204°C" hint="Rentang cair luas" icon="local_fire_department" />
                  <StatChip label="Rentang Cair" value="2174°C" hint="Δ T liquidus" icon="waves" />
                </div>
              </div>
            }
            media={
              <VerticalVideoEmbed
                src="https://www.youtube.com/embed/zELgQpFDUrU"
                title="Wujud, Titik Leleh, dan Titik Didih Gallium"
                badge="YOUTUBE SHORTS"
                caption="Transisi Fase Gallium — Solid → Liquid pada 29.76°C"
                href="https://www.youtube.com/shorts/zELgQpFDUrU"
                hrefLabel="YouTube"
              />
            }
          />
        </div>

        {/* 3 — Massa Jenis & Struktur */}
        <div className="mt-20 lg:mt-28">
          <ZigRow
            text={
              <div>
                <Eyebrow num="03" label="Densitas & Kisi" />
                <h2 className="font-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                  Massa Jenis dan Struktur Atom
                </h2>
                <p className="body-copy mt-5">
                  Padatan Gallium mengkristal dalam sistem ortorombik dengan pengepakan
                  yang tidak biasa — setiap atom membentuk ikatan kovalen tunggal terhadap
                  tetangga terdekatnya, menjelaskan densitas rendah dan sifat lunaknya.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <StatChip label="ρ Padat" value="5.904" hint="g/cm³ @ 20°C" icon="compress" />
                  <StatChip label="ρ Cair" value="6.095" hint="g/cm³ @ m.p." icon="opacity" />
                  <StatChip label="Jari-jari Atom" value="136 pm" hint="Kalkulasi empiris" icon="radio_button_unchecked" />
                </div>
              </div>
            }
            media={
              <ImageEmbed
                src="/assets/massa-jenis-struktur-atom.svg"
                alt="Diagram struktur kristal ortorombik dan sel unit Gallium"
                badge="KLIK KRISTAL"
                caption="Massa Jenis dan Struktur Atom — Sel Unit Ortorombik"
                fit="contain"
                lightBackdrop
              />
            }
          />
        </div>

        {/* 4 — Sifat Termal (media left) */}
        <div className="mt-20 lg:mt-28">
          <ZigRow
            reverse
            text={
              <div>
                <Eyebrow num="04" label="Termal & Perilaku" />
                <h2 className="font-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                  Sifat Termal dan Perilaku Fisik
                </h2>
                <p className="body-copy mt-5">
                  Cairan Gallium dapat didinginkan jauh di bawah titik lelehnya tanpa
                  membeku (supercooling). Saat akhirnya mengkristal, ia memuai — anomali
                  yang berbagi karakteristik dengan air, namun pada logam.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <StatChip label="Supercooling" value="Tendency" hint="Metastabil cair" icon="ac_unit" />
                  <StatChip label="Ekspansi" value="+3.1%" hint="Saat solidifikasi" icon="expand" />
                  <StatChip label="Wetting" value="Tinggi" hint="Menempel pada kaca" icon="water_drop" />
                </div>
                <div className="amber-box mt-5 flex items-start gap-3 px-4 py-3.5">
                  <span className="material-symbols-outlined text-[20px] text-zinc-300">
                    warning
                  </span>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Gallium cair meresap ke dalam pori logam lain (aluminium, baja) dan
                    menyebabkan embrittlement. Simpan dalam wadah polietilena atau kaca.
                  </p>
                </div>
              </div>
            }
            media={
              <VerticalVideoEmbed
                src="https://www.tiktok.com/embed/v2/7682125684168330510"
                title="Sifat Termal dan Perilaku Fisik Gallium"
                badge="TIKTOK"
                caption="Supercooling & Ekspansi Solidifikasi Gallium"
                href="https://www.tiktok.com/@pchemstud/video/7682125684168330510"
                hrefLabel="TikTok"
                allow="encrypted-media;"
                lite
              />
            }
          />
        </div>

        {/* 5 — Isotop & Spektrum */}
        <div className="mt-20 lg:mt-28">
          <ZigRow
            text={
              <div>
                <Eyebrow num="05" label="Isotopi & Spektrum" />
                <h2 className="font-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                  Isotop dan Reaksi Udara
                </h2>
                <p className="body-copy mt-5">
                  Dua isotop stabil mendominasi alam: ⁶⁹Ga dan ⁷¹Ga. Di udara, Gallium
                  membentuk lapisan oksida tipis Ga₂O₃ yang melindungi permukaan, dan
                  garis spektrum ungu 403.3 serta 417.2 nm menjadi sidik jari optiknya.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "⁶⁹Ga", pct: 60.11, width: 60.11 },
                    { label: "⁷¹Ga", pct: 39.89, width: 39.89 },
                  ].map((iso) => (
                    <div key={iso.label}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="label-xs text-zinc-500">
                          Isotop {iso.label}
                        </span>
                        <span className="font-heading text-xs tabular-nums text-zinc-300">
                          {iso.pct}%
                        </span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${iso.width}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <StatChip label="Isotop Total" value="25" hint="Dikenal saat ini" icon="grain" />
                  <StatChip label="Ga-69" value="60.11%" hint="Kelimpahan alami" icon="donut_small" />
                  <StatChip label="Ga-71" value="39.89%" hint="Kelimpahan alami" icon="donut_small" />
                </div>
              </div>
            }
            media={
              <MediaFrame
                badge="SPEKTROMETRI MASSA"
                caption="Profil Spektrometri Massa — Distribusi Isotop Gallium"
              >
                <SpectrumVisual />
              </MediaFrame>
            }
          />
        </div>

        <NextModule
          fromLabel="Modul Berikutnya · 02"
          to={{
            num: "02",
            title: "Sifat Kimia Gallium",
            blurb:
              "Karakteristik valensi, sifat amfoter, derajat elektropositif, dan profil toksisitas rendah.",
            href: "#/sifat-kimia",
            icon: "science",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
