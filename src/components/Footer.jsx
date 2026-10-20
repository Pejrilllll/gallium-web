import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { references } from "../data/gallium";

export default function Footer() {
  return (
    <footer className="relative py-24 border-t border-white/[0.04]">
      {/* MANDATORY CENTER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={16} className="text-zinc-600" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.15em] uppercase text-zinc-500 font-heading">
              Daftar Referensi
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {references.map((ref, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-zinc-700 font-mono text-[10px] mt-1 flex-shrink-0 w-5 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[12px] text-zinc-600 leading-relaxed">
                  {ref}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="section-divider mb-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-white/[0.06]">
              <span className="font-heading font-bold text-[11px] text-zinc-400">Ga</span>
            </div>
            <div>
              <div className="text-sm font-heading font-medium text-zinc-400 tracking-wide">
                Pembelajaran Unsur Galium
              </div>
              <div className="text-[10px] tracking-wider text-zinc-700 font-heading uppercase">
                Interaktif · 2025
              </div>
            </div>
          </div>

          <div className="text-[11px] text-zinc-700 text-center sm:text-right leading-relaxed">
            <p>Dibuat untuk pembelajaran kimia interaktif</p>
            <p className="mt-0.5">
              Berdasarkan &quot;Tabel Periodik Unsur Kimia Galium&quot; oleh Nawwafa Azhar
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}