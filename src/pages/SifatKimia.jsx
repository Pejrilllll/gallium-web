import PageShell, {
  Wrapper,
  PageHeader,
  Eyebrow,
  StatChip,
  NextModule,
} from "../components/layout/PageShell";
import {
  ImageEmbed,
  WideVideoEmbed,
  ImageCarousel,
} from "../components/media";

export default function SifatKimia() {
  return (
    <PageShell activeId="sifat-kimia">
      <Wrapper>
        <PageHeader
          eyebrow="Modul 02 · Matriks Kimia"
          titleTop="Sifat Kimia"
          titleAccent="Gallium"
          lead="Dari konfigurasi elektron [Ar] 3d¹⁰ 4s² 4p¹ hingga sifat amfoter dan profil toksisitas yang rendah — empat dimensi kimia yang menjelaskan reaktivitas Gallium."
          meta={["VALENSI III", "AMFOTER", "ELEKTROPOSITIF", "TOKSISITAS RENDAH"]}
        />

        {/* Bento grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* 1 — Valensi */}
          <section className="module-card overflow-hidden lg:col-span-6">
            <div className="flex items-start justify-between gap-4 px-7 pt-7">
              <div>
                <Eyebrow num="01" label="Valensi Matrix" />
                <h2 className="font-display mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-100">
                  1. Karakteristik Valensi
                </h2>
              </div>
              <div className="panel-soft shrink-0 px-3.5 py-2 text-center">
                <div className="label-xs text-zinc-500">Gallium</div>
                <div className="font-display text-xl font-semibold text-zinc-100">31</div>
              </div>
            </div>

            <div className="px-7 pt-6">
              <ImageEmbed
                src="/assets/karakteristik-valensi.png"
                alt="Karakteristik valensi dan kemiripan unsur Gallium dengan aluminium"
                badge="3d¹⁰ Core Shell Screening Matrix"
                caption="Karakteristik Valensi dan Kemiripan Unsur"
                naturalHeight
              />
            </div>

            <div className="px-7 pb-7 pt-5">
              <div className="eq rounded-2xl border border-line bg-tint-soft px-4 py-3 text-center text-sm text-zinc-100">
                ORBITAL: [Ar] 3d¹⁰ 4s² 4p¹
              </div>
              <p className="body-copy mt-4 text-sm">
                Elektron 4p tunggal mudah dilepas, menghasilkan keadaan oksidasi dominan
                +3. Ion Ga³⁺ berperilaku mirip Al³⁺ dalam larutan berair, namun dengan
                polarisasi yang sedikit lebih besar.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-line bg-tint-soft px-3 py-2.5 text-center">
                  <div className="label-xs text-zinc-500">Dominan</div>
                  <div className="eq mt-1 text-sm text-zinc-100">Ga³⁺</div>
                </div>
                <div className="rounded-xl border border-line bg-tint-soft px-3 py-2.5 text-center">
                  <div className="label-xs text-zinc-500">Stabil</div>
                  <div className="eq mt-1 text-sm text-zinc-100">Ga⁺</div>
                </div>
                <div className="rounded-xl border border-line bg-tint-soft px-3 py-2.5 text-center">
                  <div className="label-xs text-zinc-500">Valensi</div>
                  <div className="eq mt-1 text-sm text-zinc-100">I, II, III</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2 — Amfoter */}
          <section className="module-card overflow-hidden lg:col-span-6">
            <div className="px-7 pt-7">
              <Eyebrow num="02" label="Amphoteric Character" />
              <h2 className="font-display mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-100">
                2. Sifat Amfoter (Asam–Basa)
              </h2>
            </div>

            <div className="px-7 pt-6">
              <WideVideoEmbed
                src="https://www.youtube.com/embed/THWilyNWRWE"
                title="Sifat Senyawa dan Asam-Basa Gallium"
                badge="YOUTUBE"
                caption="Visualisasi Reaksi Asam-Basa & Hidrolisis Gallium Halida"
                href="https://www.youtube.com/watch?v=THWilyNWRWE"
                hrefLabel="YouTube"
              />
            </div>

            <div className="px-7 pb-7 pt-5">
              <p className="body-copy text-sm">
                Seperti aluminium, gallium oksida dan hidroksidanya bereaksi baik dengan
                asam maupun basa kuat — menghasilkan garam trivalen di kedua medium.
              </p>
              <div className="mt-5 space-y-2.5">
                <div className="eq rounded-2xl border border-line bg-tint-soft px-4 py-3 text-[13px] text-zinc-100">
                  Ga(OH)₃ + 3HCl → GaCl₃ + 3H₂O
                  <span className="label-xs ml-3 text-zinc-500">Sebagai Basa</span>
                </div>
                <div className="eq rounded-2xl border border-line bg-tint-soft px-4 py-3 text-[13px] text-zinc-100">
                  Ga(OH)₃ + NaOH → NaGaO₂ + 2H₂O
                  <span className="label-xs ml-3 text-zinc-500">Sebagai Asam</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3 — Elektropositif (wide) */}
          <section className="module-card overflow-hidden lg:col-span-12">
            <div className="px-7 pt-7 md:px-10">
              <Eyebrow num="03" label="Electropositive Nature" />
              <h2 className="font-display mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                3. Sifat Elektropositif dan Reduksi
              </h2>
              <p className="body-copy mt-3 max-w-3xl text-sm">
                Gallium bersifat elektropositif moderat — lebih reaktif dari seng namun
                lebih tenang daripada aluminium. Potensi elektrodanya yang stabil membuatnya
                andal dalam sel galvanik dan paduan amalgam.
              </p>
            </div>

            <div className="grid gap-3 px-7 py-7 md:grid-cols-3 md:px-10">
              <StatChip
                label="E° (Ga³⁺/Ga)"
                value="−0.56 V"
                hint="Potensi reduksi standar"
                icon="bolt"
              />
              <StatChip
                label="Kation Monovalen"
                value="Ga⁺"
                hint="Ditemukan pada suhu tinggi"
                icon="contrast"
              />
              <StatChip
                label="Amalgamasi"
                value="Embrittlement"
                hint="Menyerang logam ferus"
                icon="warning"
              />
            </div>
          </section>

          {/* 4 — Toksisitas (split) */}
          <section className="module-card overflow-hidden lg:col-span-12">
            <div className="grid gap-8 px-7 py-8 md:px-10 lg:grid-cols-[minmax(0,58%)_minmax(0,42%)] lg:items-center">
              <div>
                <Eyebrow num="04" label="Toxicity Profile" />
                <h2 className="font-display mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-3xl">
                  4. Toksisitas dan Keamanan
                </h2>
                <p className="body-copy mt-3 text-sm">
                  Dalam bentuk logamnya, Gallium memiliki toksisitas yang rendah terhadap
                  manusia. Senyawa garamnya dapat bersifat iritan, namun tidak terakumulasi
                  sebagai racun sistemik pada paparan lingkungan umum.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <StatChip
                    label="Toksisitas Akut"
                    value="Rendah"
                    hint="LD₅₀ tinggi pada hewan uji"
                    icon="shield"
                  />
                  <StatChip
                    label="Akumulasi"
                    value="Tidak Dominan"
                    hint="Diekskresikan ginjal"
                    icon="monitor_heart"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="pill bg-zinc-100 px-3 py-1.5 text-[10px] font-medium text-zinc-900">
                    Toksisitas: Rendah
                  </span>
                  <span className="pill pill-glass px-3 py-1.5 text-[10px]">GMP Compatible</span>
                  <span className="pill pill-glass px-3 py-1.5 text-[10px]">Non-Carcinogenic</span>
                </div>
              </div>

              <ImageCarousel
                images={[
                  { src: "/assets/bauxite/1.jpg", alt: "Spesimen bauksit — bijih utama Gallium" },
                  { src: "/assets/bauxite/2.jpg", alt: "Bauksit — mineral aluminium oksida berwarna merah" },
                  { src: "/assets/bauxite/3.jpg", alt: "Bauksit — batuan lateritik penghasil Gallium" },
                  { src: "/assets/bauxite/4.jpg", alt: "Bauksit — koleksi mineral oksida" },
                ]}
                badge="TOKSISITAS: RENDAH"
                caption="Bauksit — Mineral Bijih Utama Sumber Gallium (4 foto)"
                aspect="aspect-[4/3]"
              />
            </div>
          </section>
        </div>

        <NextModule
          fromLabel="Modul Berikutnya · 03"
          to={{
            num: "03",
            title: "Aplikasi & Kegunaan",
            blurb:
              "Galinstan, semikonduktor GaAs, optoelektronik GaN, dan eksperimen neutrino GALLEX.",
            href: "#/aplikasi",
            icon: "memory",
          }}
        />
      </Wrapper>
    </PageShell>
  );
}
