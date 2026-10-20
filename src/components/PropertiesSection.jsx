import { motion } from "framer-motion";
import {
  Sparkles, Thermometer, Flame, Scale, Sun, Diamond,
  Zap, FlaskConical, Snowflake,
} from "lucide-react";
import { physicalProperties, chemicalProperties } from "../data/gallium";

const iconMap = {
  Sparkles, Thermometer, Flame, Scale, Sun, Diamond,
  Zap, FlaskConical, Snowflake,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function PropertyCard({ item, className = "" }) {
  const Icon = iconMap[item.icon];
  return (
    <motion.div
      variants={itemVariants}
      className={`glass-card p-6 lg:p-8 ${className} group`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
          {Icon && <Icon size={18} className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500" strokeWidth={1.5} />}
        </div>
      </div>
      <div className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-heading mb-2">
        {item.title}
      </div>
      <div className="text-lg font-heading font-medium text-zinc-200 mb-3">
        {item.value}
      </div>
      <p className="text-[13px] text-zinc-500 leading-relaxed">{item.detail}</p>
    </motion.div>
  );
}

function ChemicalCard({ item }) {
  const Icon = iconMap[item.icon];
  return (
    <motion.div
      variants={itemVariants}
      className="glass-card p-6 lg:p-8 flex gap-5 items-start group"
    >
      <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
        {Icon && <Icon size={18} className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500" strokeWidth={1.5} />}
      </div>
      <div>
        <div className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 font-heading mb-1.5">
          {item.title}
        </div>
        <div className="text-base font-heading font-medium text-zinc-200 mb-2">
          {item.value}
        </div>
        <p className="text-[13px] text-zinc-500 leading-relaxed">{item.detail}</p>
      </div>
    </motion.div>
  );
}

export default function PropertiesSection() {
  return (
    <section id="properties" className="py-32 lg:py-40">
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
              Sifat Fisika & Kimia
            </span>
            <span className="w-8 h-px bg-zinc-700" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200 leading-tight mb-5">
            Sifat-Sifat{" "}
            <span className="gradient-text">Galium</span>
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            Kombinasi sifat fisika dan kimia yang unik menjadikan galium salah
            satu logam paling menarik dalam tabel periodik.
          </p>
        </motion.div>

        {/* Bento Grid — Physical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 w-full"
        >
          {physicalProperties.map((item, i) => (
            <PropertyCard key={i} item={item} className={item.span || ""} />
          ))}
        </motion.div>

        {/* Chemical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        >
          {chemicalProperties.map((item, i) => (
            <ChemicalCard key={i} item={item} />
          ))}
        </motion.div>

        {/* Fun Fact — centered */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] max-w-3xl w-full"
          >
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400/40 mt-2 flex-shrink-0 glow-dot" />
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                <span className="text-zinc-300 font-medium">Fakta Menarik:</span>{" "}
                Galium adalah salah satu dari sedikit logam yang{" "}
                <span className="text-zinc-400">mengembang saat membeku</span>{" "}
                — mirip dengan air. Sifat ini sangat langka di antara logam.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}