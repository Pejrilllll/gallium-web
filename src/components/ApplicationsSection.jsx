import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Lightbulb, Stethoscope, Wrench, ExternalLink } from "lucide-react";
import { applications } from "../data/gallium";

const iconMap = { Cpu, Lightbulb, Stethoscope, Wrench };

export default function ApplicationsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="applications" className="py-32 lg:py-40">
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
              Aplikasi & Kegunaan
            </span>
            <span className="w-8 h-px bg-zinc-700" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200 leading-tight mb-5">
            Peran <span className="gradient-text">Galium</span>{" "}
            dalam Teknologi
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            Dari semikonduktor hingga kedokteran, galium memainkan peran penting
            dalam berbagai bidang teknologi modern.
          </p>
        </motion.div>

        {/* Tabs — centered */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {applications.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-heading tracking-wide transition-all duration-400 ${
                  activeTab === i
                    ? "bg-white/[0.06] text-zinc-200 border border-white/[0.1]"
                    : "bg-transparent text-zinc-600 border border-transparent hover:text-zinc-400 hover:border-white/[0.04]"
                }`}
              >
                {Icon && <Icon size={15} strokeWidth={1.5} />}
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
          >
            {applications[activeTab].items.map((item, i) => {
              const CatIcon = iconMap[applications[activeTab].icon];
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-6 lg:p-7 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      {CatIcon && <CatIcon size={16} className="text-zinc-500" strokeWidth={1.5} />}
                    </div>
                    <h3 className="font-heading font-medium text-zinc-200 text-[15px]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed flex-1 mb-5">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-white/[0.04]">
                    <div className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-heading mb-1.5">
                      Penggunaan Utama
                    </div>
                    <p className="text-[13px] text-zinc-400">{item.use}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Video — centered, constrained */}
        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="glass-card p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <Lightbulb size={16} className="text-zinc-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-zinc-200 text-sm">
                    Video Demonstrasi
                  </h3>
                  <p className="text-[11px] text-zinc-600">Sifat Unik Galium</p>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-void-light border border-white/[0.04]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LI2p6lFj0QI"
                  title="Sifat Unik Galium"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}