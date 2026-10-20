import { motion } from "framer-motion";
import { User } from "lucide-react";
import { history } from "../data/gallium";

const typeStyles = {
  prediction: { label: "Prediksi", color: "text-amber-400/70", dot: "bg-amber-400/30" },
  discovery: { label: "Penemuan", color: "text-cyan-400/70", dot: "bg-cyan-400/30" },
  naming: { label: "Penamaan", color: "text-emerald-400/70", dot: "bg-emerald-400/30" },
};

export default function HistorySection() {
  return (
    <section id="history" className="py-32 lg:py-40">
      {/* MANDATORY CENTER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* CENTERED SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mx-auto max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="w-8 h-px bg-zinc-700" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-zinc-500 font-heading">
              Sejarah Penemuan
            </span>
            <span className="w-8 h-px bg-zinc-700" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200 leading-tight mb-5">
            Kisah Penemuan{" "}
            <span className="gradient-text">Galium</span>
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            Dari prediksi tabel periodik hingga penemuan spektroskopi —
            perjalanan galium adalah bukti kekuatan prediksi ilmiah.
          </p>
        </motion.div>

        {/* Timeline — CENTERED in max-w-4xl */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line — centered on large screens */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent lg:-translate-x-px" />

          <div className="space-y-24">
            {history.map((event, i) => {
              const style = typeStyles[event.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative pl-16 lg:pl-0 flex flex-col lg:flex-row items-start gap-10 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                    <span className={`text-[11px] tracking-[0.2em] uppercase font-heading ${style.color} mb-3 block`}>
                      {style.label}
                    </span>
                    <div className="text-5xl font-heading font-bold text-zinc-800 mb-3 tracking-tight">
                      {event.year}
                    </div>
                    <h3 className="font-heading text-xl font-medium text-zinc-200 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-[13px] text-zinc-500 leading-relaxed max-w-md">
                      {event.description}
                    </p>
                  </div>

                  {/* Dot with Glow — positioned at line */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 flex-shrink-0 z-10 top-2">
                    <div className={`w-3 h-3 rounded-full ${style.dot} glow-dot`} />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Portrait — centered */}
        <div className="flex justify-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8 lg:p-10 max-w-2xl w-full text-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-white/[0.06] mx-auto mb-5 flex items-center justify-center">
              <User size={28} className="text-zinc-600" strokeWidth={1} />
            </div>
            <h3 className="font-heading text-xl font-medium text-zinc-200 mb-2">
              Paul Emile Lecoq de Boisbaudran
            </h3>
            <p className="text-[11px] tracking-widest uppercase text-zinc-600 font-heading mb-5">
              1838 — 1912 &nbsp;·&nbsp; Kimiawan Prancis
            </p>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-lg mx-auto">
              Kimiawan Prancis yang terkenal karena penemuan tiga unsur kimia:
              galium (1875), samarium (1879), dan disprosium (1886). Ia
              mengembangkan metode spektroskopi yang memungkinkan identifikasi
              unsur-unsur baru.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}