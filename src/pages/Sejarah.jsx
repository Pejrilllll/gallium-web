import PageShell, {
  Wrapper,
  PageHeader,
  NextModule,
} from "../components/layout/PageShell";
import { SectionMedia } from "../components/media";

const ENTRIES = [
  {
    year: "1838",
    eyebrow: "Latar Belakang",
    title: "Latar Belakang Penemu",
    body: "Paul-Émile Lecoq de Boisbaudran (1838–1912) adalah kimiawan Prancis yang bekerja di laboratorium pribadinya. Ia mengembangkan teknik spektroskopi garis api yang sangat halus — kemampuan yang kelak menjadi kunci deteksi unsur baru.",
    chips: ["FRANSIA · PRIVATE LAB", "PIONIR // 1838", "SPEKTROSKOPI"],
    images: [
      {
        src: "/assets/sejarah/section1.jpeg",
        alt: "Potret Paul-Émile Lecoq de Boisbaudran, kimiawan Prancis penemu gallium",
        fit: "contain",
      },
    ],
    mediaBadge: "ARSIP · LECOQ",
    mediaCaption: "Paul-Émile Lecoq de Boisbaudran (1838–1912)",
    side: "left",
  },
  {
    year: "1875",
    eyebrow: "Momen Penemuan",
    title: "Momen Penemuan dan Asal Bijih",
    body: "Pada 27 Agustus 1875, Lecoq mengamati dua garis ungu tajam pada spektrum sampel bijih seng dari Pierrefitte, Pyrenees. Ia melaporkannya menggunakan spektrograf Freiburg dan menamai unsur baru berdasarkan garis 403.3 & 417.2 nm.",
    chips: ["PIERREFITTE, PYRENEES", "SPEKTROGRAF FREIBURG", "403.3 & 417.2 nm"],
    images: [
      {
        src: "/assets/sejarah/section2.png",
        alt: "Diagram serapan dan emisi unsur — spektrum garis diagnostik 400–700 nm",
      },
      {
        src: "/assets/sejarah/section2(2).jpg",
        alt: "Spesimen bijih sfalerit (ZnS) dari Pierrefitte, Pyrenees — sumber sampel penemuan",
      },
    ],
    mediaBadge: "SPEKTROGRAF · 1875",
    mediaCaption: "Spektrum Garis Ungu & Bijih Seng Pierrefitte (2 foto)",
    side: "right",
  },
  {
    year: "1875",
    eyebrow: "Isolasi Logam",
    title: "Isolasi Logam Murni",
    body: "Pada November 1875, Lecoq mengisolasi logam murni melalui elektrolisis larutan GaCl₃ dalam asam klorida. Massa pertama yang diperoleh hanya 3.4 mg — cukup untuk menentukan titik leleh dan sifat dasarnya, dan segera dikirim ke Académie des Sciences.",
    chips: ["NOVEMBER 1875", "ELEKTROLISIS HCl", "3.4 mg MURNI"],
    images: [
      {
        src: "/assets/sejarah/section3.jpg",
        alt: "Ukiran bersejarah alat elektrolisis — sel Hoffman pemisahan gas H₂ dan O₂",
        fit: "contain",
      },
      {
        src: "/assets/sejarah/section3(2).jpg",
        alt: "Ukiran laboratorium kimia abad ke-19 — adegan kerja isolasi logam",
        fit: "contain",
      },
    ],
    mediaBadge: "ELEKTROLISIS · 1875",
    mediaCaption: "Elektrolisis GaCl₃ & Laboratorium Lecoq (2 foto)",
    side: "left",
  },
  {
    year: "1875",
    eyebrow: "Penamaan Unsur",
    title: "Pemberian Nama dan Kekocakan dengan Mendeleev",
    body: "Lecoq menamai unsur itu Gallium dari 'Gallia' (nama Latin Prancis), sekaligus merujuk namanya sendiri. Mendeleev menyebutnya 'eka-aluminium' jauh sebelum ditemukan — dan properti Gallium cocok hampir persis dengan prediksinya, meresmikan tabel periodik.",
    chips: ["GALLIA / FRANCE", "EKA-ALUMINIUM", "Simbol Ga · Z=31"],
    images: [
      {
        src: "/assets/sejarah/section4.jpg",
        alt: "Tabel periodik asli Mendeleev — 'Periodische Gesetzmässigkeit der Elemente' dengan prediksi Ga=68",
        fit: "contain",
      },
      {
        src: "/assets/sejarah/section4(2).jpg",
        alt: "Potret Dmitri Ivanovich Mendeleev (1834–1907), perancang tabel periodik",
        fit: "contain",
      },
    ],
    mediaBadge: "MENDELEEV · EKA-AL",
    mediaCaption: "Tabel Periodik Asli & Potret Mendeleev (2 foto)",
    side: "right",
  },
];

function GhostYear({ year, side }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-8 z-0 select-none ${
        side === "left" ? "left-0 md:left-[-2%]" : "right-0 md:right-[-2%]"
      }`}
    >
      <div className="year-ghost text-[clamp(5.5rem,16vw,11rem)]">{year}</div>
    </div>
  );
}

export default function Sejarah() {
  return (
    <PageShell activeId="sejarah">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 06 · Kronik Penemuan"
          titleTop="Kisah Penemuan"
          titleAccent="Gallium"
          lead="Unsur yang lebih dulu diprediksi daripada ditemukan. Dari ketajaman spektroskopi seorang kimiawan Prancis hingga konfirmasi tabel periodik Mendeleev — empat momen yang membentuk sejarah Gallium."
          meta={["2 MIN READ", "PREDIKSI 1869 · MENDELEEV", "DIKONFIRMASI 27 AGUSTUS 1875"]}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="timeline-line absolute left-4 top-0 hidden h-full md:left-1/2 md:block md:-translate-x-1/2" />
          {/* Left line (mobile) */}
          <div className="timeline-line absolute left-3 top-0 h-full md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {ENTRIES.map((e) => {
              const isLeft = e.side === "left";
              return (
                <div key={e.title} className="relative">
                  <GhostYear year={e.year} side={e.side} />

                  {/* Dot */}
                  <div className="absolute left-3 top-2 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div className="timeline-dot" />
                  </div>

                  <div
                    className={`relative z-10 grid gap-6 md:grid-cols-2 md:gap-16 ${
                      isLeft ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* Content */}
                    <div className={`pl-10 md:pl-0 ${isLeft ? "md:pr-4" : "md:pl-4"} md:[direction:ltr]`}>
                      <div className="pill bg-zinc-100 inline-flex px-3.5 py-1.5 text-[10px] font-medium text-zinc-900">
                        {e.eyebrow}
                      </div>
                      <h2 className="font-display mt-4 text-2xl font-semibold leading-tight text-zinc-100 md:text-[2rem]">
                        {e.title}
                      </h2>
                      <p className="body-copy mt-4 text-sm md:text-[0.975rem]">{e.body}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {e.chips.map((c) => (
                          <span key={c} className="pill pill-glass px-3 py-1.5 text-[9px]">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Media */}
                    <div className={`pl-10 md:pl-0 ${isLeft ? "md:pl-4" : "md:pr-4"} md:[direction:ltr]`}>
                      <SectionMedia
                        images={e.images}
                        badge={e.mediaBadge}
                        caption={e.mediaCaption}
                        aspect="aspect-video"
                        fit="cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats bar */}
        <section className="module-card mt-20 overflow-hidden">
          <div className="grid gap-px bg-tint-strong sm:grid-cols-3">
            {[
              ["Atomic Mass Confirmed", "69.723", "u · Standar IUPAC"],
              ["Spectral Violet Lines", "403.3 & 417.2", "nm · Garis diagnostik"],
              ["First Isolated Mass", "3.4", "mg · November 1875"],
            ].map(([a, b, c]) => (
              <div key={a} className="bg-trough px-7 py-8">
                <div className="label-xs text-zinc-500">{a}</div>
                <div className="stat-value mt-3 text-3xl md:text-4xl">{b}</div>
                <div className="mt-2 text-xs text-zinc-500">{c}</div>
              </div>
            ))}
          </div>
        </section>

        <NextModule
          fromLabel="Modul Berikutnya · 07"
          to={{
            num: "07",
            title: "Reaksi-reaksi Gallium",
            blurb:
              "Oksidasi, reaksi halogen, pelarutan asam, dan gejala kepasaian terhadap asam nitrat pekat.",
            href: "#/reaksi",
            icon: "bolt",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
