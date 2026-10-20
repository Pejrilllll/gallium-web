/** Self-contained inline-SVG media shells (offline-safe placeholders).
 *  Palette: matte slate + silver. No neon, no glow filters. */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function MediaFrame({ children, caption, badge, className = "" }) {
  return (
    <figure className={`panel-media ${className}`}>
      <div className="relative aspect-[4/3] w-full">
        {children}
        {badge && (
          <div className="absolute left-4 top-4">
            <span className="pill pill-glass px-3 py-1.5 text-[9px]">{badge}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="flex items-start gap-2 border-t border-line px-4 py-3">
          <span className="material-symbols-outlined text-[16px] text-zinc-500">photo_camera</span>
          <span className="label-xs text-zinc-400">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** Real local image (JPG/PNG/WebP) dropped into the standard media chrome.
 *  `naturalHeight` lets the image dictate its own height (no crop) — use for
 *  diagrams/tables where every pixel of content must stay visible. */
export function ImageEmbed({
  src,
  alt,
  caption,
  badge,
  aspect = "aspect-[4/3]",
  fit = "cover",
  naturalHeight = false,
  lightBackdrop = false,
  className = "",
}) {
  return (
    <figure className={`panel-media ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-xl ${
          naturalHeight ? "" : aspect
        } ${lightBackdrop ? "bg-white" : fit === "contain" ? "bg-tint-soft" : ""}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={
            naturalHeight
              ? "w-full h-auto object-contain rounded-xl"
              : `h-full w-full rounded-xl ${
                  fit === "contain" ? "object-contain" : "object-cover"
                }`
          }
        />
        {badge && (
          <div className="absolute left-4 top-4">
            <span className="pill pill-glass px-3 py-1.5 text-[9px]">{badge}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="flex items-start gap-2 border-t border-line px-4 py-3">
          <span className="material-symbols-outlined text-[16px] text-zinc-500">photo_camera</span>
          <span className="label-xs text-zinc-400">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** Vertical (9:16) short-form embed — YouTube Shorts / TikTok.
 *  Height-capped so the bento grid never blows out on desktop.
 *
 *  `lite` renders a click-to-load facade instead of mounting the iframe
 *  immediately. Use it for providers with aggressive bot/rate-limit WAFs
 *  (TikTok returns "overload-protect triggered" for cold, automated, or
 *  datacenter-IP requests). A user-initiated load is far more reliable. */
export function VerticalVideoEmbed({
  src,
  title,
  caption,
  badge,
  href,
  hrefLabel = "Buka di platform",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  lite = false,
  className = "",
}) {
  const [playing, setPlaying] = useState(!lite);

  return (
    <figure className={`panel-media relative ${className}`}>
      {badge && (
        <div className="absolute left-4 top-4 z-10">
          <span className="pill pill-glass px-3 py-1.5 text-[9px]">{badge}</span>
        </div>
      )}
      <div className="flex items-center justify-center px-4 py-4">
        <div
          className="relative h-[min(500px,70vh)] w-auto max-w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "9 / 16" }}
        >
          {playing ? (
            <iframe
              src={src}
              title={title}
              frameBorder="0"
              allow={allow}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              className="h-full w-full rounded-xl"
            />
          ) : (
            /* Lite facade — no network call until the user opts in */
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="video-facade group h-full w-full"
              aria-label={`Putar video: ${title}`}
            >
              {/* quiet technical grid, matching VideoShell's language */}
              <svg
                viewBox="0 0 180 320"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 h-full w-full opacity-50"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="lg-facade" width="22" height="22" patternUnits="userSpaceOnUse">
                    <path d="M22 0H0v22" fill="none" stroke="var(--svg-line)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="180" height="320" fill="url(#lg-facade)" />
                <circle
                  cx="90"
                  cy="150"
                  r="54"
                  fill="none"
                  stroke="var(--svg-line)"
                  strokeWidth="1"
                  strokeDasharray="5 7"
                />
                <circle cx="90" cy="150" r="30" fill="none" stroke="var(--svg-line)" strokeWidth="1" />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
                <span className="play-btn">
                  <span className="material-symbols-outlined text-[30px]">play_arrow</span>
                </span>
                <div>
                  <div className="label-xs text-zinc-500">Klik untuk memutar</div>
                  <div className="font-heading mt-1.5 text-sm leading-snug text-zinc-100">
                    {title}
                  </div>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <div className="flex min-w-0 items-start gap-2">
          <span className="material-symbols-outlined shrink-0 text-[16px] text-zinc-500">
            smart_display
          </span>
          <span className="label-xs text-zinc-400">{caption}</span>
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ext-link shrink-0"
            title={hrefLabel}
          >
            <span>{hrefLabel}</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        )}
      </figcaption>
    </figure>
  );
}

/** Widescreen (16:9) embed — standard YouTube videos. */
export function WideVideoEmbed({
  src,
  title,
  caption,
  badge,
  href,
  hrefLabel = "Buka di platform",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  className = "",
}) {
  return (
    <figure className={`panel-media ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          src={src}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow={allow}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
        {badge && (
          <div className="absolute left-4 top-4 z-10">
            <span className="pill pill-glass px-3 py-1.5 text-[9px]">{badge}</span>
          </div>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <div className="flex min-w-0 items-start gap-2">
          <span className="material-symbols-outlined shrink-0 text-[16px] text-zinc-500">
            smart_display
          </span>
          <span className="label-xs text-zinc-400">{caption}</span>
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ext-link shrink-0"
            title={hrefLabel}
          >
            <span>{hrefLabel}</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        )}
      </figcaption>
    </figure>
  );
}

/** Slide choreography for ImageCarousel. `custom` = direction (+1 next / −1 prev). */
const SLIDE_VARIANTS = {
  enter: (d) => ({ opacity: 0, x: d * 20 }),
  center: { opacity: 1, x: 0 },
  exit: (d) => ({ opacity: 0, x: d * -20 }),
};

/** Interactive image carousel — crossfade + arrows + dots + keyboard + swipe. */
export function ImageCarousel({
  images = [],
  caption,
  badge,
  aspect = "aspect-[4/3]",
  fit = "cover",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  // +1 = sliding forward, -1 = sliding backward — drives the motion.img x-offset.
  const [dir, setDir] = useState(1);
  const [touchX, setTouchX] = useState(null);
  const count = images.length;

  // Preload the other slides so a transition never pops in half-loaded.
  useEffect(() => {
    images.forEach((img) => {
      const pre = new Image();
      pre.src = img.src;
    });
  }, [images]);

  if (count === 0) return null;

  // Per-image override — portraits/documents can opt into `contain`
  // while landscape shots keep the seamless `cover` fill.
  const fitOf = (img) => img.fit ?? fit;
  const go = (i, d = 1) => {
    setDir(d);
    setIndex(((i % count) + count) % count);
  };
  const prev = () => go(index - 1, -1);
  const next = () => go(index + 1, 1);
  const goTo = (i) => go(i, i > index ? 1 : -1);

  // Touch swipe (mobile)
  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    setTouchX(null);
  };

  // Keyboard (desktop, when the carousel has focus)
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  const active = images[index];

  return (
    <figure
      className={`panel-media ${className}`}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={caption || "Image carousel"}
      onKeyDown={onKeyDown}
    >
      <div
        className={`relative w-full overflow-hidden rounded-xl ${aspect} ${
          images.some((img) => fitOf(img) === "contain") ? "bg-tint-soft" : ""
        }`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slide — Framer Motion crossfade + slide, direction-aware.
         *  Variants + `custom` (not inline objects) so the EXITING slide
         *  receives the *current* dir — AnimatePresence freezes the old
         *  child's props, so inline `exit` would use the previous dir. */}
        <AnimatePresence initial={false} custom={dir}>
          <motion.img
            key={active.src}
            src={active.src}
            alt={active.alt ?? `Slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full rounded-xl ${
              fitOf(active) === "contain"
                ? "object-contain bg-tint-soft"
                : "object-cover"
            }`}
            variants={SLIDE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            custom={dir}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </AnimatePresence>

        {badge && (
          <div className="absolute left-4 top-4 z-10">
            <span className="pill pill-glass px-3 py-1.5 text-[9px]">{badge}</span>
          </div>
        )}

        {/* Prev / Next */}
        <button
          type="button"
          onClick={prev}
          aria-label="Gambar sebelumnya"
          className="carousel-btn left-3"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Gambar berikutnya"
          className="carousel-btn right-3"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ke gambar ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-zinc-100"
                  : "w-1.5 bg-zinc-100/45 hover:bg-zinc-100/75"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute right-3 top-3 z-10">
          <span className="pill pill-glass px-2.5 py-1 text-[9px] tabular-nums">
            {index + 1} / {count}
          </span>
        </div>
      </div>

      {caption && (
        <figcaption className="flex items-start gap-2 border-t border-line px-4 py-3">
          <span className="material-symbols-outlined text-[16px] text-zinc-500">photo_library</span>
          <span className="label-xs text-zinc-400">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** Auto-detect media block: one image → static <img> embed,
 *  several → interactive carousel with prev/next arrows + dots.
 *  Per-image `fit` overrides the section default. */
export function SectionMedia({
  images = [],
  caption,
  badge,
  aspect = "aspect-video",
  fit = "cover",
  className = "",
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    const img = images[0];
    return (
      <ImageEmbed
        src={img.src}
        alt={img.alt}
        badge={badge}
        caption={caption}
        aspect={aspect}
        fit={img.fit ?? fit}
        className={className}
      />
    );
  }

  return (
    <ImageCarousel
      images={images}
      badge={badge}
      caption={caption}
      aspect={aspect}
      fit={fit}
      className={className}
    />
  );
}

export function VideoShell({
  duration = "02:45",
  current = "01:24",
  title,
  meta,
  className = "",
  tall = false,
}) {
  return (
    <figure className={`panel-media ${className}`}>
      <div className={`relative w-full bg-trough ${tall ? "aspect-[16/11]" : "aspect-[16/10]"}`}>
        {/* subtle grid */}
        <svg
          viewBox="0 0 400 250"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-40"
          aria-hidden="true"
        >
          <defs>
            <pattern id="vg" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M28 0H0v28" fill="none" stroke="var(--svg-line)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="250" fill="url(#vg)" />
          <circle
            cx="200"
            cy="115"
            r="62"
            fill="none"
            stroke="var(--svg-line)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="200"
            cy="115"
            r="38"
            fill="none"
            stroke="var(--svg-line)"
            strokeWidth="1"
          />
          <circle cx="200" cy="115" r="6" fill="var(--svg-line-soft)" />
          <path
            d="M200 53 A62 62 0 0 1 262 115"
            fill="none"
            stroke="var(--svg-line)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <div className="play-btn">
            <span className="material-symbols-outlined text-[28px]">play_arrow</span>
          </div>
        </div>

        <div className="absolute left-4 top-4">
          <span className="pill pill-glass px-3 py-1.5 text-[9px]">4K Simulation</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void to-transparent px-4 pb-4 pt-10">
          <div className="mb-2 flex items-end justify-between gap-3">
            <div className="label-xs text-zinc-200">
              {duration} // {title}
            </div>
            <div className="label-xs tabular-nums text-zinc-400">
              {current} / {duration}
            </div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "34%" }} />
          </div>
          {meta && <div className="label-xs mt-2 text-zinc-500">{meta}</div>}
        </div>
      </div>
    </figure>
  );
}

export function OrbitVisual() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="240" fill="var(--svg-bg)" />
      {[54, 78, 104].map((r, i) => (
        <ellipse
          key={r}
          cx="160"
          cy="120"
          rx={r + 18}
          ry={r * 0.62}
          fill="none"
          stroke="var(--svg-line)"
          strokeWidth={i === 1 ? 1.4 : 1}
          opacity={0.8 - i * 0.15}
          transform={`rotate(${i * 28 - 18} 160 120)`}
        />
      ))}
      <circle cx="160" cy="120" r="22" fill="var(--svg-fg)" />
      <circle cx="160" cy="120" r="30" fill="none" stroke="var(--svg-line)" strokeWidth="1" />
      {[
        [210, 92],
        [112, 150],
        [196, 158],
        [122, 86],
        [168, 62],
        [236, 128],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 3.5 : 4.5} fill="var(--svg-muted)" />
      ))}
    </svg>
  );
}

export function IngotVisual() {
  return (
    <svg viewBox="0 0 360 240" className="h-full w-full" aria-hidden="true">
      <rect width="360" height="240" fill="var(--svg-bg)" />
      <path
        d="M70 120 L180 88 L290 120 L290 150 L180 186 L70 150 Z"
        fill="var(--svg-deep)"
        stroke="var(--svg-line)"
        strokeWidth="1"
      />
      <path
        d="M70 120 L180 88 L290 120 L180 152 Z"
        fill="var(--svg-fg)"
        stroke="var(--svg-line)"
        strokeWidth="1"
      />
      <path d="M110 116 L180 96 L230 110 L180 130 Z" fill="var(--svg-line-soft)" />
      <ellipse cx="268" cy="176" rx="16" ry="10" fill="var(--svg-muted)" />
      <ellipse cx="264" cy="172" rx="5" ry="3" fill="var(--svg-line-soft)" />
    </svg>
  );
}

export function CrystalVisual() {
  return (
    <svg viewBox="0 0 340 260" className="h-full w-full" aria-hidden="true">
      <rect width="340" height="260" fill="var(--svg-bg)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${48 + i * 82} ${70 + (i % 2) * 10})`}>
          <rect
            x="0"
            y="0"
            width="64"
            height="84"
            rx="6"
            fill="none"
            stroke="var(--svg-line)"
            strokeWidth="1.1"
          />
          <rect
            x="14"
            y="16"
            width="36"
            height="52"
            rx="4"
            fill="var(--svg-line-soft)"
            stroke="var(--svg-line)"
            strokeWidth="1"
          />
          {[
            [14, 16],
            [50, 16],
            [14, 68],
            [50, 68],
          ].map(([x, y], j) => (
            <circle key={j} cx={x} cy={y} r="3.2" fill="var(--svg-fg)" />
          ))}
        </g>
      ))}
      <path d="M40 190 H300" stroke="var(--svg-line)" strokeWidth="1" />
      <path d="M40 190 V210" stroke="var(--svg-line)" strokeWidth="1" />
      <text x="290" y="206" fill="var(--svg-line-soft)" fontSize="11" fontFamily="Space Grotesk">
        a
      </text>
      <text x="30" y="214" fill="var(--svg-line-soft)" fontSize="11" fontFamily="Space Grotesk">
        c
      </text>
    </svg>
  );
}

export function SpectrumVisual() {
  const bars = [28, 46, 38, 72, 54, 88, 40, 62, 34, 78, 50, 42, 66, 30, 58, 44];
  return (
    <svg viewBox="0 0 340 240" className="h-full w-full" aria-hidden="true">
      <rect width="340" height="240" fill="var(--svg-bg)" />
      <path d="M28 190 H312" stroke="var(--svg-line)" strokeWidth="1" />
      {bars.map((h, i) => {
        const x = 36 + i * 17;
        const peak = i === 5 || i === 9;
        return (
          <g key={i}>
            <rect
              x={x}
              y={190 - h * 1.35}
              width="10"
              height={h * 1.35}
              rx="2"
              fill={peak ? "var(--svg-bright)" : "var(--svg-dim)"}
              opacity={peak ? 1 : 0.7}
            />
          </g>
        );
      })}
      <text x="28" y="214" fill="var(--svg-line-soft)" fontSize="11" fontFamily="Space Grotesk" letterSpacing="1">
        407.2
      </text>
      <text x="150" y="214" fill="var(--svg-line-soft)" fontSize="11" fontFamily="Space Grotesk" letterSpacing="1">
        417.2
      </text>
      <text x="250" y="214" fill="var(--svg-line-soft)" fontSize="10" fontFamily="Space Grotesk" letterSpacing="1.5">
        nm
      </text>
    </svg>
  );
}

export function DonutVisual() {
  const R = 78;
  const C = 2 * Math.PI * R;
  const gaFraction = 0.0015;
  const gaLen = Math.max(C * gaFraction, 4);
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
      <rect width="240" height="240" fill="var(--svg-bg)" />
      <circle cx="120" cy="120" r={R} fill="none" stroke="var(--svg-line)" strokeWidth="22" />
      <circle
        cx="120"
        cy="120"
        r={R}
        fill="none"
        stroke="var(--svg-bright)"
        strokeWidth="22"
        strokeLinecap="round"
        strokeDasharray={`${gaLen} ${C - gaLen}`}
        strokeDashoffset={C * 0.12}
      />
      <circle cx="120" cy="120" r={R - 22} fill="var(--svg-bg)" stroke="var(--svg-line)" />
      <text x="120" y="112" textAnchor="middle" fill="var(--svg-muted)" fontSize="11" fontFamily="Space Grotesk" letterSpacing="2">
        GA [Z=31]
      </text>
      <text x="120" y="138" textAnchor="middle" fill="var(--svg-bright)" fontSize="20" fontFamily="Syne" fontWeight="600">
        0.0015%
      </text>
    </svg>
  );
}

export function MapVisual() {
  return (
    <svg viewBox="0 0 340 220" className="h-full w-full" aria-hidden="true">
      <rect width="340" height="220" fill="var(--svg-bg)" />
      <path
        d="M40 80 C70 50, 120 48, 150 70 C175 88, 165 120, 140 135 C110 152, 70 145, 50 120 C36 104, 28 92, 40 80 Z"
        fill="var(--svg-line-soft)"
        stroke="var(--svg-line)"
        strokeWidth="1"
      />
      <path
        d="M175 60 C210 42, 265 55, 290 85 C310 110, 295 150, 255 165 C215 180, 175 160, 165 125 C158 100, 155 72, 175 60 Z"
        fill="var(--svg-line-soft)"
        stroke="var(--svg-line)"
        strokeWidth="1"
      />
      <path
        d="M95 150 C125 145, 155 158, 160 180 C163 198, 130 208, 105 198 C82 189, 75 165, 95 150 Z"
        fill="var(--svg-line-soft)"
        stroke="var(--svg-line)"
        strokeWidth="1"
      />
      {[
        [118, 95, "China"],
        [230, 110, "Australia"],
        [175, 145, "Gulf"],
        [85, 105, "Europe"],
      ].map(([x, y, label], i) => (
        <g key={label}>
          <circle cx={x} cy={y} r={i === 0 ? 7 : 4} fill="var(--svg-line-soft)" />
          <circle cx={x} cy={y} r={i === 0 ? 3.5 : 2} fill="var(--svg-bright)" />
          {i === 0 && (
            <>
              <circle
                cx={x}
                cy={y}
                r="13"
                fill="none"
                stroke="var(--svg-line)"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <text x={x + 18} y={y + 4} fill="var(--svg-line-soft)" fontSize="10" fontFamily="Space Grotesk" letterSpacing="1.2">
                PANZHIHUA
              </text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export function WaferVisual() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      <rect width="300" height="220" fill="var(--svg-bg)" />
      <circle cx="150" cy="110" r="82" fill="var(--svg-dim)" opacity="0.7" />
      <circle cx="150" cy="110" r="82" fill="none" stroke="var(--svg-line)" strokeWidth="1.5" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => {
          const x = 98 + c * 28;
          const y = 58 + r * 28;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="22"
              height="22"
              rx="2"
              fill="var(--svg-line-soft)"
              stroke="var(--svg-line)"
              strokeWidth="0.8"
            />
          );
        }),
      )}
      <path d="M150 28 V50" stroke="var(--svg-line)" strokeWidth="3" />
    </svg>
  );
}

export function LedVisual() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true">
      <rect width="300" height="220" fill="var(--svg-bg)" />
      {/* LED body */}
      <rect x="118" y="72" width="64" height="56" rx="8" fill="var(--svg-line-soft)" stroke="var(--svg-line)" />
      <rect x="130" y="84" width="40" height="32" rx="4" fill="var(--svg-bright)" opacity="0.75" />
      <path d="M132 128 V168" stroke="var(--svg-line)" strokeWidth="3" strokeLinecap="round" />
      <path d="M168 128 V168" stroke="var(--svg-line)" strokeWidth="3" strokeLinecap="round" />
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 150 + Math.cos(rad) * 58;
        const y1 = 100 + Math.sin(rad) * 58;
        const x2 = 150 + Math.cos(rad) * 78;
        const y2 = 100 + Math.sin(rad) * 78;
        return (
          <path
            key={deg}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="var(--svg-line)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function DetectorVisual() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="220" fill="var(--svg-bg)" />
      <path
        d="M40 170 C40 100, 280 100, 280 170 Z"
        fill="var(--svg-line-soft)"
        stroke="var(--svg-line)"
        strokeWidth="1.1"
      />
      <path d="M20 170 H300" stroke="var(--svg-line)" strokeWidth="1.5" />
      <rect x="110" y="118" width="100" height="52" rx="6" fill="var(--svg-line-soft)" stroke="var(--svg-line)" />
      <text x="160" y="148" textAnchor="middle" fill="var(--svg-bright)" fontSize="10" fontFamily="Space Grotesk" letterSpacing="1">
        GaCl₃
      </text>
      {[
        [60, 60, 130, 130],
        [260, 55, 190, 128],
        [160, 30, 160, 118],
      ].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="var(--svg-line)" strokeWidth="1.1" strokeDasharray="4 5" />
          <circle cx={x2} cy={y2} r="3" fill="var(--svg-fg)" />
        </g>
      ))}
      <text x="24" y="30" fill="var(--svg-line-soft)" fontSize="10" fontFamily="Space Grotesk" letterSpacing="1.5">
        GRAN SASSO · −1400 m
      </text>
    </svg>
  );
}

export function BayerFlow() {
  const steps = [
    { n: "01", title: "Bauxite Digestion", body: "NaOH pressure · NaGaO₂ liquor", hot: false },
    { n: "02", title: "Resin Adsorption", body: "LS-600 amidoxime capture", hot: true },
    { n: "03", title: "Acid Desorption", body: "HCl elution → GaCl₃", hot: false },
    { n: "04", title: "Electrowinning", body: "99.99% metallic Ga", hot: false },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <div key={s.n} className="relative">
          <div
            className={`h-full rounded-2xl border px-4 py-5 ${
              s.hot
                ? "border-line-strong bg-surface"
                : "border-line bg-trough"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`label-xs ${s.hot ? "text-zinc-200" : "text-zinc-500"}`}>
                STEP {s.n}
              </span>
              {s.hot && (
                <span className="pill bg-zinc-100 px-2 py-1 text-[8px] font-medium text-zinc-900">
                  Active
                </span>
              )}
            </div>
            <div className="mt-3 font-heading text-sm font-medium text-zinc-100">{s.title}</div>
            <div className="mt-2 text-xs leading-relaxed text-zinc-400">{s.body}</div>
          </div>
          {i < 3 && (
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
              <span className="material-symbols-outlined text-[18px] text-zinc-600">
                chevron_right
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function MetricBars({ rows }) {
  return (
    <div className="space-y-3.5">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <span className="label-xs text-zinc-400">{r.label}</span>
            <span className="font-heading text-xs tabular-nums text-zinc-200">{r.value}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${r.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function EquationRow({ eq, tag, tone = "default" }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl border px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between ${
        tone === "hot"
          ? "border-line-strong bg-surface"
          : "border-line bg-trough"
      }`}
    >
      <div className="eq text-[13px] text-zinc-100 sm:text-sm">{eq}</div>
      {tag && (
        <span
          className={`pill shrink-0 px-2.5 py-1 text-[9px] ${
            tone === "hot" ? "bg-zinc-100 text-zinc-900 font-medium" : "pill-glass"
          }`}
        >
          {tag}
        </span>
      )}
    </div>
  );
}
