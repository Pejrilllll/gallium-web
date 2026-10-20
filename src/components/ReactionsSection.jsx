import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Factory, FlaskConical, Layers, ChevronDown } from "lucide-react";
import { abundanceAndProduction } from "../data/gallium";

const panels = [
  {
    key: "kelimpahan",
    icon: Globe,
    title: abundanceAndProduction.kelimpahan.title,
    content: abundanceAndProduction.kelimpahan.content,
  },
  {
    key: "produksi",
    icon: Factory,
    title: abundanceAndProduction.produksi.title,
    content: abundanceAndProduction.produksi.content,
  },
  {
    key: "reaksi",
    icon: FlaskConical,
    title: abundanceAndProduction.reaksi.title,
    isReaction: true,
  },
  {
    key: "galinstan",
    icon: Layers,
    title: abundanceAndProduction.galinstan.title,
    content: abundanceAndProduction.galinstan.content,
  },
];

function AccordionPanel({ panel, isOpen, onToggle }) {
  const Icon = panel.icon;
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-6 lg:p-7 text-left group"
      >
        <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
          <Icon size={17} className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-medium text-zinc-200 text-[15px]">
            {panel.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-600"
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-7 pb-7 pl-[4.25rem]">
              {panel.isReaction ? (
                <div className="space-y-3">
                  {abundanceAndProduction.reaksi.reactions.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]"
                    >
                      <div className="font-mono text-sm text-cyan-400/70 mb-1.5">
                        {r.equation}
                      </div>
                      <p className="text-[12px] text-zinc-600">{r.description}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  {panel.content}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ReactionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="reactions" className="py-32 lg:py-40">
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
              Kelimpahan & Reaksi
            </span>
            <span className="w-8 h-px bg-zinc-700" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200 leading-tight mb-5">
            Kelimpahan &{" "}
            <span className="gradient-text">Reaksi Kimia</span>
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            Pelajari kelimpahan galium di alam, proses produksinya, dan
            reaksi-reaksi kimia pentingnya.
          </p>
        </motion.div>

        {/* Accordion — centered in max-w-3xl */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {panels.map((panel, i) => (
              <AccordionPanel
                key={panel.key}
                panel={panel}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>

          {/* Amfoterik Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 p-6 lg:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
          >
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400/30 mt-2 flex-shrink-0 glow-dot" />
              <div>
                <h4 className="font-heading font-medium text-zinc-200 text-sm mb-2">
                  Sifat Amfoterik
                </h4>
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  Galium bersifat <span className="text-emerald-400/70 font-medium">amfoterik</span> —
                  dapat bereaksi baik dengan asam maupun basa. Dalam asam membentuk
                  kation Ga³⁺, dalam basa membentuk anion gallat [Ga(OH)₄]⁻.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}