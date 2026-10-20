import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { elementInfo } from "../data/gallium";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(113,113,122,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.04)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(113,113,122,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-zinc-500 font-heading">
                Unsur Kimia №31
              </span>
            </div>

            <h1 className="font-heading font-bold leading-[0.9] tracking-tight mb-8">
              <span className="block text-7xl sm:text-8xl lg:text-9xl gradient-text-bright">
                Galium
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-4 max-w-lg">
              {elementInfo.tagline}
            </p>

            <p className="text-base text-zinc-600 leading-relaxed max-w-lg mb-12">
              Unsur kimia dengan simbol <span className="text-zinc-400 font-medium">Ga</span> dan nomor atom{" "}
              <span className="text-zinc-400 font-medium">31</span>. Ditemukan oleh Paul Emile Lecoq de Boisbaudran
              pada tahun 1875 — logam lunak keperakan dengan sifat yang menakjubkan.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#properties" className="btn-melt px-8 py-3.5 rounded-xl text-sm">
                Jelajahi Sifat
              </a>
              <a
                href="#history"
                className="px-8 py-3.5 rounded-xl text-sm text-zinc-500 border border-white/[0.06] hover:border-white/[0.12] hover:text-zinc-300 transition-all duration-400 font-heading"
              >
                Sejarah Penemuan
              </a>
            </div>
          </motion.div>

          {/* Right: Element Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(113,113,122,0.08)_0%,transparent_70%)] blur-xl" />

              <div className="relative glass-card p-8 sm:p-10 w-[340px] sm:w-[380px]">
                {/* Top Meta */}
                <div className="flex justify-between items-start mb-8">
                  <div className="text-left">
                    <div className="text-[11px] tracking-widest text-zinc-600 font-heading">31</div>
                    <div className="text-[11px] tracking-widest text-zinc-700 font-heading mt-0.5">PERIOD 4</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] tracking-widest text-zinc-600 font-heading">p-BLOCK</div>
                    <div className="text-[11px] tracking-widest text-zinc-700 font-heading mt-0.5">GROUP 13</div>
                  </div>
                </div>

                {/* Symbol */}
                <div className="text-center mb-6">
                  <div className="shimmer text-[120px] sm:text-[140px] font-heading font-bold leading-none tracking-tighter">
                    Ga
                  </div>
                </div>

                {/* Name & Mass */}
                <div className="text-center mb-10">
                  <div className="text-2xl font-heading font-medium text-zinc-300 tracking-wide mb-1">
                    Galium
                  </div>
                  <div className="text-sm text-zinc-600 font-heading tracking-wider">
                    {elementInfo.atomicMass} u
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Titik Leleh", val: "29,76°C" },
                    { label: "Kategori", val: "Logam" },
                    { label: "Densitas", val: "5,91 g/cm³" },
                    { label: "Konfigurasi", val: "[Ar]3d¹⁰4s²4p¹" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/[0.02] rounded-xl p-3.5 text-center border border-white/[0.04]"
                    >
                      <div className="text-[10px] tracking-widest uppercase text-zinc-600 font-heading mb-1.5">
                        {s.label}
                      </div>
                      <div className="text-xs font-medium text-zinc-400 font-heading">
                        {s.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Melting Indicator */}
                <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex justify-between text-[10px] tracking-wider text-zinc-600 font-heading mb-3">
                    <span>0°C</span>
                    <span>SUHU TUBUH 37°C</span>
                    <span>100°C</span>
                  </div>
                  <div className="temp-bar mb-3" />
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" />
                    <span className="text-[11px] text-zinc-500">
                      Meleleh pada <span className="text-cyan-400/80 font-medium">29,76°C</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 font-heading">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}