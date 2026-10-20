import { useRef } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { mediaReferences } from "../data/gallium";

const images = mediaReferences.filter((m) => m.type === "image");
const videos = mediaReferences.filter((m) => m.type === "video");

function ScrollRow({ children }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/carousel">
      <div ref={ref} className="scroll-container">
        {children}
      </div>
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-500 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/[0.1] hover:text-zinc-300 backdrop-blur-xl z-10"
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-500 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white/[0.1] hover:text-zinc-300 backdrop-blur-xl z-10"
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}

export default function MediaSection() {
  return (
    <section id="media" className="py-32 lg:py-40">
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
              Media & Referensi
            </span>
            <span className="w-8 h-px bg-zinc-700" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-200 leading-tight mb-5">
            Galeri <span className="gradient-text">Media</span>
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            Koleksi gambar dan video tentang galium dari berbagai sumber terpercaya.
          </p>
        </motion.div>

        {/* Images — Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon size={16} className="text-zinc-600" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.15em] uppercase text-zinc-500 font-heading">
              Gambar Wikipedia
            </span>
          </div>
          <ScrollRow>
            {images.map((img, i) => (
              <div
                key={i}
                className="scroll-item w-[300px] lg:w-[320px] glass-card overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-white/[0.02] flex items-center justify-center border-b border-white/[0.04]">
                  <div className="text-center">
                    <ImageIcon size={24} className="text-zinc-700 mx-auto mb-2" strokeWidth={1} />
                    <span className="text-[10px] tracking-wider uppercase text-zinc-700 font-heading">
                      Wikipedia
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-medium text-zinc-300 text-sm mb-1">
                    {img.title}
                  </h4>
                  <p className="text-[12px] text-zinc-600 mb-4">{img.description}</p>
                  <a
                    href={img.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors font-heading tracking-wide"
                  >
                    Lihat
                    <ExternalLink size={10} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            ))}
          </ScrollRow>
        </motion.div>

        {/* Videos — Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Play size={16} className="text-zinc-600" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.15em] uppercase text-zinc-500 font-heading">
              Video
            </span>
          </div>
          <ScrollRow>
            {videos.map((vid, i) => (
              <div
                key={i}
                className="scroll-item w-[300px] lg:w-[320px] glass-card overflow-hidden group"
              >
                <div className="aspect-video bg-white/[0.02] flex items-center justify-center border-b border-white/[0.04] relative">
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] group-hover:border-white/[0.15] transition-all duration-400">
                    <Play size={18} className="text-zinc-400 ml-0.5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] tracking-wider uppercase text-zinc-600 font-heading">
                      {vid.source}
                    </span>
                  </div>
                  <h4 className="font-heading font-medium text-zinc-300 text-sm mb-1">
                    {vid.title}
                  </h4>
                  <p className="text-[12px] text-zinc-600 mb-4">{vid.description}</p>
                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors font-heading tracking-wide"
                  >
                    Tonton
                    <ExternalLink size={10} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            ))}
          </ScrollRow>
        </motion.div>

      </div>
    </section>
  );
}